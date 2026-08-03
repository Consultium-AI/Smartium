import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuur-basebalans en kalium`}</Inline></SubHeading>
      <PBody text={`De kaliumbalans en de zuur-basebalans zijn nauw met elkaar verweven. Dat zie je bijvoorbeeld bij een **alkalose**: als de vrije H+-concentratie in het serum laag is, verplaatst H+ zich uit de cel naar het plasma. Daardoor gaat kalium juist de cel in. Het gevolg is dat de serumkaliumwaarde kan dalen.`} />
      <PBody text={`Bij een **acidose** speelt juist het omgekeerde mechanisme mee. Daarom is het belangrijk om kaliumstoornissen altijd samen met de zuur-basebalans te bekijken.`} />
    </div>
  )
}
