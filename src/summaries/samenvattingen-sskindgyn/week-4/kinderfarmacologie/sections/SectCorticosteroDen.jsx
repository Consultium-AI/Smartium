import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Corticosteroïden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Corticosteroïden kunnen de groei remmen. Lokale toepassing, bijvoorbeeld via inhalatie, verdient de voorkeur. Ook zo laag mogelijke doseringen en alternerend toedienen kunnen helpen om het effect op de groei te beperken.`}</Inline></p>
    </div>
  )
}
