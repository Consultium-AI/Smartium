import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een rood en gezwollen oksel of een dik been denk je systematisch:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Is het een huidinfectie zoals erysipelas of cellulitis?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Is er een port d’entrée, zoals een wondje of krabwond?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Is er sprake van lymfoedeem of een voorgeschiedenis van operatie/radiotherapie?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voel je een lymfeklier of massa die past bij maligniteit?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Moet je aan DVT denken?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Past het beeld bij hidradenitis suppurativa door recidief, lokalisatie en comedonen?`}</Inline></p>
    </div>
  )
}
