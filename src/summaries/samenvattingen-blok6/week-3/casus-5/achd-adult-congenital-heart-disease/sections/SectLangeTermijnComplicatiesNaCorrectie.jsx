import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lange termijn complicaties na correctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na correctie kunnen nog verschillende late problemen optreden:`}</Inline></p>
      <DataTable rows={[["Mogelijke late complicaties na correctie van ToF", "Toelichting"], ["Branch PA stenosis", "vernauwing van takken van de longslagader"], ["Atriale of ventriculaire aritmieën / plotse hartdood", "door aritmogene substraten"], ["Aortadilatatie", "verwijding van de aorta"], ["Rest-VSD", "restdefect na operatie"], ["Pulmonalisinsufficiëntie en/of pulmonalisstenose", "vaak na verbreding van de uitstroombaan"], ["Tricuspidalisinsufficiëntie", "kleplekkage"], ["RV-dysfunctie", "verminderde functie van de rechter ventrikel"], ["LV-dysfunctie", "verminderde functie van de linker ventrikel"]]} />
    </div>
  )
}
