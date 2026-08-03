import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de transplantatie`}</Inline></SubHeading>
      <PBody text={`Het primaire doel is **levensverlenging** bij eindstadium longziekte. Omdat donorlongen schaars zijn, wordt kwaliteit van leven wel meegenomen, maar het belangrijkste uitgangspunt blijft dat de patiënt er echt overlevingswinst van moet hebben.`} />
    </div>
  )
}
