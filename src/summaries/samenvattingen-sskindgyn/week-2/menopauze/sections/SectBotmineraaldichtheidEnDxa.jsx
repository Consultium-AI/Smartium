import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Botmineraaldichtheid en DXA`}</Inline></SubHeading>
      <PBody text={`Bij osteoporose is de **botmineraaldichtheid** belangrijk. De best voorspellende waarde voor het ontstaan van fracturen heet de **BMD**. Die kan worden gemeten met een **DXA-scan**.`} />
      <p className="leading-relaxed"><Inline>{`Bij een DXA-meting ligt de patiënt op de rug. Met een speciaal röntgenapparaat met lage energie wordt een opname gemaakt van de onderrug en de heupen. De meting duurt ongeveer 15 minuten. Hoe meer röntgenstraling wordt doorgelaten, hoe minder kalk het bot bevat en dus hoe lager de botdichtheid is.`}</Inline></p>
      <PBody text={`De uitslag wordt weergegeven in een **T-score**:`} />
      <SubHeading><Inline>{`Tabel 2. Interpretatie van de T-score`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag", "Betekenis"], ["T-score > -1", "Normale botdichtheid"], ["T-score tussen -1 en -2,5", "Osteopenie"], ["T-score < -2,5", "Osteoporose"], ["T-score < -2,5 met 1 of meer fracturen", "Ernstige osteoporose"]]} />
      <PBody text={`Belangrijk is dat osteoporose op zichzelf **geen reden** is om te starten met hormonale substitutietherapie, tenzij er ook andere klachten zijn die behandeld moeten worden. Dat ligt anders bij vrouwen die iatrogeen postmenopauzaal zijn.`} />
    </div>
  )
}
