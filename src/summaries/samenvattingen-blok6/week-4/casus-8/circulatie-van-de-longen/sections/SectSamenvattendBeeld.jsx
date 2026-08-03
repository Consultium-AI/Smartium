import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend beeld`}</Inline></SubHeading>
      <PBody text={`De longen hebben dus twee bloedcirculaties met verschillende functies. De **pulmonale circulatie** brengt zuurstofarm bloed van de rechterkant van het hart naar de longen, waar gasuitwisseling plaatsvindt. Daarna gaat het zuurstofrijke bloed terug naar de linkerkant van het hart. De **bronchiale circulatie** komt uit de systemische circulatie en voedt het longweefsel zelf. Een klein deel van het bloed uit de bronchiale circulatie mengt zich met het pulmonale bloed via een fysiologische shunt.`} />
    </div>
  )
}
