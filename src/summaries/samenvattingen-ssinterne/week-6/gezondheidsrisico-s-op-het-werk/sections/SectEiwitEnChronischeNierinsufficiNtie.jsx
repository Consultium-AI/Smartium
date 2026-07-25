import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eiwit en chronische nierinsufficiëntie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mevrouw De Vries heeft ook chronische nierinsufficiëntie. Dat geeft een dilemma: voor de ondervoeding is een eiwitverrijkte voeding gewenst, maar voor de nierfunctie is een hoge eiwitinname minder gunstig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij haar wordt tijdens de opname niet gekozen voor eiwitbeperking, omdat de ondervoeding op dit moment zwaarder weegt. Wel moet de nierfunctie gevolgd worden, net als fosfaat en ureum, zeker als het dieet langer wordt voortgezet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een hoge eiwitinname kan namelijk de renale bloeddoorstroming en intraglomerulaire druk verhogen. Daardoor stijgt de GFR tijdelijk, maar op langere termijn kan dit glomerulaire schade en sclerose geven, vooral bij bestaande nierschade.`}</Inline></p>
    </div>
  )
}
