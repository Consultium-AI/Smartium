import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een rood en gezwollen oksel of een dik been denk je systematisch:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2.5">
        <li><Inline>{`Is het een huidinfectie zoals erysipelas of cellulitis?`}</Inline></li>
        <li><Inline>{`Is er een port d’entrée, zoals een wondje of krabwond?`}</Inline></li>
        <li><Inline>{`Is er sprake van lymfoedeem of een voorgeschiedenis van operatie/radiotherapie?`}</Inline></li>
        <li><Inline>{`Voel je een lymfeklier of massa die past bij maligniteit?`}</Inline></li>
        <li><Inline>{`Moet je aan DVT denken?`}</Inline></li>
        <li><Inline>{`Past het beeld bij hidradenitis suppurativa door recidief, lokalisatie en comedonen?`}</Inline></li>
      </ol>
    </div>
  )
}
