import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Chronische nierschade`}</Inline></SubHeading>
      <SubHeading><Inline>{`Wat is chronische nierschade?`}</Inline></SubHeading>
      <PBody text={`Vroeger sprak men vaak van chronische nierinsufficiëntie, vooral als de nierfunctie langdurig verminderd was. Tegenwoordig gebruikt men liever de term **chronische nierschade (CNS)**, omdat ook patiënten met een nog redelijk behouden nierfunctie al duidelijke nierschade kunnen hebben.`} />
      <PBody text={`Van chronische nierschade is sprake als er **minstens 3 maanden** sprake is van structurele nierafwijkingen of een verminderde nierfunctie.`} />
      <p className="leading-relaxed"><Inline>{`Een verminderde nierfunctie betekent meestal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**eGFR < 60 ml/min/1,73 m²**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Structurele nierafwijkingen zijn bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`albuminurie;`}</Inline></li>
        <li><Inline>{`sedimentafwijkingen, zoals hematurie;`}</Inline></li>
        <li><Inline>{`elektrolytstoornissen;`}</Inline></li>
        <li><Inline>{`structurele afwijkingen, zoals cystennieren.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Classificatie van CNS`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De classificatie van chronische nierschade berust op twee onderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **GFR-categorie**;`}</Inline></li>
        <li><Inline>{`de **albuminurie-categorie**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat leidt tot risicogroepen met oplopende kans op morbiditeit en mortaliteit, vooral cardiovasculaire complicaties en eindstadium nierfalen.`}</Inline></p>
      <DataTable rows={[["Tabel 3. KDIGO-classificatie van chronische nierschade"], ["**Albuminurie**"], ["A1: normaal"], ["A2: matig verhoogd"], ["A3: ernstig verhoogd"], ["**GFR**"], ["G1: >90, normaal of hoog"], ["G2: 60–89, mild afgenomen"], ["G3a: 45–59, mild tot matig afgenomen"], ["G3b: 30–44, matig tot ernstig afgenomen"], ["G4: 15–29, ernstig afgenomen"], ["G5: <15, nierfalen"]]} />
      <p className="leading-relaxed"><Inline>{`De combinatie van albuminurie en GFR geeft vier risicokleuren: groen, geel, oranje en rood. Hoe roder de categorie, hoe hoger het risico.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is deze indeling belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De indeling helpt om te bepalen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe intensief iemand gecontroleerd moet worden;`}</Inline></li>
        <li><Inline>{`of follow-up bij de huisarts voldoende is;`}</Inline></li>
        <li><Inline>{`of verwijzing naar de nefroloog nodig is.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Groen en geel kunnen vaak in de eerste lijn worden vervolgd, terwijl oranje en rood vaker nefrologische follow-up vragen. Leeftijd speelt daarbij ook mee: een oudere patiënt kan ondanks een hogere risicocategorie toch door de huisarts worden gevolgd.`}</Inline></p>
    </div>
  )
}
