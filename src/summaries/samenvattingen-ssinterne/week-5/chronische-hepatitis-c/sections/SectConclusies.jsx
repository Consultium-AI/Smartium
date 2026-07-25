import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Conclusies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Chronische hepatitis C wordt vooral overgedragen via bloed-bloedcontact, bijvoorbeeld bij intraveneus drugsgebruik. Een chronische infectie leidt niet altijd meteen tot leverbeschadiging, maar kan op termijn wel ernstige leverschade veroorzaken. Positieve anti-HCV-antistoffen bewijzen niet dat er sprake is van een actieve chronische infectie. Daarvoor moet je HCV-RNA aantonen. Voor het starten van behandeling is het beoordelen van de leverbeschadiging essentieel.`}</Inline></p>
    </div>
  )
}
