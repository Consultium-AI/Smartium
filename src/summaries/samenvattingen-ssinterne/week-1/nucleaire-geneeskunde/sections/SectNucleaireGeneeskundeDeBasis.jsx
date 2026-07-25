import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nucleaire geneeskunde: de basis`}</Inline></SubHeading>
      <PBody text={`Bij de nucleaire geneeskunde gebruiken we **radioactieve stoffen**, ook wel **radiofarmaca**, om processen in het lichaam zichtbaar te maken. Het gaat dus niet alleen om het laten zien van een orgaan, maar vooral om het afbeelden van **functie**: hoe een orgaan werkt, hoe een stof wordt opgenomen, of er afvloed is, en of er ergens verhoogde activiteit zit.`} />
      <PBody text={`Dat kan nuttig zijn bij zowel **benigne** als **maligne** aandoeningen. In deze stof staan twee onderzoeken centraal die je in de kliniek regelmatig tegenkomt: het **renogram** en de **FDG PET/CT**.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
