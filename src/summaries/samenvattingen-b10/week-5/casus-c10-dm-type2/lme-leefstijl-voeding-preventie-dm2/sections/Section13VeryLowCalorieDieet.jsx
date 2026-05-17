import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`(Very) low-calorie dieet`}</Inline></h3>
      <p><Inline>{`Bij overgewicht en obesitas is gewichtsverlies een belangrijke behandeldoelstelling. Een **low-calorie dieet** bevat ongeveer 800–1200 kcal per dag. Een **very low-calorie dieet** bevat ongeveer 400–800 kcal per dag en wordt vaak tijdelijk uitgevoerd met maaltijdvervangers.`}</Inline></p>
      <p><Inline>{`Dit soort diëten wordt vooral ingezet onder begeleiding en gedurende een beperkte periode, vaak 3 tot 6 maanden, waarna de voeding weer wordt opgebouwd volgens een gezond voedingspatroon.`}</Inline></p>
      <p><Inline>{`De stof benadrukt dat een very low-calorie dieet bij mensen met type 2 diabetes de volgende effecten kan hebben:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewichtsverlies;`}</Inline></li>
        <li><Inline>{`verbetering van glykemische controle;`}</Inline></li>
        <li><Inline>{`verbetering van lipiden;`}</Inline></li>
        <li><Inline>{`verbetering van kwaliteit van leven;`}</Inline></li>
        <li><Inline>{`vermindering van insulinegebruik.`}</Inline></li>
      </ul>
      <p><Inline>{`Daarnaast kan het leiden tot **remissie** van diabetes type 2. Remissie betekent hier: goede bloedglucosewaarden zonder medicatie. In de DIRECT-trial werd na een periode van very low-calorie dieet bij een aanzienlijk deel van de deelnemers remissie bereikt.`}</Inline></p>
      <p><Inline>{`Een belangrijk punt is ook dat langzamer of sneller afvallen op zichzelf niet bepalend is voor het latere weer aankomen in gewicht. Het gaat vooral om **langdurige begeleiding** en het voorkomen van terugval. Een diëtist kan hierbij helpen.`}</Inline></p>
    </div>
  )
}
