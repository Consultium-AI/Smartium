import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Substandaard factoren en perinatale audit`}</Inline></SubHeading>
      <PBody text={`Bij 25-30% van de gevallen van perinatale sterfte is er een mogelijke of waarschijnlijke relatie met **substandaard factoren**. Dat zijn omstandigheden in het zorgproces waarbij de zorg afwijkt van standaarden, richtlijnen, protocollen of gangbare zorg en daardoor de uitkomst negatief kan beïnvloeden.`} />
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`te late consultatie van de gynaecoloog bij groeivertraging;`}</Inline></li>
        <li><Inline>{`geen actie bij minder leven voelen;`}</Inline></li>
        <li><Inline>{`geen foetale bewaking bij inleiding;`}</Inline></li>
        <li><Inline>{`geen foetale bewaking bij vaginaal bloedverlies;`}</Inline></li>
        <li><Inline>{`te afwachtend beleid bij afwijkend CTG;`}</Inline></li>
        <li><Inline>{`niet optimale reanimatie van de pasgeborene.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Perinatale audits zijn belangrijk omdat ze veel verbeterpunten opleveren en helpen om de kwaliteit van zorg te monitoren.`}</Inline></p>
    </div>
  )
}
