#!/usr/bin/env node
// Reads all .docx files from "mini samenvattingen B9/" and regenerates
// src/summaries/mini-samenvattingen-b9/blok9MiniConfigs.js with real content.
//
// Usage:  node scripts/generate-mini-summaries.mjs

import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCX_DIR = path.join(ROOT, 'mini samenvattingen B9');
const CONFIG_PATH = path.join(ROOT, 'src', 'summaries', 'mini-samenvattingen-b9', 'blok9MiniConfigs.js');

// ── LME number → base lme ID (without -mini suffix) ─────────────────────────
const LME_TO_BASE_ID = {
  1:  'blok9-week1-casus1-acute-nierschade',
  2:  'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten',
  3:  'blok9-week1-casus1-glomerulaire-nierziekten',
  4:  'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten',
  5:  'blok9-week1-casus1-acute-nierschade-verdieping',
  6:  'blok9-week1-casus2-chronische-nierschade',
  7:  'blok9-week1-casus2-niertransplantatie',
  8:  'blok9-week1-casus2-dialyse',
  9:  'blok9-week1-casus2-chronische-nierschade-verdieping',
  10: 'blok9-week1-casus2-nierfunctievervangende-therapie',
  11: 'blok9-week1-casus2-ethiek-van-orgaantransplantatie',
  12: 'blok9-week2-casus3-klinische-stoornissen-water-en-volume-balans',
  13: 'blok9-week2-casus3-klinische-stoornissen-kaliumbalans',
  14: 'blok9-week2-casus3-klinische-stoornissen-zuur-basebalans',
  15: 'blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping',
  16: 'blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping',
  17: 'blok9-week2-casus4-perifeer-arterieel-vaatlijden',
  18: 'blok9-week2-casus4-diabetische-voet',
  19: 'blok9-week2-casus4-dilaterend-vaatlijden',
  20: 'blok9-week2-casus4-mdr-juridische-aspecten-medische-tools',
  21: 'blok9-week2-casus4-preoperatieve-screening',
  22: 'blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie',
  23: 'blok9-week3-casus5-hypertensie',
  24: 'blok9-week3-casus5-secundaire-hypertensie',
  25: 'blok9-week3-casus5-hypertensief-spoedgeval',
  26: 'blok9-week3-casus5-farmacogenetica',
  27: 'blok9-week3-casus5-ai-act',
  28: 'blok9-week3-casus6-cvrm',
  29: 'blok9-week4-casus7-pneumonie-epidemiologie-verwekkers-behandeling',
  30: 'blok9-week4-casus7-pathofysiologie-kliniek-diagnostiek-pneumonie',
  31: 'blok9-week4-casus7-klinisch-redeneren-respiratoire-insuffici\u00ebntie',
  32: 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie',
  33: 'blok9-week4-casus8-toxidromen',
  34: 'blok9-week4-casus8-shock',
  35: 'blok9-week4-casus8-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen',
  36: 'blok9-week4-casus8-passende-zorg-op-de-intensive-care',
  37: 'blok9-week4-casus8-lineare-regressielijn',
  38: 'blok9-week5-casus9-longkanker',
  39: 'blok9-week5-casus9-pleuravocht',
  40: 'blok9-week5-casus9-voorbereiding-ct-en-pet-ct',
  41: 'blok9-week5-casus9-voorbereiding-pathologie-longkanker',
  42: 'blok9-week5-casus10-basis-analyse-ecg',
  43: 'blok9-week5-casus10-atriumfibrilleren',
  44: 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices',
  45: 'blok9-week5-casus10-tachyaritmie',
  46: 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren',
  47: 'blok9-week5-casus10-syncope',
  48: 'blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties',
  49: 'blok9-week5-casus10-ritmestoornissen-bij-kinderen',
};

// ── Casus labels for SummaryLayout ───────────────────────────────────────────
const CASUS_LABELS = {
  '1-1': 'Week 1 \u00b7 Casus 1: Pati\u00ebnt met acute nierschade',
  '1-2': 'Week 1 \u00b7 Casus 2: Pati\u00ebnt met chronische nierschade',
  '2-3': 'Week 2 \u00b7 Casus 3: Pati\u00ebnt met ernstig verstoorde elektrolyten',
  '2-4': 'Week 2 \u00b7 Casus 4: De vrouw die maar 20 meter kan lopen',
  '3-5': 'Week 3 \u00b7 Casus 5: Pati\u00ebnt met hypertensie',
  '3-6': 'Week 3 \u00b7 Casus 6: Volwassene met pijn op de borst',
  '4-7': 'Week 4 \u00b7 Casus 7: Pati\u00ebnt met een pneumonie',
  '4-8': 'Week 4 \u00b7 Casus 8: Een leuk feestje',
  '5-9':  'Week 5 \u00b7 Casus 9: Longkanker, wat nu',
  '5-10': 'Week 5 \u00b7 Casus 10: Atriumfibrilleren',
};

