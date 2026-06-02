import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Een belangrijk deel van de bijeenkomst gaat over huidafwijkingen die op bloedingen lijken. Daarbij moet je onderscheid maken tussen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**purpura**`}</Inline></li>
        <li><Inline>{`**ecchymose**`}</Inline></li>
        <li><Inline>{`**hematoom**`}</Inline></li>
        <li><Inline>{`**vasculitis**`}</Inline></li>
        <li><Inline>{`**vasculopathie**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat is purpura?`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Purpura is **niet wegdrukbare roodheid** door extravasatie van erytrocyten. Dat betekent dat rode bloedcellen uit de bloedvaten in de huid zijn gelekt.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Purpura kan ontstaan bij:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vasculitis`}</Inline></li>
        <li><Inline>{`trombocytopenie`}</Inline></li>
        <li><Inline>{`trombocytopathie`}</Inline></li>
        <li><Inline>{`stollingsstoornissen, zoals hemofilie`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat is het verschil met ecchymose en hematoom?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`**Ecchymose**: een blauwe plek, vaak na trauma of bij een stollingsstoornis`}</Inline>
        </li>
        <li>
          <Inline>{`**Hematoom**: een grotere, diepere ophoping van bloed in weefsel of een lichaamsholte`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij een **vasculitis** is er ontsteking van de bloedvaten. Bij een **vasculopathie** is er meestal vaatschade zonder ontsteking.`}</Inline>
      </p>
    </div>
  )
}
