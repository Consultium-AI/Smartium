# -*- coding: utf-8 -*-
"""Extract LME44 docx to .cursor/lme44_structure.json for section generator."""
import json
import os
import sys
import zipfile
import xml.etree.ElementTree as ET

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
DEFAULT_DOCX = os.path.join(
    ROOT,
    'SS1B10-smartium',
    'Samenvattingen',
    'Week 5',
    'Casus C10_DM_type2',
    'LME44 - _Lipiden_lipoproteinen_metabole_dysregulatie.docx',
)
OUT_JSON = os.path.join(ROOT, '.cursor', 'lme44_structure.json')

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}


def para_text(p):
    parts = []
    for run in p.findall('.//w:r', NS):
        t_elems = run.findall('w:t', NS)
        text = ''.join((t.text or '') + (t.tail or '') for t in t_elems)
        if run.findall('w:br', NS):
            text += '\n'
        bold = run.find('w:rPr/w:b', NS) is not None
        if bold and text.strip():
            parts.append(('b', text))
        else:
            parts.append(('n', text))
    out = ''
    for kind, t in parts:
        if kind == 'b' and t:
            out += '**' + t + '**'
        else:
            out += t
    return out.replace('\r', '')


def table_rows(tbl):
    rows = []
    for tr in tbl.findall('w:tr', NS):
        cells = []
        for tc in tr.findall('w:tc', NS):
            cell_paras = []
            for p in tc.findall('w:p', NS):
                tx = para_text(p).strip()
                if tx:
                    cell_paras.append(tx)
            cells.append('\n'.join(cell_paras) if cell_paras else '')
        rows.append(cells)
    return rows


def main():
    docx = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DOCX
    if not os.path.isfile(docx):
        raise SystemExit(f'missing docx: {docx}')
    with zipfile.ZipFile(docx, 'r') as z:
        root = ET.fromstring(z.read('word/document.xml'))
    body = root.find('w:body', NS)
    if body is None:
        raise SystemExit('no w:body in document.xml')
    blocks = []
    for el in body:
        tag = el.tag.split('}')[-1]
        if tag == 'p':
            t = para_text(el).strip()
            if t:
                blocks.append({'type': 'p', 'text': t})
        elif tag == 'tbl':
            blocks.append({'type': 'table', 'rows': table_rows(el)})
    os.makedirs(os.path.dirname(OUT_JSON), exist_ok=True)
    with open(OUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(blocks, f, ensure_ascii=False, indent=2)
    print(f'Wrote {len(blocks)} blocks to {OUT_JSON}')


if __name__ == '__main__':
    main()
