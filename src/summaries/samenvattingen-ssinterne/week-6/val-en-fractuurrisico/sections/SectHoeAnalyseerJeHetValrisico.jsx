import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe analyseer je het valrisico?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een oudere met een valincident begin je met een gerichte anamnese. Je wilt weten onder welke omstandigheden de val plaatsvond en of er klachten vooraf waren, zoals duizeligheid, hartkloppingen of een licht gevoel in het hoofd. Ook vraag je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`amnesie voor het valincident;`}</Inline></li>
        <li><Inline>{`eerdere valincidenten;`}</Inline></li>
        <li><Inline>{`spierpijn, incontinentie of tongbeet na de val;`}</Inline></li>
        <li><Inline>{`recente wijzigingen in medicatie;`}</Inline></li>
        <li><Inline>{`mobiliteitsstoornissen;`}</Inline></li>
        <li><Inline>{`ADL-afhankelijkheid of gebruik van hulpmiddelen;`}</Inline></li>
        <li><Inline>{`visus- of gehoorbeperkingen;`}</Inline></li>
        <li><Inline>{`pijn;`}</Inline></li>
        <li><Inline>{`geheugenklachten;`}</Inline></li>
        <li><Inline>{`stemmingsklachten;`}</Inline></li>
        <li><Inline>{`alcoholgebruik.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij heteroanamnese, bijvoorbeeld van de partner, vraag je of het valincident is gezien, of er iets vooraf opviel, of er trekkingen waren en of er bewustzijnsverlies was.`}</Inline></p>
    </div>
  )
}
