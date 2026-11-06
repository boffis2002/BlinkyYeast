"""Aggiunge ricette al sito da un lotto scritto in Python: voce d'indice in ricette.js e file ricette/<id>.js.
Uso: python3 -I strumenti/genera.py lotto.py [cartella del sito]
Il lotto definisce RICETTE, una lista di dict con: id, categoria, commento, titolo, descrizione (testi nelle 5 lingue),
ingredienti, difficolta, strumenti, tempo (dict o None), fonte (nome, url), pezzi (numero, peso o None, nota) e/o
contenitore (dict con nota), dosi (gruppo, voci, fuoriPeso?, da?), notaDosi, passi. Con peso None il peso di un pezzo
è il totale dei gruppi che contano nel peso diviso per il numero di pezzi. Dopo: node controlla-ricette.js"""
import sys, runpy, os

LINGUE = ['it', 'en', 'fr', 'es', 'de']


def q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def tradotto(d, rientro):
    pad = ' ' * rientro
    return '{\n' + ''.join(f"{pad}  {l}: {q(d[l])},\n" for l in LINGUE) + pad + '}'


def num(x):
    return str(int(x)) if float(x).is_integer() else str(x)


def voce(v):
    return '[' + ', '.join([q(v[0])] + [num(x) for x in v[1:]]) + ']'


def media(v):
    return 0 if len(v) == 1 else (v[1] + (v[2] if len(v) > 2 else v[1])) / 2


def indice(r):
    t = r['tempo']
    tempo = 'null' if t is None else '{ ' + ', '.join(
        [f"min: {t['min']}"] + ([f"max: {t['max']}"] if 'max' in t else []) + (['almeno: true'] if t.get('almeno') else [])) + ' }'
    righe = [f"    // {r['commento']}"] if r.get('commento') else []
    righe += [
        f"    id: {q(r['id'])},",
        f"    categoria: {q(r['categoria'])},",
        f"    titolo: {tradotto(r['titolo'], 4)},",
        f"    descrizione: {tradotto(r['descrizione'], 4)},",
        f"    ingredienti: [{', '.join(q(x) for x in r['ingredienti'])}],",
        f"    difficolta: {r['difficolta']},",
        f"    strumenti: [{', '.join(q(x) for x in r['strumenti'])}],",
        f"    tempo: {tempo},",
        f"    fonte: {{\n      nome: {q(r['fonte'][0])},\n      url: {q(r['fonte'][1])},\n    }},",
        "    immagine: null,",
    ]
    return '  {\n' + '\n'.join(righe) + '\n  },\n'


def dettaglio(r):
    out = [f"// Dettaglio della ricetta «{r['id']}»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).",
           f"DETTAGLI[{q(r['id'])}] = {{"]
    if 'pezzi' in r:
        n, peso, nota = r['pezzi']
        if peso is None:
            tot = sum(media(v) for g in r['dosi'] if not g.get('da') and not g.get('fuoriPeso') for v in g['voci'])
            peso = round(tot / n)
        out.append(f"  pezzi: {{\n    numero: {n}, peso: {num(peso)},\n    nota: {tradotto(nota, 4)},\n  }},")
    if 'contenitore' in r:
        c = dict(r['contenitore'])
        nota = c.pop('nota')
        campi = ', '.join(f"{k}: {q(v) if isinstance(v, str) else num(v)}" for k, v in c.items())
        out.append(f"  contenitore: {{\n    {campi},\n    nota: {tradotto(nota, 4)},\n  }},")
    out.append('  dosi: [')
    for g in r['dosi']:
        extra = ', fuoriPeso: true' if g.get('fuoriPeso') else ''
        extra += f", da: {q(g['da'])}" if g.get('da') else ''
        out.append(f"    {{ nome: GRUPPI.{g['gruppo']}{extra},\n      ingredienti: [{', '.join(voce(v) for v in g['voci'])}] }},")
    out.append('  ],')
    out.append(f"  notaDosi: {tradotto(r['notaDosi'], 2)},")
    out.append('  passi: [')
    for p in r['passi']:
        out.append('    ' + tradotto(p, 4) + ',')
    out.append('  ],')
    out.append('};')
    return '\n'.join(out) + '\n'


lotto = runpy.run_path(sys.argv[1])['RICETTE']
sito = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(sito, 'ricette.js')
s = open(p, encoding='utf-8').read()
fine = s.rindex('];')
nuove = ''
for r in lotto:
    assert f"id: '{r['id']}'" not in s, f"id già presente: {r['id']}"
    nuove += indice(r)
    open(os.path.join(sito, 'ricette', r['id'] + '.js'), 'w', encoding='utf-8').write(dettaglio(r))
open(p, 'w', encoding='utf-8').write(s[:fine] + nuove + s[fine:])
print(len(lotto), 'ricette aggiunte')
