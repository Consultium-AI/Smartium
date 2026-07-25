import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Levermarkers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Levermarkers worden gebruikt om leverschade op te sporen of te ondersteunen. Bij de interpretatie kijk je altijd naar het referentie-interval en naar de klinische context.`}</Inline></p>
      <SubHeading><Inline>{`ASAT en ALAT`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**ASAT** is gevoelig, maar minder specifiek.`}</Inline></li>
        <li><Inline>{`**ALAT** is specifieker voor leverschade dan ASAT.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat betekent dat ALAT beter past als je wilt weten of de lever zelf waarschijnlijk betrokken is.`}</Inline></p>
    </div>
  )
}
