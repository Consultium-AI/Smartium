import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nevenbevindingen bij NIPT`}</Inline></SubHeading>
      <PBody text={`Bij de NIPT kan ook worden gekeken naar DNA-fragmenten van andere chromosomen dan 21, 18 en 13. Daarbij kunnen **nevenbevindingen** ontstaan. Het oplossend vermogen is ongeveer 15–20 megabasen.`} />
      <p className="leading-relaxed"><Inline>{`Nevenbevindingen kunnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`foetale chromosoomafwijkingen anders dan trisomie 21, 18 of 13;`}</Inline></li>
        <li><Inline>{`afwijkingen die alleen in de placenta voorkomen, zoals **confined placental mosaicism (CPM)**;`}</Inline></li>
        <li><Inline>{`chromosoomafwijkingen bij de zwangere zelf, zoals deleties, duplicaties of zelfs een maternale maligniteit.`}</Inline></li>
      </ul>
      <PBody text={`De testkarakteristieken van deze nevenbevindingen zijn nog niet goed duidelijk. Dat wordt onderzocht in de **TRIDENT 2-studie**.`} />
      <SubHeading><Inline>{`TRIDENT 2`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De TRIDENT 2-studie is een implementatiestudie waarin zwangeren na counseling kunnen kiezen voor de combinatietest of de NIPT als screening op down-, edwards- en patausyndroom. Er is een eigen bijdrage van ruim 180 euro. Het is dus geen gewone routinezorg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Binnen deze studie kunnen zwangeren kiezen voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**targeted screening**: alleen op trisomie 21, 18 en 13;`}</Inline></li>
        <li><Inline>{`**whole genome screening**: screening van het hele genoom, met uitzondering van de geslachtschromosomen.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 2. Geschatte frequenties van afwijkingen in TRIDENT 2**`} />
      <DataTable rows={[["Afwijking", "Frequentie"], ["Trisomie 21, 18 en 13", "4 op 1000 zwangeren"], ["Foetale chromosoomafwijkingen anders dan trisomie 21, 18 en 13", "2 op 1000 zwangeren"], ["Placenta-afwijkingen (CPM)", "2 op 1000 zwangeren"], ["Chromosoomafwijkingen bij de zwangere zelf", "<1 op 1000 zwangeren"]]} />
      <SubHeading><Inline>{`Waarom worden geslachtschromosomen niet gescreend?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dat gebeurt in Nederland niet, omdat de testeigenschappen daarvoor minder betrouwbaar zijn. Daarnaast zijn veel geslachtschromosomale afwijkingen klinisch mild, en men wil ook voorkomen dat de test als middel voor geslachtsselectie wordt gebruikt.`}</Inline></p>
    </div>
  )
}
