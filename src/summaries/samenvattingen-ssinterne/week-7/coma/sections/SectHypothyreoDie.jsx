import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypothyreoïdie`}</Inline></SubHeading>
      <PBody text={`Een zeldzame maar levensbedreigende vorm is **myxoedeemcoma**. Dit is een ernstige manifestatie van hypothyreoïdie met een hoge mortaliteit. Het beeld bestaat meestal uit verminderd bewustzijn, respiratoire insufficiëntie en hypothermie. Vaak is er al langer bestaande hypothyreoïdie en wordt het coma uitgelokt door een extra factor. Het komt vooral voor bij ouderen. De behandeling bestaat uit **suppletie van schildklierhormoon**.`} />
    </div>
  )
}
