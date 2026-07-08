import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Onderzoek bij verdenking op UWI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een urineweginfectie stel je de diagnose op basis van urineonderzoek, gevolgd door een urinekweek. Een urinestick of sediment wordt gebruikt om te kijken naar onder andere leukocyten en nitriet. Een positieve combinatie van leukocyten en nitriet heeft een hoge voorspellende waarde.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast doe je bloedonderzoek om de ernst van de infectie in te schatten, zoals CRP en bloedbeeld. Bij ernstige dehydratie of bij een urineweginfectie is ook nierfunctieonderzoek nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een echo van de nieren is pas geïndiceerd als de urineweginfectie aannemelijk is gemaakt met afwijkende urine.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Aanvullend onderzoek bij verdenking op UWI`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Doel"], ["Urineonderzoek (stick of sediment)", "Aantonen van leukocyten, nitriet, erytrocyten"], ["Urinekweek", "Bevestigen van een UWI"], ["CRP", "Ernst van de infectie inschatten"], ["Bloedbeeld", "Infectie en ernst beoordelen"], ["Nierfunctie", "Beoordelen bij dehydratie of UWI"], ["Echo nieren/blaas", "Opsporen van anatomische afwijkingen, maar pas nadat UWI aannemelijk is gemaakt"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom is een urinekweek zo belangrijk?
**Mini-antwoord:** Omdat een UWI uiteindelijk bewezen moet worden met bacteriën in betrouwbaar afgenomen urine.`} />
    </div>
  )
}
