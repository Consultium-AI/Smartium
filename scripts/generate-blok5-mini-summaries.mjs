#!/usr/bin/env node
// Reads all .docx files from "mini samenvattingen blok5/" and generates
// one data file per summary + a central index.
//
// Usage:  node scripts/generate-blok5-mini-summaries.mjs

import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCX_DIR = path.join(ROOT, 'mini samenvattingen blok5');
const OUT_DIR = path.join(ROOT, 'src', 'summaries', 'mini-samenvattingen-blok5');

// ── LME number → base lme ID (without -mini suffix) ─────────────────────────
const LME_TO_BASE_ID = {
  1:  'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud',
  2:  'blok5-week1-casus1-externe-verstorende-factoren-op-de-huidbarriere',
  3:  'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid',
  4:  'blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb',
  5:  'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid',
  6:  'blok5-week1-casus2-voeding-en-inhalatieallergie',
  7:  'blok5-week1-casus2-nadelige-reacties-van-medicatie',
  8:  'blok5-week1-casus2-provoke',
  9:  'blok5-week1-casus2-psoriasis',
  10: 'blok5-week2-casus3-aangeboren-stollingsstoornissen',
  11: 'blok5-week2-casus3-begripsbepaling-dermatologische-uitingen',
  12: 'blok5-week2-casus3-hemostase-basis',
  13: 'blok5-week2-casus3-vasculitis-klein-middel-groot',
  14: 'blok5-week2-casus4-chronische-ontsteking',
  15: 'blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen',
  16: 'blok5-week2-casus4-immuuntherapie-van-kanker',
  17: 'blok5-week2-casus4-melanoom-gelokaliseerd',
  18: 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne',
  19: 'blok5-week2-casus4-sentinel-node',
  20: 'blok5-week2-casus4-systemische-therapie-van-melanoom',
  21: 'blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom',
  22: 'blok5-week3-casus5-huidtumoren-benigne-en-premaligne',
  23: 'blok5-week3-casus5-leefstijl-en-kanker',
  24: 'blok5-week3-casus5-milieu-en-gezondheid',
  25: 'blok5-week3-casus6-behandeling-van-mammacarcinoom',
  26: 'blok5-week3-casus6-familiair-mammacarcinoom',
  27: 'blok5-week3-casus6-het-slechtnieuwsgesprek',
  28: 'blok5-week3-casus6-mammapathologie',
  29: 'blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom',
  30: 'blok5-week3-casus6-radiologische-diagnostiek-mammacarcinoom',
  31: 'blok5-week4-casus7-flebologische-aandoeningen',
  32: 'blok5-week4-casus7-lymfadenopathie',
  33: 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging',
  34: 'blok5-week4-casus8-erysipelas-en-cellulitis',
  35: 'blok5-week4-casus8-hydradenitis-suppurativa',
  36: 'blok5-week4-casus8-introductiemodule-planetary-health',
  37: 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24',
  38: 'blok5-week4-casus8-lymfeklierdissectie',
  39: 'blok5-week4-casus8-necrotiserende-wekedeleninfectie',
  40: 'blok5-week4-casus8-radiotherapie-in-de-praktijk',
  41: 'blok5-week4-casus8-volksgezondheidsindicatoren-dalys',
  42: 'blok5-week5-casus9-bouw-en-functie-van-de-thymus',
  43: 'blok5-week5-casus9-endocriene-auto-immuunziekten',
  44: 'blok5-week5-casus9-pathogenese-auto-immuunziekten',
  45: 'blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie',
  46: 'blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit',
  47: 'blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd',
  48: 'blok5-week5-casus11-introductie-kinderoncologie',
  49: 'blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks',
  50: 'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd',
  51: 'blok5-week5-casus11-typen-kinderoncologie-bij-kinderen',
  52: 'blok5-week6-casus12-gaswisseling-hb-o2-co2-co',
  53: 'blok5-week6-casus12-nvic-acute-vergiftiging',
  54: 'blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties',
  55: 'blok5-week6-casus13-botopbouw-botafbraak-en-pathologische-breuken',
  56: 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten',
  57: 'blok5-week6-casus13-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie',
  58: 'blok5-week6-casus13-m-proteine-diagnostiek-eiwit-als-tumormarker',
  59: 'blok5-week6-casus13-transplantatiegeneeskunde',
  60: 'blok5-week7-casus14-dermatoloog-in-je-broekzak',
  61: 'blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem',
  62: 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie',
  63: 'blok5-week8-casus15-scylla-en-charybdis',
};

