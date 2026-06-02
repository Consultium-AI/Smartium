import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 1: van purpura naar vasculitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het jonge kind met purpura, buikpijn, gewrichtsklachten en recente infectie is de gedachtegang gericht op een vasculitis. De combinatie van huidafwijkingen en systemische klachten past bij ontsteking van kleine bloedvaten. Daarom kijk je niet alleen naar de huid, maar ook naar andere organen die betrokken kunnen zijn, zoals de nieren, buik en gewrichten.`}</Inline></p>
    </div>
  )
}
