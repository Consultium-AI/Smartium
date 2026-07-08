import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bronchopulmonale dysplasie (BPD)`}</Inline></SubHeading>
      <PBody text={`**BPD** is een chronisch longbeeld dat vooral voorkomt bij prematuren. Het gaat samen met:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`langdurige zuurstofbehoefte`}</Inline></li>
        <li><Inline>{`recidiverende luchtweginfecties`}</Inline></li>
        <li><Inline>{`herhaalde ziekenhuisopnames`}</Inline></li>
        <li><Inline>{`verminderde inspanningstolerantie`}</Inline></li>
        <li><Inline>{`beperkingen van de longfunctie tot in de adolescentie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast worden ook groei en latere psychomotorische en intellectuele ontwikkeling vaker beïnvloed. Er is een verhoogde kans op taalachterstand, spasticiteit en cognitieve beperkingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vroeger werd vooral gekeken naar het klassieke röntgenbeeld en persisterende zuurstofbehoefte na 28 dagen. Tegenwoordig wordt BPD ook ingedeeld naar ernst op basis van de duur van de zuurstofbehoefte en de mate van respiratoire ondersteuning.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Ernst van BPD`}</Inline></SubHeading>
      <DataTable rows={[["Ernst", "Kenmerk"], ["Mild", "ademt kamerlucht, eventueel met neusbril 1 L/min"], ["Matig-ernstig", "zuurstofbehoefte < 30%"], ["Ernstig", "zuurstofbehoefte ≥ 30% en/of positieve druk, zoals beademing, nasale CPAP of HFNC"]]} />
    </div>
  )
}
