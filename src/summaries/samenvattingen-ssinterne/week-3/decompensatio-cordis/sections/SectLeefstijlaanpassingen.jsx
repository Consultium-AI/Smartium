import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefstijlaanpassingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met hartfalen krijgt altijd het advies om gezond te leven. Bij systolisch hartfalen horen daar onder andere de volgende maatregelen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Bewegen**: rust roest, dus binnen de grenzen van een hartrevalidatieprogramma is bewegen juist belangrijk.`}</Inline></li>
        <li><Inline>{`**Vochtbeperking**: extra vocht belast het hart, zeker bij ernstig hartfalen. Soms geldt een maximum van 1,5 liter per dag.`}</Inline></li>
        <li><Inline>{`**Zoutbeperking**: zout zorgt ervoor dat je vocht vasthoudt. Soms wordt geadviseerd om de inname te beperken tot 3 gram natrium per dag, wat overeenkomt met 6 gram keukenzout.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** waarom is zoutbeperking belangrijk bij hartfalen?
**Mini-antwoord:** omdat zout ervoor zorgt dat je vocht vasthoudt, waardoor het hart extra belast wordt.`} />
    </div>
  )
}
