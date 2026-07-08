import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij de neonaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een neonaat met hyperbilirubinemie en verdenking op bloedgroepantagonisme zijn meerdere laboratoriumonderzoeken nodig.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke testen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Laboratoriumonderzoek bij verdenking op bloedgroepantagonisme"], ["Onderzoek", "Doel"], ["Directe antiglobuline test (DAT)", "Aantonen of neonatale erytrocyten beladen zijn met antistoffen"], ["ABO-bloedgroep en RhD", "Vaststellen van de bloedgroep van de baby"], ["Totaal bilirubine", "Inschatten van de ernst van de hyperbilirubinemie"], ["Geconjugeerd bilirubine", "Uitsluiten van andere oorzaken, zoals galgangatresie"], ["Eluaat van neonatale erytrocyten", "Aantonen welke antistoffen aan de erytrocyten gebonden zijn"], ["Antistoftiter en specificiteit bij de moeder", "Inschatten van de maternale antistof en de hoeveelheid"]]} />
      <p className="leading-relaxed"><Inline>{`De screening op irregulaire antistoffen onderzoekt of het serum antistoffen bevat tegen klinisch relevante bloedgroepantigenen. De testerytrocyten in zo’n screening zijn meestal van bloedgroep O, waardoor anti-A en anti-B niet met die screening worden aangetoond.`}</Inline></p>
      <SubHeading><Inline>{`DAT en eluaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De DAT kan zwak positief of sterk positief zijn. Dat geeft een aanwijzing over de mate van sensibilisatie van de erytrocyten. Bij antistoffen tegen private antigenen is de DAT vaak sterk positief. Bij een ABO-antagonisme is de DAT vaak negatief tot licht positief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een ABO-antagonisme is een eluaat belangrijk. Daarbij worden de antistoffen die aan de erytrocyten van het kind vastzitten van die erytrocyten afgehaald en vervolgens geïdentificeerd. Bij ABO-antagonisme wordt een vries-dooi-eluaat gebruikt.`}</Inline></p>
      <SubHeading><Inline>{`Welke antistoffen zijn risicovol?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alle antistoffen zijn even belangrijk. Vooral antistoffen tegen de volgende systemen kunnen HZFN geven:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`RhcDE;`}</Inline></li>
        <li><Inline>{`Kell;`}</Inline></li>
        <li><Inline>{`Kidd;`}</Inline></li>
        <li><Inline>{`Duffy;`}</Inline></li>
        <li><Inline>{`Lewis;`}</Inline></li>
        <li><Inline>{`P1;`}</Inline></li>
        <li><Inline>{`MNSs;`}</Inline></li>
        <li><Inline>{`Lutheran;`}</Inline></li>
        <li><Inline>{`zeldzame antigenen zoals Tja, Vel en Yt(a).`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Private antigenen zijn antigenen die zeer zeldzaam voorkomen in de populatie. Antistoffen daartegen kunnen ook relevant zijn, en die worden niet altijd door de standaard screening opgepikt.`}</Inline></p>
    </div>
  )
}
