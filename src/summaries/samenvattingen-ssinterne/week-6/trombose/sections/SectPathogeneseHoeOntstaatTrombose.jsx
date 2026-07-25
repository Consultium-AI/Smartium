import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathogenese: hoe ontstaat trombose?`}</Inline></SubHeading>
      <PBody text={`De oorzaak van trombose wordt klassiek uitgelegd met de **trias van Virchow**. Deze bestaat uit drie factoren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Endotheelbeschadiging**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beschadiging van de vaatwand maakt trombusvorming makkelijker.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Stase of turbulentie van de bloedstroom**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als het bloed langzamer stroomt of verstoord raakt, neemt de kans op stolselvorming toe.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hypercoagulabiliteit**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit betekent een verhoogde stollingsneiging van het bloed.`}</Inline></p>
    </div>
  )
}
