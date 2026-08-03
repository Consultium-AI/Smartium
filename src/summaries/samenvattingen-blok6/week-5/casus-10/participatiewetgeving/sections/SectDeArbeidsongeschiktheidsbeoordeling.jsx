import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De arbeidsongeschiktheidsbeoordeling`}</Inline></SubHeading>
      <PBody text={`De arbeidsongeschiktheidsbeoordeling wordt uitgevoerd door een **verzekeringsarts** en een **arbeidsdeskundige**. De focus ligt niet op de diagnose alleen, maar op de **functionele mogelijkheden**.`} />
      <p className="leading-relaxed"><Inline>{`De verzekeringsarts brengt in kaart wat iemand nog kan. De arbeidsdeskundige bekijkt vervolgens welke arbeid daarbij past en wat iemand daarmee kan verdienen.`}</Inline></p>
      <SubHeading><Inline>{`Het ICF-model`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ICF-model beschrijft functioneren vanuit drie niveaus:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**stoornis**: probleem in functies of anatomische eigenschappen;`}</Inline></li>
        <li><Inline>{`**beperking**: probleem in activiteiten;`}</Inline></li>
        <li><Inline>{`**participatieprobleem**: probleem in deelname aan het maatschappelijk leven.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij spelen ook externe en persoonlijke factoren een rol.`}</Inline></p>
    </div>
  )
}
