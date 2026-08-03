import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`De longen hebben twee circulaties met elk een eigen taak. De **pulmonale circulatie** zorgt voor gasuitwisseling in de alveoli. De **bronchiale circulatie** verzorgt het longweefsel zelf. De bronchiale circulatie is onderdeel van de systemische circulatie en levert zuurstof, voeding en afvoer van afvalstoffen aan de longen. De pulmonale circulatie begint in de rechterventrikel, gaat via de pulmonale arteriën naar de longcapillairen en keert via de pulmonale venen terug naar het linkeratrium. Tussen beide circulaties bestaat een kleine fysiologische shunt doordat bronchiale venen uitmonden in de pulmonale venen.`} />
    </div>
  )
}
