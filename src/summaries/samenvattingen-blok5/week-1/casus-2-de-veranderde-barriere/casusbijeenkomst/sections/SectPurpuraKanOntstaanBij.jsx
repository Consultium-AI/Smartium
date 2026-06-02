import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Purpura kan ontstaan bij:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`vasculitis`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`trombocytopenie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`trombocytopathie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`stollingsstoornissen, zoals hemofilie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wat is het verschil met ecchymose en hematoom?`}</Inline></p>
      <PBody text={`**Ecchymose**: een blauwe plek, vaak na trauma of bij een stollingsstoornis`} />
      <PBody text={`**Hematoom**: een grotere, diepere ophoping van bloed in weefsel of een lichaamsholte`} />
      <p className="leading-relaxed"><Inline>{`Bij een **vasculitis** is er ontsteking van de bloedvaten. Bij een **vasculopathie** is er meestal vaatschade zonder ontsteking.`}</Inline></p>
    </div>
  )
}
