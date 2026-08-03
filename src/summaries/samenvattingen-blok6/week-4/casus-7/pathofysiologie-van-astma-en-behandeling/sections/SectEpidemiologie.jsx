import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma is wereldwijd een van de meest voorkomende chronische ziekten en heeft een grote impact op de gezondheid en op de zorg. In 2019 leefden er wereldwijd 262 miljoen mensen met astma en overleden 455.000 mensen aan astma. De prevalentie is de afgelopen decennia toegenomen, maar lijkt nu op wereldniveau een plateau te bereiken. Wel is er verschil tussen regio’s: in landen met een lager gemiddeld inkomen stijgt de prevalentie nog steeds.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de Nederlandse huisartsenpraktijk komt astma ook veel voor. In 2023 waren er naar schatting 577.000 personen met astma die hiervoor zorg kregen in de huisartsenzorg of tweede lijn. Meer jongens dan meisjes komen op jonge leeftijd op consult voor astma, maar op volwassen leeftijd komen vrouwen vaker dan mannen op consult bij de huisarts. Astma is daarnaast een belangrijke kostenpost voor de gezondheidszorg en een veelvoorkomende oorzaak van school- en werkverzuim.`}</Inline></p>
    </div>
  )
}
