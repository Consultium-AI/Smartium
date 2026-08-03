import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Flow-volumecurve en ziektebeelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vorm van de flow-volumecurve geeft veel informatie. Bij COPD zie je typisch een concaaf verloop na de piekstroom: de curve zakt dan naar beneden door vernauwing van de kleine luchtwegen. De PEF kan normaal of licht verlaagd zijn, maar vooral het tweede deel van de curve verloopt vlakker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een betrouwbare meting kun je daarna pas echt beoordelen of de waarden normaal zijn of afwijkend. In de praktijk kijk je dus altijd eerst naar de kwaliteit van de uitvoering en daarna pas naar de medische interpretatie.`}</Inline></p>
    </div>
  )
}
