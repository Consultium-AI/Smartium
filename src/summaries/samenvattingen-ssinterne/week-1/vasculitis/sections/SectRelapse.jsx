import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Relapse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij terugkeer van klachten tijdens afbouw is sprake van een relapse. Dan verhoog je de prednison weer naar de laatst gebruikte dosering waaronder de ziekte onder controle was. Bij visusklachten of kaakclaudicatio ga je weer naar 60 mg per dag. Daarna beoordeel je opnieuw met bloedonderzoek en follow-up.`}</Inline></p>
    </div>
  )
}
