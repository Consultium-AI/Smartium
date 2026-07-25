import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geneesmiddelenallergie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Geneesmiddelen kunnen zowel een allergische reactie als een niet-allergische reactie geven. Bij een huiduitslag tijdens infectie of medicatiegebruik moet je dus breed denken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een gegeneraliseerde uitslag kan passen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een virale infectie;`}</Inline></li>
        <li><Inline>{`toxines van een bacteriële infectie;`}</Inline></li>
        <li><Inline>{`een acute of niet-acute allergie voor antibiotica;`}</Inline></li>
        <li><Inline>{`intolerantie voor NSAID’s.`}</Inline></li>
      </ul>
      <PBody text={`Bij een ernstige niet-acute, T-cel-gemedieerde allergie op amoxicilline moeten uit voorzorg **alle bèta-lactam-antibiotica** worden vermeden. Dat komt door mogelijke kruisallergie binnen deze groep.`} />
    </div>
  )
}
