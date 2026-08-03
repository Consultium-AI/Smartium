import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat als de echo geen afwijkingen laat zien?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de echo geen aanwijzingen geeft voor obstructie, moet je verder denken aan pre-renale of renale oorzaken van het nierfunctieverlies. Dan verschuift de diagnostiek naar andere onderzoeken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De volgende stappen kunnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urineonderzoek, met aandacht voor sediment, eiwit en cilinders;`}</Inline></li>
        <li><Inline>{`bloedonderzoek, bijvoorbeeld naar elektrolyten, creatinine en ureum;`}</Inline></li>
        <li><Inline>{`aanvullende beeldvorming als de klinische verdenking op obstructie toch blijft bestaan, bijvoorbeeld een CT-urogram.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een CT-urogram is dus een vervolgstap als de echo niet genoeg duidelijkheid geeft, maar de verdenking op obstructie nog steeds aanwezig is.`}</Inline></p>
    </div>
  )
}
