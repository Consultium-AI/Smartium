import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`NT-proBNP`}</Inline></SubHeading>
      <PBody text={`NT-proBNP wordt afgegeven wanneer het myocard wordt uitgerekt door druk- of volumeoverbelasting. Het is dus een marker van **wandspanning**.`} />
      <p className="leading-relaxed"><Inline>{`BNP en NT-proBNP ontstaan uit proBNP. NT-proBNP is biologisch inactief en wordt vooral via de nieren geklaard. Daarom kan het verhoogd zijn bij nierfalen.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer stijgt NT-proBNP?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`NT-proBNP stijgt niet alleen bij hartfalen, maar ook bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longembolie`}</Inline></li>
        <li><Inline>{`pulmonale hypertensie`}</Inline></li>
        <li><Inline>{`sepsis`}</Inline></li>
        <li><Inline>{`tachycardie`}</Inline></li>
        <li><Inline>{`nierfalen`}</Inline></li>
        <li><Inline>{`hogere leeftijd`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij obesitas kunnen de waarden juist lager zijn.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer is NT-proBNP nuttig?`}</Inline></SubHeading>
      <PBody text={`NT-proBNP is vooral handig om hartfalen **uit te sluiten** bij twijfelachtige klachten.`} />
      <PBody text={`**Tabel 4. NT-proBNP in de diagnostiek**`} />
      <DataTable rows={[["Situatie", "Interpretatie"], ["Polikliniek/huisartsenpraktijk: NT-proBNP < 125 pg/mL", "Hartfalen onwaarschijnlijk"], ["Acute setting: NT-proBNP < 300 pg/mL", "Hartfalen zeer onwaarschijnlijk"]]} />
      <p className="leading-relaxed"><Inline>{`Een hoge waarde betekent niet automatisch hartfalen, want NT-proBNP is niet specifiek. Het moet altijd in de klinische context worden geïnterpreteerd.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke beïnvloedende factoren`}</Inline></SubHeading>
      <DataTable rows={[["Factor", "Effect op NT-proBNP"], ["Leeftijd", "stijgt fysiologisch"], ["Nierfalen", "stijgt door verminderde klaring"], ["Atriumfibrilleren", "vaak verhoogd"], ["Obesitas", "vaak lager"], ["Sepsis", "vaak verhoogd"]]} />
      <PBody text={`**Aandacht-vraagje:**
Sluit een normale NT-proBNP hartfalen altijd uit?
**Mini-antwoord:** Meestal wel bij twijfelachtige kliniek, maar niet volledig in alle situaties, zoals bij HFpEF of atriumfibrilleren.`} />
    </div>
  )
}
