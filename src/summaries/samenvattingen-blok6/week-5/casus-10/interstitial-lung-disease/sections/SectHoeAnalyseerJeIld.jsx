import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe analyseer je ILD?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor de diagnose is een multidimensionale aanpak nodig. Je combineert:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klinische gegevens`}</Inline></li>
        <li><Inline>{`radiologische bevindingen`}</Inline></li>
        <li><Inline>{`longfunctieonderzoek`}</Inline></li>
        <li><Inline>{`bloedonderzoek`}</Inline></li>
        <li><Inline>{`soms histologisch onderzoek`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een goede anamnese en lichamelijk onderzoek zijn de eerste stap. Daarbij let je vooral op mogelijke externe oorzaken, zoals blootstelling aan vogels of schimmel, pneumotoxische medicatie of stofblootstelling zoals asbest, silica of kolenstof.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Onderzoek bij verdenking op ILD`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Wat levert het op?"], ["Longfunctieonderzoek", "Vaak restrictief patroon en verlaagde diffusiecapaciteit"], ["Bloedonderzoek", "Auto-antistoffen kunnen wijzen op een connective tissue disease"], ["X-thorax", "Kan afwijkingen tonen, maar een normale foto sluit beginnende ILD niet uit"], ["HRCT-thorax", "Belangrijkste diagnostische onderzoek"], ["BAL", "Kan helpen bij bepaalde niet-IPF-ILD’s"], ["Longbiopt", "Soms nodig als de diagnose nog niet duidelijk is"]]} />
      <p className="leading-relaxed"><Inline>{`Een longfunctieonderzoek laat vaak een restrictief patroon zien met een verlaagde diffusiecapaciteit. Soms is de longfunctie nog normaal of zelfs obstructief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bloedonderzoek kan auto-antistoffen aantonen en zo helpen bij het opsporen van een onderliggende connective tissue disease.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een X-thorax kan tekenen van ILD laten zien, maar subtiele afwijkingen kunnen gemist worden. Een normale X-thorax sluit een beginnende ILD dus niet uit. HRCT is de sleuteltest. Bij meer dan twee derde van de patiënten is de combinatie van HRCT en klinische gegevens al voldoende voor de diagnose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bronchoalveolaire lavage, oftewel BAL, kan nuttig zijn als een niet-IPF-ILD wordt vermoed. Lymfocytose in BAL past bij hypersensitivity pneumonitis. Eosinofilie in BAL ondersteunt eosinofiele pneumonie of medicamenteuze longschade.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is HRCT zo belangrijk?
**Kort antwoord:** Omdat het vaak het typische patroon laat zien dat samen met de kliniek al genoeg is voor de diagnose.`} />
    </div>
  )
}
