import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antistoffen en de klinische betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Neonaten maken in de eerste 1-2 maanden zelf nog geen irregulaire antistoffen. Als je zulke antistoffen bij een neonaat aantreft, zijn ze dus passief van de moeder afkomstig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De sterkte van de DAT kan helpen bij de interpretatie. Een sterke DAT past vaker bij antistoffen tegen private antigenen. Een zwakke DAT past vaker bij een ABO-antagonisme.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij twijfel kan een kruisproef helpen. Dan wordt het serum van de moeder samengebracht met erytrocyten van de vader. Als er antistoffen aanwezig zijn tegen een vaderlijk antigeen, ontstaat een agglutinatiereactie.`}</Inline></p>
    </div>
  )
}
