import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pre-eclampsie en HELLP-syndroom`}</Inline></SubHeading>
      <PBody text={`Pre-eclampsie is een belangrijke aandoening in de tweede helft van de zwangerschap. Het gaat om **hypertensie met proteïnurie** bij een voorheen normotensieve vrouw. Ook **foetale groeirestrictie** in combinatie met hypertensie past hierbij.`} />
    </div>
  )
}
