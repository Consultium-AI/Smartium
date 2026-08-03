import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`EPO en de nier`}</Inline></SubHeading>
      <PBody text={`De nier speelt ook een belangrijke rol in de aanmaak van **erytropoëtine (EPO)**. In het niermerg is de zuurstofspanning relatief laag, en die wordt dieper in het merg nog lager. Fibroblasten in de nier voelen die zuurstofspanning. Als er te weinig zuurstof is, maken zij EPO aan. EPO stimuleert het beenmerg om meer rode bloedcellen te produceren.`} />
    </div>
  )
}
