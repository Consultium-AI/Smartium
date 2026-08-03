import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het UWV`}</Inline></SubHeading>
      <PBody text={`Het **UWV** voert de werknemersverzekeringen landelijk uit en houdt zich ook bezig met arbeidsmarkt- en gegevensdienstverlening. Het is een zelfstandig bestuursorgaan onder het ministerie van Sociale Zaken en Werkgelegenheid.`} />
      <p className="leading-relaxed"><Inline>{`De missie van het UWV is simpel gezegd: mensen helpen om via werk mee te doen in de maatschappij. Als werken niet mogelijk is, zorgt het UWV voor inkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De vier kerntaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Werk**: mensen aan het werk helpen of houden.`}</Inline></li>
        <li><Inline>{`**Indicatiestelling**: ziekte en arbeidsongeschiktheid beoordelen.`}</Inline></li>
        <li><Inline>{`**Uitkeren**: uitkeringen tijdig en correct betalen.`}</Inline></li>
        <li><Inline>{`**Gegevensbeheer**: zorgen dat mensen gegevens maar één keer hoeven aan te leveren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Binnen het UWV werken onder andere verzekeringsartsen en arbeidsdeskundigen. De verzekeringsarts beoordeelt de arbeidsmogelijkheden binnen de wettelijke kaders. De arbeidsdeskundige kijkt welke arbeid iemand nog kan verrichten en wat daarmee verdiend kan worden.`}</Inline></p>
    </div>
  )
}