// ── LMEs with handcrafted JSX components (skip content generation) ───────────
const HANDCRAFTED = new Set([1, 2, 5]);

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
  const m = baseLmeId.match(/blok9-week(\d+)-casus(\d+)/);
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
  // Remove <h1> title
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, '').trim();
  // Split into top-level blocks
  const blocks = html.split(/(?=<p>|<ul>|<ol>)/).filter(b => b.trim());

  const sections = [];
  for (const block of blocks) {
    if (block.startsWith('<p>')) {
      sections.push(block);
    } else if (sections.length > 0) {
      // Attach <ul>/<ol> to previous section
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

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const docxFiles = findDocxFiles(DOCX_DIR);
  console.log(`Found ${docxFiles.length} docx files`);

  const config = {};

  for (const file of docxFiles) {
    const basename = path.basename(file, '.docx');
    const lmeMatch = basename.match(/^LME\s+(\d+)/i);
    if (!lmeMatch) { console.warn(`  SKIP (no LME number): ${basename}`); continue; }

    const lmeNum = parseInt(lmeMatch[1]);
    const baseLmeId = LME_TO_BASE_ID[lmeNum];
    if (!baseLmeId) { console.warn(`  SKIP (no mapping): LME ${lmeNum}`); continue; }

    const miniLmeId = baseLmeId + '-mini';

    // Skip handcrafted summaries (they already have dedicated JSX components)
    if (HANDCRAFTED.has(lmeNum)) {
      console.log(`  LME ${lmeNum}: handcrafted (skip content)`);
      config[miniLmeId] = { handcrafted: true, baseLmeId };
      continue;
    }

    // Read docx → HTML
    const result = await mammoth.convertToHtml({ path: file });
    const html = result.value;

    // Extract title from <h1>
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    let title = titleMatch ? titleMatch[1] : `LME ${lmeNum}`;
    title = title.replace(/^LME\s+\d+\s*[–—\-]\s*/i, '').trim();

    // Split into sections
    const sections = splitIntoSections(html);
    if (sections.length === 0) { console.warn(`  SKIP (no content): LME ${lmeNum}`); continue; }

    // Description = first paragraph plain text (max 350 chars)
    let description = sections[0].replace(/<[^>]+>/g, '').trim();
    if (description.length > 350) description = description.slice(0, 347) + '\u2026';

    const casusKey = getCasusKey(baseLmeId);

    config[miniLmeId] = {
      baseLmeId,
      title,
      description,
      caseLabel: CASUS_LABELS[casusKey] || '',
      practiceLink: `/oefenvragen?lme=${baseLmeId}`,
      sections: sections.map((sHtml, i) => ({
        id: `mini-sect-${String(i + 1).padStart(2, '0')}`,
        title: firstSentence(sHtml),
        icon: pickIcon(i, sections.length),
        html: sHtml,
      })),
    };

    console.log(`  LME ${lmeNum}: ${title} (${sections.length} sections)`);
  }

  // ── Write config file ────────────────────────────────────────────────────

  // Sort keys for consistent output
  const sorted = {};
  for (const key of Object.keys(config).sort()) sorted[key] = config[key];

  const output = `// Auto-generated by scripts/generate-mini-summaries.mjs \u2014 do not edit by hand.
// Regenerate:  node scripts/generate-mini-summaries.mjs

export const BLOK9_MINI_CONFIG = ${JSON.stringify(sorted, null, 2)}

export const BLOK9_CONFIGURABLE_MINI_IDS = Object.keys(BLOK9_MINI_CONFIG)

export function getBlok9MiniConfig(miniLmeId) {
  return BLOK9_MINI_CONFIG[miniLmeId] || null
}

export function isBlok9ConfigurableMiniLme(lmeId) {
  return Boolean(lmeId && BLOK9_MINI_CONFIG[lmeId])
}
`;

  fs.writeFileSync(CONFIG_PATH, output, 'utf8');
  console.log(`\nWritten ${Object.keys(sorted).length} entries to blok9MiniConfigs.js`);
}

main().catch(err => { console.error(err); process.exit(1); });
