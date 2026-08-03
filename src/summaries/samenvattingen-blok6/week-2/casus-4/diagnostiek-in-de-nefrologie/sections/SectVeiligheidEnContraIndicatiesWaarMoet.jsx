import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veiligheid en contra-indicaties: waar moet je op letten?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een veilige nierbiopsie moet je vooraf goed uitvragen of er factoren zijn die het bloedingsrisico verhogen.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke aandachtspunten vooraf`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Risicofactoren en aandachtspunten bij nierbiopsie"], ["---"], ["**Stollingsproblemen in de voorgeschiedenis**"], ["**Gebruik van anticoagulantia of plaatjesremmers**, zoals acetylsalicylzuur of apixaban"], ["**Hypertensie**, vooral ongecontroleerde hypertensie"], ["**Anemie**"], ["**Gestoorde nierfunctie**"], ["**Amyloïdose**"], ["**Procedurele factoren**: naalddikte, aantal puncties, ervaring van de uitvoerder"]]} />
      <p className="leading-relaxed"><Inline>{`Anticoagulantia moeten voorafgaand aan de biopsie worden gestopt. Daardoor kan een nierbiopt niet acuut plaatsvinden als iemand antistolling gebruikt; er is meestal een aantal dagen nodig om dit veilig te regelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hypertensie is ook belangrijk, vooral als deze niet goed onder controle is. Daarom willen de meeste ziekenhuizen de systolische bloeddruk onder ongeveer 140-160 mmHg houden voor de procedure.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Andere factoren die de kans op bloeding verhogen, hangen samen met de nierziekte zelf of met de procedure. Zo is het risico hoger bij amyloïdose, bij anemie en bij een gestoorde nierfunctie. Ook de dikte van de naald, het aantal puncties en de ervaring van degene die de biopsie uitvoert spelen mee.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom moet je altijd naar antistolling vragen?
**Mini-antwoord:** Omdat antistolling de kans op bloeding vergroot en eerst gestopt moet worden voor een veilige biopsie.`} />
      <SubHeading><Inline>{`Praktisch klinisch voorbeeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw met hematurie, proteïnurie, een licht gestoorde nierfunctie en positieve ANA en dsDNA denk je aan lupus-nefritis. In zo’n situatie kan een nierbiopsie nodig zijn om de diagnose te bevestigen en de ernst van de afwijkingen te beoordelen. Maar voordat je de biopsie laat uitvoeren, moet je altijd nagaan of er stollingsproblemen zijn, of de patiënt antistolling gebruikt en of de bloeddruk goed genoeg is ingesteld.`}</Inline></p>
    </div>
  )
}
