import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beeldvorming van het hart: waarom is dit belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hart- en vaatziekten zijn wereldwijd een belangrijke doodsoorzaak. In de praktijk zie je daarom regelmatig patiënten met thoracale klachten, waarbij gedacht wordt aan coronairlijden. Beeldvorming speelt dan een grote rol in de diagnostiek. Verschillende technieken vullen elkaar aan: echocardiografie geeft informatie over functie en kleppen, CT is vooral nuttig voor de coronairen, MRI voor myocardweefsel, functie en perfusie, en invasieve coronairangiografie blijft belangrijk als directe behandeling overwogen wordt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een typische diagnostische aanpak begint vaak met anamnese, lichamelijk onderzoek en ECG. Daarna kan echocardiografie volgen. Afhankelijk van de vraag kunnen CT, MRI of nucleair onderzoek worden ingezet. Invasieve coronairangiografie komt vooral aan bod wanneer een interventie mogelijk is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Beeldvorming van het hart in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Techniek", "Belangrijkste toepassing"], ["Echocardiografie", "Ultrageluid", "Hartfunctie, klepfunctie, hartfalen"], ["SPECT", "Radioactieve tracer", "Perfusie en infarctgrootte"], ["PET", "Positron-emitterende tracer", "Metabolisme en doorbloeding"], ["CT", "Röntgenstraling met ECG-synchronisatie", "Kalkscore, coronairstenosen, anatomie"], ["MRI", "Magnetische velden en radiofrequentie", "Hartfunctie, infarctgrootte, cardiomyopathieën"], ["Invasieve coronairangiografie", "Katheter met contrast", "Gouden standaard voor coronairstenosen"]]} />
    </div>
  )
}
