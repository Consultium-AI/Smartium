import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Slagvolume`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het slagvolume is de hoeveelheid bloed die per slag wordt uitgepompt:`}</Inline></p>
      <PBody text={`**SV = EDV − ESV**`} />
    </div>
  )
}
