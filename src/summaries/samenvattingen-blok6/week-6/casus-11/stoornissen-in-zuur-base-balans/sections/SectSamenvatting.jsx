import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuur-base balans wordt strak geregeld via buffers, longen en nieren. CO₂ en HCO₃⁻ vormen het belangrijkste buffersysteem. De longen regelen vooral CO₂, de nieren vooral bicarbonaat en de uitscheiding van niet-vluchtig zuur. Bij stoornissen onderscheid je respiratoire en metabole oorzaken, beoordeel je compensatie en gebruik je zo nodig de anion gap en nomogrammen. De behandeling richt zich in de eerste plaats op de onderliggende oorzaak.`}</Inline></p>
    </div>
  )
}
