import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ESPVR`}</Inline></SubHeading>
      <PBody text={`De **end-systolic pressure-volume relation** geeft de maximale druk weer die de ventrikel kan genereren bij een bepaald eind-systolisch volume. De helling van deze lijn weerspiegelt de contractiliteit.`} />
    </div>
  )
}
