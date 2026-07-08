import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Peuterhypoglycemie`}</Inline></SubHeading>
      <PBody text={`De meest voorkomende oorzaak van hypoglycemie op de kinderleeftijd, los van insulinegebruik bij diabetes, is **peuterhypoglycemie** of **idiopathische ketotische hypoglycemie**.`} />
      <p className="leading-relaxed"><Inline>{`Hier is geen sprake van een defect in een metabool pad of in de hormonale aansturing. Het gaat om een disbalans tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de glucosebehoefte;`}</Inline></li>
        <li><Inline>{`en de snelheid waarmee de vastenprocessen op gang komen.`}</Inline></li>
      </ul>
      <PBody text={`Deze kinderen zitten als het ware aan de onderkant van de normale verdeling van vastentolerantie. Naarmate kinderen ouder worden, neemt die tolerantie toe. Rond de leeftijd van **6 jaar** groeien de meeste kinderen over deze neiging heen.`} />
      <p className="leading-relaxed"><Inline>{`Praktisch betekent dit dat je bij deze kinderen rekening houdt met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een late avondvoeding;`}</Inline></li>
        <li><Inline>{`vaker koolhydraten bij ziekte of verminderde intake.`}</Inline></li>
      </ul>
    </div>
  )
}
