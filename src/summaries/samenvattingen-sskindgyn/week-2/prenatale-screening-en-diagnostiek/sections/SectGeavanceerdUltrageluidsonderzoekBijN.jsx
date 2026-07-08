import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geavanceerd ultrageluidsonderzoek bij nierafwijkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als bij de 20-weken echo bijvoorbeeld vergrote nieren met cysten worden gezien, is de echoscopist in de tweede lijn niet bedoeld om meteen een definitieve diagnose te stellen. De zwangere wordt dan verwezen voor GUO.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij GUO kan de differentiaaldiagnose breed zijn. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CMV;`}</Inline></li>
        <li><Inline>{`chromosomale afwijkingen;`}</Inline></li>
        <li><Inline>{`ciliopathieën;`}</Inline></li>
        <li><Inline>{`syndromen zoals tubereuze sclerose, skeletdysplasie, Kabuki, Townes-Brocks, Simpson-Golabi-Behmel, Beckwith-Wiedemann en Perlman;`}</Inline></li>
        <li><Inline>{`ARPKD;`}</Inline></li>
        <li><Inline>{`ADPKD.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom is de familieanamnese belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat nierafwijkingen erfelijk kunnen zijn. Als ook de partner nierafwijkingen heeft, wordt genetische diagnostiek extra belangrijk. In zo’n situatie kan een vruchtwaterpunctie worden gedaan en wordt de zwangere verwezen naar de klinisch geneticus.`}</Inline></p>
    </div>
  )
}
