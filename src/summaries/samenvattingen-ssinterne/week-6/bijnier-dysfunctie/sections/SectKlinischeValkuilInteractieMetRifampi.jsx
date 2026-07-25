import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische valkuil: interactie met rifampicine`}</Inline></SubHeading>
      <PBody text={`Tijdens opname kan een patiënt met Addisoncrisis opnieuw verslechteren door een medicatie-interactie. Rifampicine stimuleert **CYP3A4** in de lever, waardoor hydrocortison sneller wordt afgebroken. Daardoor kan opnieuw een tekort ontstaan, zelfs als de patiënt de medicatie wel inneemt.`} />
      <p className="leading-relaxed"><Inline>{`In zo’n situatie moet je denken aan een Addisoncrisis door versneld metabolisme van hydrocortison.`}</Inline></p>
    </div>
  )
}
