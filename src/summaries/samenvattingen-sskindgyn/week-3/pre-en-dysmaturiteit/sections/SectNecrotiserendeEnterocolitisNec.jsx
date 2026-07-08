import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Necrotiserende enterocolitis (NEC)`}</Inline></SubHeading>
      <PBody text={`**NEC** is een ernstige darmontsteking met ischemie en necrose van de darm. Het komt vooral voor bij **prematuren en dysmaturen**. Zowel dunne darm als colon kunnen aangedaan zijn. Hoe korter de zwangerschapsduur, hoe groter het risico. Bij de allerkleinsten is het risico zeer hoog.`} />
      <p className="leading-relaxed"><Inline>{`NEC is een levensbedreigende aandoening. De sterfte is hoog en veel kinderen houden er ernstige gevolgen aan over, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ontwikkelingsachterstand`}</Inline></li>
        <li><Inline>{`kort-darmsyndroom`}</Inline></li>
        <li><Inline>{`langdurige afhankelijkheid van infuusvoeding`}</Inline></li>
        <li><Inline>{`risico op sepsis en leverfalen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Klinisch kan NEC zich uiten met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rectaal bloedverlies`}</Inline></li>
        <li><Inline>{`gallig braken`}</Inline></li>
        <li><Inline>{`bolle, gespannen buik`}</Inline></li>
        <li><Inline>{`verslechtering van de algemene toestand`}</Inline></li>
        <li><Inline>{`cardiorespiratoire insufficiëntie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek laat vaak zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`metabole acidose`}</Inline></li>
        <li><Inline>{`trombopenie`}</Inline></li>
        <li><Inline>{`verhoogd CRP`}</Inline></li>
        <li><Inline>{`op de buikoverzichtsfoto: **pneumatosis intestinalis**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De behandeling kan chirurgisch zijn, bijvoorbeeld met laparotomie en resectie van necrotisch darmweefsel.`}</Inline></p>
    </div>
  )
}
