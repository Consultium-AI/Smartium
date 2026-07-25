import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van levercirrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met icterus, oedeem en een bolle buik denk je als eerste aan leverziekten, maar ook andere aandoeningen kunnen in de differentiaaldiagnose staan. De belangrijkste oorzaken en ziektebeelden die in deze context genoemd worden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`virale hepatitis;`}</Inline></li>
        <li><Inline>{`alcoholische hepatitis;`}</Inline></li>
        <li><Inline>{`alcoholische cirrose;`}</Inline></li>
        <li><Inline>{`NASH;`}</Inline></li>
        <li><Inline>{`auto-immuun hepatitis;`}</Inline></li>
        <li><Inline>{`metabole leverziekten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`NASH staat voor niet-alcoholische steatohepatitis: leverontsteking op basis van vetstapeling in de lever. Ook hemochromatose, alfa-1-antitrypsinedeficiëntie en de ziekte van Wilson horen bij de metabole oorzaken die je moet uitzoeken.`}</Inline></p>
      <SubHeading><Inline>{`Klinische context`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met een voorgeschiedenis van fors alcoholgebruik denk je natuurlijk aan alcoholische leverziekte. Maar een cirrosebeeld is niet automatisch alcoholisch; daarom moet je altijd verder zoeken naar de oorzaak.`}</Inline></p>
    </div>
  )
}
