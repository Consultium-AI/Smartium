import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`PET-scan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een PET-scan wordt gebruikt om te bepalen waar actieve ziekte zit. Dit is belangrijk voor de stadiëring van DLBCL. Daarnaast wordt de PET-scan ook gebruikt om het effect van de behandeling te beoordelen. Meestal gebeurt dit aan het begin van de behandeling en opnieuw na afronding van de therapie.`}</Inline></p>
    </div>
  )
}
