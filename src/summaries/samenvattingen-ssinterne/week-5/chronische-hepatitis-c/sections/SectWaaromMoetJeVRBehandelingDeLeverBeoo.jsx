import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom moet je vóór behandeling de lever beoordelen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor het starten van therapie is het essentieel om de mate van leverschade te beoordelen. Dat is belangrijk omdat chronische hepatitis C niet altijd al tot duidelijke leverbeschadiging heeft geleid, maar die schade wel aanwezig kan zijn. De ernst van de leverziekte bepaalt dus mede hoe je de patiënt benadert.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom worden naast HCV-RNA en genotypering ook algemene laboratoriumonderzoeken gedaan, zoals bloedbeeld, leverfunctietesten en stolling.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Onderzoek bij beoordeling van leverfunctie en -schade`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Waarom belangrijk?"], ["Hb, leukocyten, trombocyten", "Geeft informatie over het bloedbeeld en mogelijke gevolgen van leverziekte"], ["ALAT, ASAT, gamma-GT, AF, albumine, bilirubine", "Geeft inzicht in levercelbeschadiging en leverfunctie"], ["Protrombinetijd, INR", "Geeft informatie over de stollingsfunctie van de lever"]]} />
    </div>
  )
}
