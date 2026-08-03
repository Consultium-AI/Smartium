import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Radiologische stadia van sarcoïdose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vroeger werd sarcoïdose op de thoraxfoto ingedeeld in stadia I tot en met IV. Tegenwoordig wordt vaak een CT-scan gebruikt, maar de klassieke radiologische indeling blijft belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Radiologische stadia`}</Inline></SubHeading>
      <DataTable rows={[["Stadium", "Beeld"], ["Stadium I", "Bilaterale hiluslymfadenopathie"], ["Stadium II", "Bilaterale hiluslymfadenopathie + intrapulmonale noduli"], ["Stadium III", "Intrapulmonale noduli"], ["Stadium IV", "Intrapulmonale fibrose door sarcoïdose"]]} />
      <p className="leading-relaxed"><Inline>{`Stadium I en II zijn vaak nog relatief beperkt. Stadium IV past bij meer gevorderde longschade met fibrose.`}</Inline></p>
    </div>
  )
}
