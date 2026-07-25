import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventie`}</Inline></SubHeading>
      <PBody text={`Preventie van nierschade begint met **herkenning**. De huisarts speelt hierin een belangrijke rol door bij risicopatiënten jaarlijks de GFR en albuminurie te meten. Risicogroepen zijn onder andere patiënten met cardiovasculaire belasting, vasculitis of urologische problemen.`} />
      <p className="leading-relaxed"><Inline>{`Verwijzing naar internist of nefroloog is aangewezen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vermoeden van een nierziekte;`}</Inline></li>
        <li><Inline>{`snelle achteruitgang van de nierfunctie, bijvoorbeeld meer dan 5 ml/min per jaar;`}</Inline></li>
        <li><Inline>{`GFR < 30 ml/min/1,73 m²;`}</Inline></li>
        <li><Inline>{`proteïnurie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij klinisch zieke patiënten zijn vaak meerdere risicofactoren voor AKI aanwezig, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoge koorts of acuut ziekzijn;`}</Inline></li>
        <li><Inline>{`operaties of geneesmiddelen;`}</Inline></li>
        <li><Inline>{`diarree;`}</Inline></li>
        <li><Inline>{`röntgencontrast;`}</Inline></li>
        <li><Inline>{`het verwijderen van een blaaskatheter.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door deze factoren te herkennen en beleid daarop aan te passen, bijvoorbeeld met vochtbeleid, medicatieaanpassing en controle op blaasretentie, verklein je de kans op nierschade.`}</Inline></p>
    </div>
  )
}
