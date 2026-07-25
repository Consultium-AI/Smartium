import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stenose en chirurgische behandeling`}</Inline></SubHeading>
      <PBody text={`Crohn kan leiden tot vernauwingen door ontsteking en littekenvorming. Als een patiënt buikpijn krijgt die samenhangt met eten, moet je denken aan een **stenose**. In de casus bleek de valvula Bauhini vernauwd. Bij scopie kan zo’n stenose soms worden gedilateerd met een ballon.`} />
      <PBody text={`Als de klachten terugkomen of de stenose blijft bestaan, kan een **ileocaecale resectie** nodig zijn. Dat is een operatie waarbij het aangedane deel wordt verwijderd.`} />
    </div>
  )
}
