import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitslag van het NPO en verdere diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het NPO laat stoornissen zien in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geheugen;`}</Inline></li>
        <li><Inline>{`visuoconstructie;`}</Inline></li>
        <li><Inline>{`mentale verwerkingssnelheid;`}</Inline></li>
        <li><Inline>{`aandacht;`}</Inline></li>
        <li><Inline>{`abstraherend vermogen;`}</Inline></li>
        <li><Inline>{`delen van het executief functioneren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat beeld past bij dementie. De etiologie is dan nog niet definitief: alcoholgerelateerde cognitieve stoornissen, Alzheimer of een mengbeeld blijven mogelijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom is beeldvorming van de hersenen nodig, bij voorkeur met een MRI. Daarbij let je onder andere op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`MTA-score: hippocampusatrofie;`}</Inline></li>
        <li><Inline>{`Fazekas-score: witte stoflaesies;`}</Inline></li>
        <li><Inline>{`GCA-score: globale corticale atrofie;`}</Inline></li>
        <li><Inline>{`andere afwijkingen zoals infarct, hydrocephalus of tumor.`}</Inline></li>
      </ul>
      <PBody text={`Bij de heer Pieterse laat de MRI witte stofafwijkingen zien en geen andere duidelijke verklaring. Op basis van het geheel wordt de werkdiagnose **alcohol-gerelateerde dementie** gesteld.`} />
    </div>
  )
}
