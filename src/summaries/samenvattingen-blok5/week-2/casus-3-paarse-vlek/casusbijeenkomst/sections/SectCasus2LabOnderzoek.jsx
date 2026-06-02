import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Bij de 17-jarige jongen worden de volgende bepalingen bekeken:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`PT;`}</Inline></li>
        <li><Inline>{`APTT;`}</Inline></li>
        <li><Inline>{`leukocyten;`}</Inline></li>
        <li><Inline>{`Hb;`}</Inline></li>
        <li><Inline>{`trombocyten;`}</Inline></li>
        <li><Inline>{`VWF:Ag;`}</Inline></li>
        <li><Inline>{`VWF:Rco;`}</Inline></li>
        <li><Inline>{`FVIII:C;`}</Inline></li>
        <li><Inline>{`bloedgroep.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Hiermee wordt gekeken naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de stollingscascade;`}</Inline></li>
        <li><Inline>{`het aantal bloedplaatjes;`}</Inline></li>
        <li><Inline>{`de functie van von Willebrand-factor;`}</Inline></li>
        <li><Inline>{`factor VIII, dat samenhangt met von Willebrand-factor.`}</Inline></li>
      </ul>
    </div>
  )
}
