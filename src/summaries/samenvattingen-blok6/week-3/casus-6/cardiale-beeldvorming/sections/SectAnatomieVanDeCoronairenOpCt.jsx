import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van de coronairen op CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goede interpretatie van cardiale CT moet je de coronairanatomie kennen. De belangrijkste vaten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **RCA**: rechter coronairarterie;`}</Inline></li>
        <li><Inline>{`de **LAD**: left anterior descending;`}</Inline></li>
        <li><Inline>{`de **LCx**: left circumflex;`}</Inline></li>
        <li><Inline>{`de **hoofdstam** of **LM**: left main.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De belangrijkste aftakkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij de **LAD**: de **diagonale takken**;`}</Inline></li>
        <li><Inline>{`bij de **LCx**: de **marginale obtuse takken**;`}</Inline></li>
        <li><Inline>{`bij de **RCA**: de **PDA** en de **acuut marginale takken**.`}</Inline></li>
      </ul>
      <PBody text={`De **LAD** wordt vaak de **“widow maker”** genoemd. Dat komt doordat deze arterie de grootste myocardmassa van bloed voorziet, namelijk de voorwand en het septum. Een proximale afsluiting kan daarom een groot anteroseptaal infarct geven en gaat gepaard met een hoge mortaliteit.`} />
    </div>
  )
}
