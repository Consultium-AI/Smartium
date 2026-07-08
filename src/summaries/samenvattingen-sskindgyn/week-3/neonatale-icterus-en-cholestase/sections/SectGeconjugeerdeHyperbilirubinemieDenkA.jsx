import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geconjugeerde hyperbilirubinemie: denk aan galactosemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een andere belangrijke casus betrof een à terme geboren neonaat van 6 dagen oud met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`icterus;`}</Inline></li>
        <li><Inline>{`niet-gallig braken;`}</Inline></li>
        <li><Inline>{`slecht drinken;`}</Inline></li>
        <li><Inline>{`donkere urine;`}</Inline></li>
        <li><Inline>{`gekleurde faeces;`}</Inline></li>
        <li><Inline>{`leverfunctiestoornissen;`}</Inline></li>
        <li><Inline>{`positieve urine-reductie;`}</Inline></li>
        <li><Inline>{`geen aanwijzingen voor hemolyse;`}</Inline></li>
        <li><Inline>{`normale galwegen op echo.`}</Inline></li>
      </ul>
      <PBody text={`Dat beeld past bij een **metabole stoornis**. De positieve reductie in de urine wijst op de aanwezigheid van **reducerende stoffen** zoals glucose, fructose of galactose. In deze context past dat bij **galactosemie**.`} />
    </div>
  )
}
