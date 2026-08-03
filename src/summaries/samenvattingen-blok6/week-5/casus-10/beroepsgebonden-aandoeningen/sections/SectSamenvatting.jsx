import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsgebonden ILD is een belangrijke groep longaandoeningen die ontstaat door langdurige blootstelling aan ingeademde schadelijke stoffen op het werk. Ongeveer 10 tot 20% van alle ILD’s hangt hiermee samen. De belangrijkste vormen zijn pneumoconiosen zoals asbestose, silicose en coal worker’s pneumoconiosis, maar ook berylliumziekte, hard metal disease, beroepsmatige HP en soms sarcoïdose of fibrotische ILD’s zoals IPF kunnen een relatie hebben met werkblootstelling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnose begint altijd met een uitgebreide anamnese, waarin je niet alleen naar werk maar ook naar hobby’s, privéblootstelling en roken vraagt. Daarna volgen lichamelijk onderzoek, longfunctie, HRCT en zo nodig bloedonderzoek, BAL of longbiopt. Multidisciplinaire samenwerking is essentieel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste behandeling is het stoppen van verdere blootstelling. Preventie is nog belangrijker: bron wegnemen, substitutie, technische maatregelen en pas als laatste persoonlijke bescherming. Bij rest-risico is periodieke gezondheidsbewaking nodig om ziekte vroeg op te sporen.`}</Inline></p>
    </div>
  )
}