// ── Non-LME files: filename (without .docx) → base ID ──────────────────────
const NON_LME_TO_BASE_ID = {
  'LMO Eczeem samenvatting': 'blok5-week1-casus2-lmo-eczeem',
  'LMV Anafylaxie, type I allergie samenvatting': 'blok5-week1-casus2-lmv-anafylaxie-type-i-allergie',
  'LMV Centrale vs perifere tolerantie samenvatting': 'blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie',
  'LMV Contact allergie en allergologisch onderzoek samenvatting': 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek',
  'STM Pathogenese type IV allergie samenvatting': 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie',
  'LMV Is het vasculitis of vasculopathie_ samenvatting': 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie',
  'LMO Verdachte huidafwijkingen samenvatting': 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen',
  'LMO Zorgmijding samenvatting': 'blok5-week3-casus5-lmo-zorgmijding',
  'LMO Differentiaal diagnostische aanpak van zwelling in het been samenvatting': 'blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been',
  'LMO Voorbereiding VOW Hoeveel mag een levensjaar kosten_ samenvatting': 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten',
  'LMV Verworven Stollingsstoornissen samenvatting': 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen',
  'LMO Positieve en negatieve selectie samenvatting': 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie',
  'LMO voorbereiding VO RA_ Klinische presentatie en immuunmechanismen samenvatting': 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen',
  'LMV Auto-immuniteit als bijwerking bij immunotherapie samenvatting': 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie',
  'LMV Introductie auto-immuniteit versus auto-inflammatie samenvatting': 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie',
  'LMV Pati\u00ebnt met SLE samenvatting': 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting',
  'LMO TRAPS, FMF en HIDS, allemaal autoinflammatoir en toch allemaal anders samenvatting': 'blok5-week5-casus10-lmo-traps-fmf-en-hids',
  'LMV Sarco\u00efdose_ presentatie en pathogenese samenvatting': 'blok5-week5-casus10-lmv-sarcoidose-presentatie-en-pathogenese',
  'LMO Importziekten samenvatting': 'blok5-week5-casus11-lmo-importziekten',
  'LMO Infecties binnen de kinderoncologie samenvatting': 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie',
  'LMO Ethiek van derma-apps samenvatting': 'blok5-week7-casus14-lmo-ethiek-van-derma-apps',
  'LMO Implementatie in de dermatologische praktijk samenvatting': 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk',
  'LMO Wat is Ai_ samenvatting': 'blok5-week7-casus14-lmo-wat-is-ai',
  'LMO Voorbereiden VOW Palliatieve Zorg samenvatting': 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg',
};

// ── Casus labels for SummaryLayout ───────────────────────────────────────────
const CASUS_LABELS = {
  '1-1': 'Week 1 \u00b7 Casus 1: De huid als succesvolle barri\u00e8re',
  '1-2': 'Week 1 \u00b7 Casus 2: De veranderde barri\u00e8re',
  '2-3': 'Week 2 \u00b7 Casus 3: Paarse vlek',
  '2-4': 'Week 2 \u00b7 Casus 4: Donkere vlek',
  '3-5': 'Week 3 \u00b7 Casus 5: De verdachte huid',
  '3-6': 'Week 3 \u00b7 Casus 6: Knobbel in de borst',
  '4-7': 'Week 4 \u00b7 Casus 7: Zwelling van de lies en/of een dik been',
  '4-8': 'Week 4 \u00b7 Casus 8: Zwelling in de oksel',
  '5-9':  'Week 5 \u00b7 Casus 9: Pati\u00ebnt met auto-immuunziekte',
  '5-10': 'Week 5 \u00b7 Casus 10: Pati\u00ebnt met auto-inflammatoire ziekte',
  '5-11': 'Week 5 \u00b7 Casus 11: Kind met algehele malaise, koorts en zwelling in de buik',
  '6-12': 'Week 6 \u00b7 Casus 12: Verwarde pati\u00ebnt met griepachtige klachten',
  '6-13': 'Week 6 \u00b7 Casus 13: Multipel myeloom',
  '7-14': 'Week 7 \u00b7 Casus 14: AI in de zorg',
  '8-15': 'Week 8 \u00b7 Casus 15: Kiezen tussen twee kwaden',
};

