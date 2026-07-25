import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek en log roll`}</Inline></SubHeading>
      <PBody text={`Als de achterzijde nog niet goed beoordeeld kon worden, doe je een **log roll** om de patiënt veilig te draaien en ook de rug te inspecteren.`} />
    </div>
  )
}
