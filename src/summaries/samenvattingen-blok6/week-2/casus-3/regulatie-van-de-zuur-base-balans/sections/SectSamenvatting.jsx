import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuur-base balans houdt de pH van het bloed stabiel tussen 7,35 en 7,45. Buffers, longen en nieren werken daarbij samen. De longen regelen vooral de uitscheiding van CO2 en kunnen daardoor vluchtige zuren verwerken. De nieren zorgen voor reabsorptie van gefiltreerd bicarbonaat en voor de uitscheiding van niet-vluchtig zuur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de proximale tubulus wordt bicarbonaat teruggewonnen via de Na+/H+-uitwisselaar en koolzuuranhydrase. Netto zuuruitscheiding gebeurt vooral in de verzamelbuis via de H+-ATPase. Daarbij zijn NH3/NH4+ en titreerbaar zuur belangrijke buffers in de urine. Het NH3/NH4+-systeem is het krachtigst en maakt grote zuur-excretie mogelijk. Zo houden longen en nieren samen de zuur-base balans in stand.`}</Inline></p>
    </div>
  )
}
