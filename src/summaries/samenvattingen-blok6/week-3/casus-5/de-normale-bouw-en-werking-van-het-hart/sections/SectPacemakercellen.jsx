import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pacemakercellen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pacemakercellen, zoals in de SA-knoop, hebben geen stabiele rustmembraanpotentiaal. Ze depolariseren spontaan in fase 4. Dat komt door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de funny current via HCN-kanalen`}</Inline></li>
        <li><Inline>{`T-type calciuminstroom`}</Inline></li>
        <li><Inline>{`afname van kaliumuitstroom`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna volgt fase 0, die in pacemakercellen vooral door calciuminstroom via L-type kanalen wordt veroorzaakt. Daarna volgt repolarisatie door kaliumuitstroom.`}</Inline></p>
    </div>
  )
}
