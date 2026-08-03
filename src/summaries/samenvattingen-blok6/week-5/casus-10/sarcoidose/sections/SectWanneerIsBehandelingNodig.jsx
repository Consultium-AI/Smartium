import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer is behandeling nodig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke patiënt hoeft behandeld te worden. Dat geldt vooral voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Löfgren-syndroom**, dat meestal zelflimiterend is`}</Inline></li>
        <li><Inline>{`**pulmonale sarcoïdose stadium I**, dat geen behandeling nodig heeft`}</Inline></li>
        <li><Inline>{`vaak ook **stadium I en II**, omdat deze spontaan kunnen verbeteren`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Pulmonale sarcoïdose stadium I is meestal zelflimiterend. Stadium II is dat vaak ook, en stadium III soms eveneens. De beslissing om te behandelen hangt af van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **ernst van de klachten**`}</Inline></li>
        <li><Inline>{`de **achteruitgang van de longfunctie**`}</Inline></li>
      </ul>
      <PBody text={`Als de **vitale capaciteit** of de **diffusiecapaciteit** onder **70% van voorspeld** zakt, kan dat een reden zijn om immunosuppressieve behandeling te starten.`} />
    </div>
  )
}
