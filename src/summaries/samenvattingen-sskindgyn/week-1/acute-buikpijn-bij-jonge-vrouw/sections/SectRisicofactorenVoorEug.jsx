import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren voor EUG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese moet je altijd letten op risicofactoren voor een EUG:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EUG in de voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`tubachirurgie;`}</Inline></li>
        <li><Inline>{`sterilisatie;`}</Inline></li>
        <li><Inline>{`IUD;`}</Inline></li>
        <li><Inline>{`SOA’s of PID;`}</Inline></li>
        <li><Inline>{`endometriose;`}</Inline></li>
        <li><Inline>{`fertiliteitsstoornissen;`}</Inline></li>
        <li><Inline>{`IVF;`}</Inline></li>
        <li><Inline>{`gecompliceerde buikoperaties.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze factoren verhogen de kans op een EUG en maken dat je er sneller aan denkt.`}</Inline></p>
    </div>
  )
}
