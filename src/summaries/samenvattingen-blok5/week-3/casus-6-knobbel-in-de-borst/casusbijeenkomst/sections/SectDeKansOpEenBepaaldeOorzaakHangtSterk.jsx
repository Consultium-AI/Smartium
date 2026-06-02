import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De kans op een bepaalde oorzaak hangt sterk af van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**leeftijd**;`}</Inline></li>
        <li><Inline>{`**unilateraal of bilateraal**;`}</Inline></li>
        <li><Inline>{`**acuut of chronisch**;`}</Inline></li>
        <li><Inline>{`**pijnlijk of niet**;`}</Inline></li>
        <li><Inline>{`**roodheid**;`}</Inline></li>
        <li><Inline>{`**koorts of ziek zijn**;`}</Inline></li>
        <li><Inline>{`**voorgeschiedenis**;`}</Inline></li>
        <li><Inline>{`**medicatie**;`}</Inline></li>
        <li><Inline>{`**immobiliteit**;`}</Inline></li>
        <li><Inline>{`**maligniteit in de voorgeschiedenis of verdenking daarop**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij een **jonge patiënt** zijn sommige oorzaken zeldzaam, maar ze blijven wel mogelijk. Bij een **oudere patiënt** komen systemische oorzaken, veneuze insufficiëntie en hartfalen veel vaker voor.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`De meest frequente groep bij diffuse beenzwelling is die van de **oudere patiënt met bilaterale zwelling**.`}</Inline>
      </p>
    </div>
  )
}
