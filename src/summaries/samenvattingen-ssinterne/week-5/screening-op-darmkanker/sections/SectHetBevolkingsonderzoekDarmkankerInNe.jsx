import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het bevolkingsonderzoek darmkanker in Nederland`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In 2014 is in Nederland gestart met een landelijk bevolkingsonderzoek darmkanker. De opzet daarvan is gebaseerd op veel wetenschappelijk onderzoek.`}</Inline></p>
    </div>
  )
}
