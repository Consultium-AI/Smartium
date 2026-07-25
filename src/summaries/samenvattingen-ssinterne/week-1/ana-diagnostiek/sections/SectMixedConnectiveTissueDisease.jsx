import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mixed connective tissue disease`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MCTD is een overlapsyndroom met kenmerken van systemische sclerose, SLE, reumatoïde artritis en Morbus Sjögren. Anti-RNP is essentieel voor de diagnose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnostische criteria bestaan uit serologische en klinische kenmerken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Diagnostische criteria MCTD`}</Inline></SubHeading>
      <DataTable rows={[["Alarcon-Segovia", "Kahn"], ["Anti-RNP + minimaal 3 klinische criteria, waarvan myositis of synovitis aanwezig moet zijn", "Hoge titer anti-RNP met gespleten ANA, plus Raynaud en minimaal 2 andere klinische criteria"]]} />
      <p className="leading-relaxed"><Inline>{`Klinische criteria zijn onder andere gezwollen handen, myositis, synovitis, Raynaudfenomeen en acrosclerose.`}</Inline></p>
    </div>
  )
}
