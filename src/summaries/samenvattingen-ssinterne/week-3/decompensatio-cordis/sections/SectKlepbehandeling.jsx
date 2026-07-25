import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klepbehandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij klepaandoeningen kan gekozen worden voor klepherstel of klepvervanging. Soms wordt dit gecombineerd met ingrepen aan de aortawortel of de aortaboog.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij klepvervanging zijn er verschillende mogelijkheden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**mechanische klep**: gaat lang mee, maar vereist levenslange orale antistolling en geeft daardoor meer bloedingsrisico;`}</Inline></li>
        <li><Inline>{`**bioklep**: geen levenslange orale antistolling nodig, maar de levensduur is korter.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast bestaan er ook andere vormen van klepinterventie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**mitraliskleprepair**: de eigen klep wordt behouden en gerepareerd;`}</Inline></li>
        <li><Inline>{`**mitral clip**: via de vena femoralis wordt een clip geplaatst om mitralisinsufficiëntie te verminderen;`}</Inline></li>
        <li><Inline>{`**TAVI**: via de arteria femoralis wordt een nieuwe aortaklep ingebracht en op de plaats van de oude klep ontplooid.`}</Inline></li>
      </ul>
    </div>
  )
}
