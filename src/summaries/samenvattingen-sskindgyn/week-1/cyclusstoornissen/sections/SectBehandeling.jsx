import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de klachten en van de kinderwens.`}</Inline></p>
      <SubHeading><Inline>{`Kinderwens`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij POI is de kans op zwangerschap met eigen eicellen klein. Gewone IVF geeft een slechte kans van slagen, omdat de eicelvoorraad vroegtijdig is uitgeput. Ook ovulatie-inductie lost het probleem van vroegtijdige ovariële veroudering niet op. De spontane kans op zwangerschap na de diagnose POI ligt slechts rond de 5-10%.`}</Inline></p>
      <PBody text={`De behandeling met de grootste kans op een kind is **eiceldonatie**. In Nederland is anonieme gameetdonatie verboden en zijn er weinig tot geen commerciële eicelbanken, waardoor patiënten meestal hun eigen eiceldonor moeten meebrengen. De kans op zwangerschap na IVF met eiceldonatie is ongeveer 20-25%.`} />
    </div>
  )
}
