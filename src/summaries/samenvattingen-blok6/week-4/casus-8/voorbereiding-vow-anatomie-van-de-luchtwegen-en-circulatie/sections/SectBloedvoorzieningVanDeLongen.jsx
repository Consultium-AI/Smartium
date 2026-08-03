import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedvoorziening van de longen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen hebben niet alleen een longcirculatie via de arteria pulmonalis, maar ook een tweede arterieel systeem: de arteria bronchiales. Deze komen van de aorta en lopen dorsaal van de bronchi principales richting de bronchiën. Zij voorzien de niet-respiratoire delen van de longen van zuurstofrijk bloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De arteria pulmonalis voert zuurstofarm bloed vanuit het rechterhart naar de longen. De vena pulmonalis voert zuurstofrijk bloed terug naar het linkerhart. De arteria bronchiales zijn dus een aparte toevoer voor de eigen weefsels van de long.`}</Inline></p>
      <DataTable rows={[["Tabel 4. Bloedvaten van de longen"], ["Arteria pulmonalis", "Zuurstofarm bloed naar de longen"], ["Vena pulmonalis", "Zuurstofrijk bloed terug naar het linkerhart"], ["Arteria bronchiales", "Tweede arterieel systeem; voeding van niet-respiratoire longdelen"]]} />
    </div>
  )
}
