import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend: primaire en secundaire hemostase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij bloedingsproblemen is het belangrijk om te onderscheiden of de primaire of secundaire hemostase verstoord is.`}</Inline></p>
      <PBody text={`**Tabel 7. Voorbeelden van bloedingsstoornissen en behandeling**`} />
      <DataTable rows={[["Stoornis", "Betrokken hemostase", "Behandeling bij bloeding of ingreep"], ["Trombopenie, bijvoorbeeld door chemotherapie", "Primaire hemostase", "Trombocytentransfusie"], ["Auto-immuun trombopenie", "Primaire hemostase", "Prednison of immuunglobulines"], ["Trombocytopathie, bijvoorbeeld door acetylsalicylzuur", "Primaire hemostase", "Trombocytentransfusie of DDAVP"], ["Hemofilie", "Secundaire hemostase", "Stollingsfactorconcentraat"], ["VKA-gebruik", "Secundaire hemostase", "4-factorconcentraat en/of vitamine K"], ["Vitamine K-deficiëntie", "Secundaire hemostase", "Vitamine K-suppletie"]]} />
    </div>
  )
}