// ── Icons: first = BookOpen, last = CheckCircle2, middle rotates ─────────────
const MID_ICONS = [
  'Layers', 'Stethoscope', 'Activity', 'ShieldAlert', 'ClipboardList',
  'GitBranch', 'Microscope', 'FlaskConical', 'Pill', 'Heart',
  'Dna', 'Droplets', 'HeartPulse', 'Brain', 'Syringe',
  'Target', 'Sparkles', 'Gauge', 'Lightbulb', 'FileText',
  'Search', 'Zap', 'CircleDot', 'ListChecks', 'Table2',
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function getCasusKey(baseLmeId) {
  const m = baseLmeId.match(/blok5-week(\d+)-casus(\d+)/);
  return m ? `${m[1]}-${m[2]}` : null;
}

function firstSentence(html, maxLen = 90) {
  const clean = html.replace(/<[^>]+>/g, '').trim();
  const dotIdx = clean.indexOf('. ');
  let s = dotIdx > 0 && dotIdx < maxLen ? clean.slice(0, dotIdx + 1) : clean.slice(0, maxLen);
  if (s.length >= maxLen) s = s.replace(/\s+\S*$/, '') + '\u2026';
  return s;
}

function splitIntoSections(html) {
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, '').trim();
  const blocks = html.split(/(?=<p>|<ul>|<ol>)/).filter(b => b.trim());

  const sections = [];
  for (const block of blocks) {
    if (block.startsWith('<p>')) {
      sections.push(block);
    } else if (sections.length > 0) {
      sections[sections.length - 1] += block;
    } else {
      sections.push(block);
    }
  }
  return sections;
}

function pickIcon(index, total) {
  if (index === 0) return 'BookOpen';
  if (index === total - 1) return 'CheckCircle2';
  return MID_ICONS[(index - 1) % MID_ICONS.length];
}

function findDocxFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) files.push(...findDocxFiles(full));
    else if (entry.endsWith('.docx') && !entry.startsWith('~')) files.push(full);
  }
  return files;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u').replace(/[ýÿ]/g, 'y')
    .replace(/[ñ]/g, 'n').replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function escapeHtml(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const docxFiles = findDocxFiles(DOCX_DIR);
  console.log(`Found ${docxFiles.length} docx files`);

  // Ensure output dir exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = []; // { miniLmeId, baseLmeId, filePath, componentName }

  for (const file of docxFiles) {
    const basename = path.basename(file, '.docx');

    // Resolve base LME ID
    let baseLmeId = null;
    const lmeMatch = basename.match(/^LME\s+(\d+)/i);
    if (lmeMatch) {
      const lmeNum = parseInt(lmeMatch[1]);
      baseLmeId = LME_TO_BASE_ID[lmeNum];
      if (!baseLmeId) { console.warn(`  SKIP (no LME mapping): LME ${lmeNum}`); continue; }
    } else {
      baseLmeId = NON_LME_TO_BASE_ID[basename];
      if (!baseLmeId) { console.warn(`  SKIP (no non-LME mapping): ${basename}`); continue; }
    }

    const miniLmeId = baseLmeId + '-mini';

    // Read docx -> HTML
    const result = await mammoth.convertToHtml({ path: file });
    const html = result.value;

    // Extract title from <h1> or derive from filename
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    let title = titleMatch
      ? titleMatch[1].replace(/<[^>]+>/g, '')
      : basename.replace(/^(LME\s+\d+\s*[–—\-]\s*|LMO\s+|LMV\s+|STM\s+)/i, '').replace(/\s+samenvatting$/i, '');
    title = title.replace(/^LME\s+\d+\s*[–—\-]\s*/i, '').trim();

    // Split into sections
    const sections = splitIntoSections(html);
    if (sections.length === 0) { console.warn(`  SKIP (no content): ${basename}`); continue; }

    // Description = first paragraph plain text (max 350 chars)
    let description = sections[0].replace(/<[^>]+>/g, '').trim();
    if (description.length > 350) description = description.slice(0, 347) + '\u2026';

    const casusKey = getCasusKey(baseLmeId);
    const caseLabel = CASUS_LABELS[casusKey] || '';
    const practiceLink = `/oefenvragen?lme=${baseLmeId}`;

    // Determine output file path
    const weekMatch = baseLmeId.match(/week(\d+)/);
    const casusMatch = baseLmeId.match(/casus(\d+)/);
    const weekNum = weekMatch ? weekMatch[1] : '0';
    const casusNum = casusMatch ? casusMatch[1] : '0';
    const slug = baseLmeId.replace(/^blok5-week\d+-casus\d+-/, '');

    const relDir = path.join(`week-${weekNum}`, `casus-${casusNum}`);
    const fileName = `${slugify(slug)}-mini.jsx`;
    const absDir = path.join(OUT_DIR, relDir);
    const absFile = path.join(absDir, fileName);

    // Component name
    const componentName = `Blok5Mini${toPascalCase(slug)}`;

    // Generate JSX component
    const sectionData = sections.map((sHtml, i) => ({
      id: `mini-sect-${String(i + 1).padStart(2, '0')}`,
      title: firstSentence(sHtml),
      icon: pickIcon(i, sections.length),
      html: sHtml,
    }));

    const jsxContent = `// Auto-generated from: ${path.basename(file)}
// Regenerate: node scripts/generate-blok5-mini-summaries.mjs

const sections = [
${sectionData.map(s => `  {
    id: ${JSON.stringify(s.id)},
    title: ${JSON.stringify(s.title)},
    icon: ${JSON.stringify(s.icon)},
    html: \`${escapeHtml(s.html)}\`,
  }`).join(',\n')}
]

const config = {
  baseLmeId: ${JSON.stringify(baseLmeId)},
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  caseLabel: ${JSON.stringify(caseLabel)},
  practiceLink: ${JSON.stringify(practiceLink)},
  sections,
}

export default config
`;

    fs.mkdirSync(absDir, { recursive: true });
    fs.writeFileSync(absFile, jsxContent, 'utf8');

    entries.push({
      miniLmeId,
      baseLmeId,
      relPath: `./${relDir}/${fileName}`.replace(/\\/g, '/'),
      componentName,
      title,
    });

    console.log(`  ${miniLmeId}: ${title} (${sections.length} sections) -> ${relDir}/${fileName}`);
  }

  // ── Write central index file ──────────────────────────────────────────────

  entries.sort((a, b) => a.miniLmeId.localeCompare(b.miniLmeId));

  const indexContent = `// Auto-generated by scripts/generate-blok5-mini-summaries.mjs — do not edit by hand.
// Regenerate:  node scripts/generate-blok5-mini-summaries.mjs

${entries.map((e, i) => `import config${i} from '${e.relPath}'`).join('\n')}

const BLOK5_MINI_CONFIG = {
${entries.map((e, i) => `  ${JSON.stringify(e.miniLmeId)}: config${i},`).join('\n')}
}

export function getBlok5MiniConfig(miniLmeId) {
  return BLOK5_MINI_CONFIG[miniLmeId] || null
}

export function isBlok5MiniLme(lmeId) {
  return Boolean(lmeId && BLOK5_MINI_CONFIG[lmeId])
}

export const BLOK5_MINI_IDS = Object.keys(BLOK5_MINI_CONFIG)
`;

  fs.writeFileSync(path.join(OUT_DIR, 'blok5MiniConfigs.js'), indexContent, 'utf8');

  console.log(`\nGenerated ${entries.length} mini summary files + index`);
}

main().catch(err => { console.error(err); process.exit(1); });
