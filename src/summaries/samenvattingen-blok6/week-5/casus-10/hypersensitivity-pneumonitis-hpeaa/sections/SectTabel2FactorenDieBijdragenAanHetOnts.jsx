import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Factoren die bijdragen aan het ontstaan van HP`}</Inline></SubHeading>
      <DataTable rows={[["Factor", "Betekenis"], ["Genetische predispositie", "Niet iedereen die wordt blootgesteld, krijgt HP"], ["Intensiteit van blootstelling", "Hoe meer antigenen worden ingeademd, hoe groter de kans op ziekte"], ["Duur van blootstelling", "Langdurige blootstelling vergroot de kans op chronische ontsteking"]]} />
      <p className="leading-relaxed"><Inline>{`Immunologisch gezien speelt vooral een type III-overgevoeligheidsreactie een rol, waarbij immuuncomplexen ontstaan tegen ingeademde antigenen. Daarnaast draagt ook een type IV-reactie bij, dus een T-cel-gemedieerde reactie. Door voortdurende blootstelling blijft de ontsteking bestaan en ontstaan granulomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze granulomen liggen naast de luchtwegen. Dat is een belangrijk onderscheid met sarcoïdose, waarbij de granulomen juist naast de lymfevaten liggen.`}</Inline></p>
    </div>
  )
}
