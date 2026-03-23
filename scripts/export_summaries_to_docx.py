#!/usr/bin/env python3
"""
Exporteert alle LME-samenvattingen naar Word (.docx), gegroepeerd per week binnen een blok.

Bron van waarheid voor welke LME bij welke week hoort: dezelfde structuur als
src/pages/SummaryPage.jsx (courseStructure).

Tekst wordt uit de JSX-bron gehaald in dezelfde leesvolgorde als de site/PDF: eerst
SummaryLayout-kop (title, description, caseLabel), daarna alle secties met h2–h4,
kaarten, lijsten en tabellen. Geen React-runtime nodig.

Gebruik:
  pip install python-docx
  python scripts/export_summaries_to_docx.py

Output (standaard): output/summary_exports/Blok3_Week_1.docx, Blok4_Week_1.docx, ...
"""

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

try:
    from docx import Document
    from docx.shared import Pt
except ImportError:
    print("Installeer python-docx: pip install python-docx", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "src" / "pages"
SUMMARY_PAGE = PAGES_DIR / "SummaryPage.jsx"
SUMMARY_SUBDIR = PAGES_DIR / "summary"
SUMMARIES_DIR = ROOT / "src" / "summaries"


# Zelfde hiërarchie als courseStructure in SummaryPage.jsx (handmatig gesynchroniseerd).
COURSE_WEEKS: list[tuple[str, str, str, list[tuple[str, str, str]]]] = [
    (
        "blok3",
        "Blok 3: Groei en Ontwikkeling II",
        "Week 1",
        [
            (
                "Casus 1: Van embryo naar baby",
                "embryogenese",
                "Embryogenese Bouwplan",
            ),
            (
                "Casus 1: Van embryo naar baby",
                "beeldvorming",
                "Foetale beeldvorming en de 13 wekenecho",
            ),
            (
                "Casus 1: Van embryo naar baby",
                "extraembryonaal",
                "Het embryo en de extra embryonale structuren",
            ),
            (
                "Casus 2: Spina bifida",
                "extremiteiten",
                "Ontwikkeling extremiteiten en gewrichtsleer",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 1",
        [
            (
                "Casus 1: Algemene introductie",
                "aangeboren-immuniteit-herkenning",
                "Aangeboren immuniteit - herkenning",
            ),
            (
                "Casus 1: Algemene introductie",
                "introductie-bacteriologie",
                "Introductie bacteriologie",
            ),
            (
                "Casus 1: Algemene introductie",
                "introductie-immunologie",
                "Introductie en overzicht immunologie",
            ),
            (
                "Casus 1: Algemene introductie",
                "introductie-mycologie",
                "Introductie mycologie",
            ),
            (
                "Casus 1: Algemene introductie",
                "introductie-parasitologie",
                "Introductie parasitologie",
            ),
            (
                "Casus 1: Algemene introductie",
                "introductie-virologie",
                "Introductie virologie – deel 1",
            ),
            (
                "Casus 1: Algemene introductie",
                "voorbereiding-vow-microbiologie",
                "Voorbereiding VOW Microbiologie",
            ),
            (
                "Casus 2: Vrouw met Urineweginfectie",
                "aangeboren-immuniteit-respons",
                "Aangeboren immuniteit – respons",
            ),
            (
                "Casus 2: Vrouw met Urineweginfectie",
                "antibiotica-leerlijn",
                "Antibiotica leerlijn",
            ),
            (
                "Casus 2: Vrouw met Urineweginfectie",
                "introductie-antimicrobiele-therapie",
                "Introductie antimicrobiële therapie",
            ),
            (
                "Casus 2: Vrouw met Urineweginfectie",
                "urineweginfecties",
                "Urineweginfecties",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 2",
        [
            (
                "Casus 3: Kind met RS-virus",
                "infectiepreventie",
                "Infectiepreventie",
            ),
            (
                "Casus 3: Kind met RS-virus",
                "introductie-luchtweginfecties",
                "Introductie luchtweginfecties",
            ),
            (
                "Casus 3: Kind met RS-virus",
                "microscopische-anatomie-luchtwegen",
                "Microscopische anatomie luchtwegen",
            ),
            (
                "Casus 3: Kind met RS-virus",
                "pathofysiologie-virale-luchtweginfecties",
                "Pathofysiologie virale luchtweginfecties",
            ),
            (
                "Casus 3: Kind met RS-virus",
                "vervolg-introductie-virologie-2",
                "Vervolg introductie virologie 2",
            ),
            (
                "Casus 3: Kind met RS-virus",
                "virale-diagnostiek",
                "Virale diagnostiek",
            ),
            (
                "Casus 4: Kind met koorts",
                "cytokinen",
                "Cytokinen",
            ),
            (
                "Casus 4: Kind met koorts",
                "infectieuze-oorzaken-koorts",
                "Infectieuze oorzaken van koorts bij kinderen",
            ),
            (
                "Casus 4: Kind met koorts",
                "niet-infectieuze-oorzaken-koorts",
                "Niet-infectieuze oorzaken van koorts bij kinderen",
            ),
            (
                "Casus 4: Kind met koorts",
                "ontstekingsmediatoren",
                "Ontstekingsmediatoren",
            ),
            (
                "Casus 4: Kind met koorts",
                "wat-is-koorts",
                "Wat is koorts",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 3",
        [
            (
                "Casus 5: Onderste luchtweginfectie",
                "specifieke-verwekkers-lagere-luchtweginfecties",
                "Specifieke verwekkers lagere luchtweginfecties",
            ),
            (
                "Casus 5: Onderste luchtweginfectie",
                "therapie-lagere-luchtweginfecties",
                "Therapie lagere luchtweginfecties",
            ),
            (
                "Casus 6: Lymfeklier",
                "homing-migratie-recirculatie",
                "Homing, migratie en recirculatie",
            ),
            (
                "Casus 6: Lymfeklier",
                "infectieuze-lymfadenopathie",
                "Infectieuze lymfadenopathie – tweede lijn",
            ),
            (
                "Casus 6: Lymfeklier",
                "introductie-verworven-immuniteit",
                "Introductie verworven immuniteit",
            ),
            (
                "Casus 6: Lymfeklier",
                "secundaire-lymfoide-organen",
                "Secundaire lymfoïde organen",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 4",
        [
            ("Casus 8: HIV", "antivirale-therapie", "Antivirale therapie"),
            ("Casus 8: HIV", "de-grote-drie-malaria", "De grote drie Malaria"),
            (
                "Casus 8: HIV",
                "duurzame-hiv-zorg",
                "Duurzame hiv zorg in sub-Sahara-Afrika",
            ),
            (
                "Casus 8: HIV",
                "immunologische-consequenties-hiv",
                "Immunologische consequenties hiv",
            ),
            (
                "Casus 8: HIV",
                "tuberculose-bij-migranten",
                "Tuberculose bij migranten",
            ),
            (
                "Casus 8: HIV",
                "tuberculose-inleiding",
                "Tuberculose – een inleiding",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 5",
        [
            (
                "Casus 7",
                "lme5-schimmelinfecties",
                "Schimmelinfecties van de huid, nagels en haren",
            ),
            (
                "Casus 7",
                "lme6-voorbereiding-vow-milt",
                "Voorbereiding VOW Milt",
            ),
            (
                "Casus 9",
                "lme1-parasitaire-verwekkers-gastro-enteritis",
                "Parasitaire verwekkers van gastro-enteritis",
            ),
            (
                "Casus 9",
                "lme2-virale-verwekkers-gastro-enteritis",
                "Virale verwekkers van gastro-enteritis",
            ),
            (
                "Casus 9",
                "lme3-welk-antibioticum-kies-ik",
                "Welk antibioticum kies ik",
            ),
            (
                "Casus 10: Vaccinatie",
                "casus10-lme1-dwang-en-drang-historisch-perspectief",
                "Dwang en drang in historisch perspectief",
            ),
            (
                "Casus 10: Vaccinatie",
                "casus10-lme2-immunomodulatie",
                "Immunomodulatie",
            ),
            (
                "Casus 10: Vaccinatie",
                "casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas",
                "Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren",
            ),
            (
                "Casus 10: Vaccinatie",
                "casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie",
                "Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 6",
        [
            (
                "Casus 11: Primaire immuundeficiënties",
                "casus11-lme1-leefstijl-en-immuunsysteem",
                "Leefstijl en immuunsysteem",
            ),
            (
                "Casus 12: Lijninfecties & resistenties",
                "casus12-lme1-antibioticaresistentie-en-therapie",
                "Antibioticaresistentie en therapie",
            ),
            (
                "Casus 12: Lijninfecties & resistenties",
                "casus12-lme2-sepsis",
                "Sepsis",
            ),
            (
                "Casus 12: Lijninfecties & resistenties",
                "casus12-lme3-patient-en-medicatieveiligheid",
                "Patient- en medicatieveiligheid",
            ),
            (
                "Casus 12: Lijninfecties & resistenties",
                "casus12-lme4-zorggerelateerde-infecties",
                "Zorggerelateerde infecties",
            ),
        ],
    ),
    (
        "blok4",
        "Blok 4: Microbiologie en Immunologie",
        "Week 7",
        [
            (
                "Casus 13: Een piloot met koorts",
                "casus13-lme1-antibiotica-introductie",
                "Antibiotica Introductie",
            ),
            (
                "Casus 13: Een piloot met koorts",
                "casus13-lme2-antibiotica-resistentie",
                "Antibiotica Resistentie",
            ),
        ],
    ),
]


def parse_summary_page_routing() -> tuple[dict[str, str], dict[str, Path]]:
    """lme_id -> component_name, component_name -> source file (relative to src/pages)."""
    text = SUMMARY_PAGE.read_text(encoding="utf-8")

    # Per if-blok: eerste <.../> is vaak <Header /> — we willen de *Summary-component.
    _chrome = frozenset({"Header", "BackButton", "Footer"})

    def pick_summary_component(chunk: str) -> str | None:
        matches = re.findall(r"<(\w+)\s*/>", chunk)
        for name in reversed(matches):
            if name.endswith("Summary"):
                return name
        for name in reversed(matches):
            if name not in _chrome:
                return name
        return matches[-1] if matches else None

    lme_to_component: dict[str, str] = {}
    parts = re.split(r"\n  if \(lme === ", text)
    for chunk in parts[1:]:
        m_id = re.match(r"'([^']+)'\)", chunk)
        if not m_id:
            continue
        lme_id = m_id.group(1)
        comp = pick_summary_component(chunk)
        if comp:
            lme_to_component[lme_id] = comp

    component_to_file: dict[str, Path] = {}

    def register(names: list[str], rel: str) -> None:
        p = Path(rel)
        for n in names:
            component_to_file[n] = p

    # Named imports uit ./summary/ — vaak meerdere regels: import {\n  Foo,\n  Bar,\n} from '...'
    for m_named in re.finditer(
        r"import\s+\{([^}]+)\}\s+from\s+['\"](\.\/summary\/[^'\"]+)['\"]",
        text,
    ):
        names = [x.strip() for x in m_named.group(1).split(",") if x.strip()]
        rel = "summary/" + m_named.group(2).split("/")[-1]
        if not rel.endswith(".jsx"):
            rel += ".jsx"
        register(names, rel)

    for line in text.splitlines():
        line = line.strip()
        m_default = re.match(
            r"import\s+(\w+)\s+from\s+['\"](\.\.\/summaries\/[^'\"]+)['\"]",
            line,
        )
        if m_default:
            name = m_default.group(1)
            rel_path = m_default.group(2).replace("../", "")
            component_to_file[name] = Path("..") / Path(rel_path).with_suffix(".jsx")
            continue

    return lme_to_component, component_to_file


def resolve_js_path(rel_from_pages: Path) -> Path:
    resolved = (PAGES_DIR / rel_from_pages).resolve()
    if not resolved.is_file():
        alt = resolved.with_suffix(".tsx")
        if alt.is_file():
            return alt
    return resolved


def extract_arrow_body(content: str, component_name: str) -> str | None:
    """Functiebody na `=> {` (werkt ook bij `({ standalone = true }) =>`)."""
    needle = f"const {component_name}"
    idx = content.find(needle)
    if idx == -1:
        return None
    arrow = content.find("=>", idx)
    if arrow == -1:
        return None
    brace_start = content.find("{", arrow)
    if brace_start == -1:
        return None
    depth = 0
    i = brace_start
    while i < len(content):
        c = content[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return content[brace_start + 1 : i]
        i += 1
    return None


def strip_jsx_exprs(s: str) -> str:
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        if i + 1 < n and s[i : i + 2] == "{{":
            out.append("{")
            i += 2
            continue
        if s[i] == "{":
            depth = 1
            i += 1
            while i < n and depth:
                if i + 1 < n and s[i : i + 2] == "{{":
                    i += 2
                    continue
                if s[i] == "{":
                    depth += 1
                elif s[i] == "}":
                    depth -= 1
                i += 1
            out.append(" ")
            continue
        out.append(s[i])
        i += 1
    return "".join(out)


def extract_summary_layout_parts(body: str) -> tuple[str, str]:
    """
    Haalt attributenstring en children van de eerste <SummaryLayout> uit component-body.
    Als er geen SummaryLayout is, valt terug op hele body.
    """
    m = re.search(r"<SummaryLayout([^>]*)>([\s\S]*?)</SummaryLayout>", body)
    if m:
        return m.group(1).strip(), m.group(2).strip()
    return "", body


def summary_layout_header_lines(attrs: str) -> str:
    """title, description, caseLabel uit SummaryLayout-attributen (zoals PDF-kop)."""
    lines: list[str] = []
    for attr in ("title", "description", "caseLabel"):
        for m in re.finditer(rf'{attr}="([^"]*)"', attrs):
            t = m.group(1).strip()
            if t:
                lines.append(t)
    return "\n\n".join(lines)


def jsx_linearize_to_text(jsx_inner: str) -> str:
    """
    Zet JSX-body om naar doorlopende tekst in bronvolgorde (zoals gerenderde pagina/PDF).
    Gebruikt markdown-achtige koppen voor Word: ## = h2, ### = h3, #### = h4.
    """
    s = jsx_inner
    s = re.sub(r"/\*[\s\S]*?\*/", "", s)
    s = re.sub(r"\{/\*[\s\S]*?\*/\}", "", s)
    s = strip_jsx_exprs(s)

    # Zelfsluitende React-componenten (Lucide, custom) — geen tekst
    s = re.sub(
        r"<[A-Z][A-Za-z0-9.]*(?:\s[^>]*)?/>",
        "",
        s,
    )
    # Zelfsluitende html-achtige tags
    s = re.sub(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?/>", "", s)

    inline_tags = r"</?(?:strong|b|em|i|mark|small|span|a)(?:\s[^>]*)?>"
    s = re.sub(inline_tags, "", s, flags=re.I)

    def blk(pat: str, rep: str, flags: int = 0) -> None:
        nonlocal s
        s = re.sub(pat, rep, s, flags=flags)

    blk(r"<h1[^>]*>", "\n\n# ", re.I)
    blk(r"</h1>", "\n", re.I)
    blk(r"<h2[^>]*>", "\n\n## ", re.I)
    blk(r"</h2>", "\n", re.I)
    blk(r"<h3[^>]*>", "\n\n### ", re.I)
    blk(r"</h3>", "\n", re.I)
    blk(r"<h4[^>]*>", "\n\n#### ", re.I)
    blk(r"</h4>", "\n", re.I)
    blk(r"<h5[^>]*>", "\n\n##### ", re.I)
    blk(r"</h5>", "\n", re.I)
    blk(r"<h6[^>]*>", "\n\n###### ", re.I)
    blk(r"</h6>", "\n", re.I)

    blk(r"<p[^>]*>", "\n", re.I)
    blk(r"</p>", "\n", re.I)
    blk(r"<li[^>]*>", "\n• ", re.I)
    blk(r"</li>", "\n", re.I)
    blk(r"<br\s*/?>", "\n", re.I)
    blk(r"<hr[^>]*/?>", "\n\n---\n", re.I)

    blk(r"<th[^>]*>", "\n[", re.I)
    blk(r"</th>", "] ", re.I)
    blk(r"<td[^>]*>", "\n", re.I)
    blk(r"</td>", "\t", re.I)
    blk(r"<tr[^>]*>", "\n", re.I)
    blk(r"</tr>", "\n", re.I)

    blk(r"<section[^>]*>", "\n", re.I)
    blk(r"</section>", "\n", re.I)
    blk(r"<article[^>]*>", "\n", re.I)
    blk(r"</article>", "\n", re.I)
    blk(r"<header[^>]*>", "\n", re.I)
    blk(r"</header>", "\n", re.I)
    blk(r"<footer[^>]*>", "\n", re.I)
    blk(r"</footer>", "\n", re.I)
    blk(r"<main[^>]*>", "\n", re.I)
    blk(r"</main>", "\n", re.I)

    # Overige tags: verwijderen, inhoud blijft
    s = re.sub(r"</[a-zA-Z][a-zA-Z0-9]*>", "\n", s)
    s = re.sub(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?>", " ", s)

    s = s.replace("&nbsp;", " ")
    s = s.replace("&#39;", "'")
    s = s.replace("&quot;", '"')
    s = re.sub(r"\n•\s*•\s*", "\n• ", s)
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n[ \t]+", "\n", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = merge_markdown_heading_continuations(s)
    return s.strip()


def merge_markdown_heading_continuations(text: str) -> str:
    """Voegt losse '#…#' regels samen met de volgende regel (multiline h2 in JSX)."""
    lines = text.splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        cur = lines[i].strip()
        if re.match(r"^#{1,6}\s*$", cur) and i + 1 < len(lines):
            nxt = lines[i + 1].strip()
            if nxt and not nxt.startswith("#"):
                out.append(f"{cur} {nxt}")
                i += 2
                continue
        out.append(lines[i])
        i += 1
    return "\n".join(out)


def jsx_body_to_full_text(component_body: str) -> str:
    """tableOfContents + return buiten beschouwing laten: alleen SummaryLayout."""
    attrs, children = extract_summary_layout_parts(component_body)
    header = summary_layout_header_lines(attrs)
    body = jsx_linearize_to_text(children)
    if header and body:
        return f"{header}\n\n{body}"
    if header:
        return header
    return jsx_linearize_to_text(component_body)


def extract_titles_from_toc(jsx: str) -> list[str]:
    """Haalt title: '...' uit tableOfContents-array (eerste grote array na const tableOfContents)."""
    idx = jsx.find("const tableOfContents")
    if idx == -1:
        return []
    sub = jsx[idx : idx + 8000]
    return re.findall(r"title:\s*'((?:\\'|[^'])*)'", sub)


def ordered_image_imports(main_jsx: str) -> list[str]:
    """Bestandsnamen zoals Image01IntroductieSummary uit ./Image...."""
    return re.findall(r'from ["\']\./(Image\d+\w*Summary)["\']', main_jsx)


# SummaryPage importeert casus12-lme1 als namespace (* as …); geen directe component→pad mapping.
LME_FALLBACK_FILES: dict[str, tuple[str, Path]] = {
    "casus12-lme1-antibioticaresistentie-en-therapie": (
        "Casus12Lme1AntibioticaresistentieSummary",
        SUMMARIES_DIR
        / "casus12-lme1-antibioticaresistentie-en-therapie"
        / "Casus12Lme1AntibioticaresistentieSummary.jsx",
    ),
}


def load_main_module_text(
    lme_id: str,
    lme_to_component: dict[str, str],
    component_to_file: dict[str, Path],
) -> str:
    comp = lme_to_component.get(lme_id)
    if not comp:
        return f"[Geen route gevonden in SummaryPage.jsx voor lme={lme_id}]"

    path: Path | None = None
    if lme_id in LME_FALLBACK_FILES:
        comp_fb, path_fb = LME_FALLBACK_FILES[lme_id]
        comp = comp_fb
        path = path_fb
    else:
        rel = component_to_file.get(comp)
        if not rel:
            return f"[Geen import-pad voor component {comp}]"
        path = resolve_js_path(rel)

    if not path.is_file():
        return f"[Bestand ontbreekt: {path}]"

    content = path.read_text(encoding="utf-8")
    body = extract_arrow_body(content, comp)
    if body is None:
        # hele bestand (kleine exports)
        body = content

    images = ordered_image_imports(content)
    if not images:
        return jsx_body_to_full_text(body)

    toc_titles = extract_titles_from_toc(content)
    chunks: list[str] = []
    folder = path.parent
    for i, mod in enumerate(images):
        title = (
            toc_titles[i]
            if i < len(toc_titles)
            else f"Onderdeel {i + 1}"
        )
        ip = folder / f"{mod}.jsx"
        if not ip.is_file():
            chunks.append(f"## {title}\n\n[Bestand ontbreekt: {ip.name}]")
            continue
        inner = ip.read_text(encoding="utf-8")
        comp_img = mod  # e.g. Image01IntroductieSummary
        ib = extract_arrow_body(inner, comp_img)
        if ib is None:
            ib = inner
        txt = jsx_body_to_full_text(ib)
        chunks.append(f"## {title}\n\n{txt}")

    main_body = extract_arrow_body(content, comp) or content
    attrs_wrap, _ = extract_summary_layout_parts(main_body)
    pre = summary_layout_header_lines(attrs_wrap)
    if pre:
        pre = pre + "\n\n---\n\n"
    return pre + "\n\n".join(chunks)


def append_formatted_plaintext_to_doc(doc: Document, text: str) -> None:
    """Verwerkt regels met # … ###### koppen (output van jsx_linearize_to_text)."""
    buf: list[str] = []

    def flush() -> None:
        if not buf:
            return
        combined = "\n".join(buf).strip()
        if combined:
            doc.add_paragraph(combined)
        buf.clear()

    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            flush()
            continue
        if line.startswith("###### "):
            flush()
            doc.add_heading(line[7:].strip(), level=8)
            continue
        if line.startswith("##### "):
            flush()
            doc.add_heading(line[6:].strip(), level=7)
            continue
        if line.startswith("#### "):
            flush()
            doc.add_heading(line[5:].strip(), level=6)
            continue
        if line.startswith("### "):
            flush()
            doc.add_heading(line[4:].strip(), level=5)
            continue
        if line.startswith("## "):
            flush()
            doc.add_heading(line[3:].strip(), level=4)
            continue
        if line.startswith("# "):
            flush()
            doc.add_heading(line[2:].strip(), level=3)
            continue
        if line == "---":
            flush()
            continue
        buf.append(raw.rstrip())
    flush()


def build_week_documents(
    out_dir: Path,
) -> None:
    lme_to_component, component_to_file = parse_summary_page_routing()
    out_dir.mkdir(parents=True, exist_ok=True)

    # (blok_id, blok_name, week_name) -> …
    by_week: dict[tuple[str, str, str], list[tuple[str, str, str]]] = defaultdict(
        list
    )
    missing: list[str] = []

    for blok_id, blok_name, week_name, entries in COURSE_WEEKS:
        for case_name, lme_id, lme_title in entries:
            text = load_main_module_text(lme_id, lme_to_component, component_to_file)
            if text.startswith("["):
                missing.append(f"{blok_id} {week_name} {lme_id}: {text}")
            by_week[(blok_id, blok_name, week_name)].append((case_name, lme_title, text))

    for (blok_id, blok_name, week_name), items in by_week.items():
        safe_week = week_name.replace(" ", "_")
        fname = f"{blok_id.capitalize()}_{safe_week}.docx"
        doc = Document()
        style = doc.styles["Normal"]
        style.font.name = "Calibri"
        style.font.size = Pt(11)

        doc.add_heading(f"{blok_name} — {week_name}", 0)
        doc.add_paragraph(
            "Automatisch geëxporteerd uit de Smartium JSX-samenvattingen."
        )

        current_case: str | None = None
        for case_name, lme_title, text in items:
            if case_name != current_case:
                current_case = case_name
                doc.add_heading(case_name, level=1)

            doc.add_heading(f"LME: {lme_title}", level=2)
            append_formatted_plaintext_to_doc(doc, text)

        out_path = out_dir / fname
        doc.save(out_path)
        print(f"Geschreven: {out_path}")

    if missing:
        print("\nWaarschuwingen:", file=sys.stderr)
        for m in missing:
            print(f"  {m}", file=sys.stderr)


def main() -> None:
    out = ROOT / "output" / "summary_exports"
    if len(sys.argv) > 1:
        out = Path(sys.argv[1]).resolve()
    build_week_documents(out)


if __name__ == "__main__":
    main()
