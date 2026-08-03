import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Classificatie van ILD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De classificatie van interstitiële longziekten is complex. Voor de interstitiële pneumonieën wordt vooral gekeken naar drie dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het radiologische patroon op HRCT`}</Inline></li>
        <li><Inline>{`de oorzaak, als die bekend is of onbekend`}</Inline></li>
        <li><Inline>{`de prevalentie van de ziekte`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De belangrijkste radiologische groepen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`interstitiële patronen`}</Inline></li>
        <li><Inline>{`alveolaire vullingspatronen`}</Inline></li>
        <li><Inline>{`gecombineerde patronen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Binnen deze groepen komen zowel ziekten met een bekende oorzaak als ziekten met een onbekende oorzaak voor. Idiopathisch betekent: oorzaak onbekend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende en best bestudeerde ziekte binnen de interstitiële patronen is idiopathische pulmonale fibrose, oftewel IPF. Deze ziekte wordt gekenmerkt door progressieve fibrose en heeft een slechte prognose.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Hoofdgroepen binnen de interstitiële longziekten`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Kenmerk", "Voorbeelden"], ["Interstitiële patronen", "Vooral afwijkingen in het interstitium", "IPF, NSIP"], ["Alveolaire vullingspatronen", "Opvulling van de alveoli", "Organising pneumonia"], ["Gecombineerde patronen", "Combinatie van meerdere patronen", "Verschillende ILD-vormen"]]} />
    </div>
  )
}
