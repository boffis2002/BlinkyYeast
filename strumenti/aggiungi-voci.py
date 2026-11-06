"""Aggiunge voci a INGREDIENTI, STRUMENTI e GRUPPI in ricette.js.
Uso: python3 -I strumenti/aggiungi-voci.py voci.py [cartella del sito]
voci.py definisce ING, STR e/o GRP come {chiave: (it, en, fr, es, de)}; le chiavi già presenti restano come sono."""
import sys, runpy, os

v = runpy.run_path(sys.argv[1])
sito = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(sito, 'ricette.js')
s = open(p, encoding='utf-8').read()


def q(x):
    return "'" + x.replace('\\', '\\\\').replace("'", "\\'") + "'"


def inserisci(s, nome, voci):
    inizio = s.index(f'const {nome} = {{')
    fine = s.index('\n};', inizio)
    blocco = s[inizio:fine]
    nuove = ''
    for k, (it, en, fr, es, de) in voci.items():
        if f'\n  {k}: {{' not in blocco:
            nuove += f"\n  {k}: {{ it: {q(it)}, en: {q(en)}, fr: {q(fr)}, es: {q(es)}, de: {q(de)} }},"
    return s[:fine] + nuove + s[fine:]


for nome, chiave in (('INGREDIENTI', 'ING'), ('STRUMENTI', 'STR'), ('GRUPPI', 'GRP')):
    if chiave in v:
        s = inserisci(s, nome, v[chiave])
open(p, 'w', encoding='utf-8').write(s)
print('voci aggiornate')
