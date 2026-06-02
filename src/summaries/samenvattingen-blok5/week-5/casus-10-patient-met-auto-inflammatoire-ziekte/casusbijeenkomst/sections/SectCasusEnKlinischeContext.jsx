import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De centrale ziekte in deze bijeenkomst is de **ziekte van Sjögren**. Dat is een chronische auto-immuunziekte waarbij vooral de **traan- en speekselklieren** worden aangevallen. Daardoor ontstaan typische klachten van **droge ogen** en **droge mond**. Maar Sjögren is meer dan alleen droogte: sommige patiënten hebben vooral veel klachten, anderen vooral duidelijke **systemische ziekteactiviteit**, en weer anderen hebben tekenen van **B-celactivatie** of een **overlap met een andere auto-immuunziekte**.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De casus laat zien dat Sjögren heel verschillend kan presenteren. Daarom is het belangrijk om niet alleen naar droogte te kijken, maar ook naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`vermoeidheid`}</Inline></li>
        <li><Inline>{`gewrichtsklachten`}</Inline></li>
        <li><Inline>{`Raynaud`}</Inline></li>
        <li><Inline>{`neuropathie`}</Inline></li>
        <li><Inline>{`longbetrokkenheid`}</Inline></li>
        <li><Inline>{`laboratoriumafwijkingen zoals verhoogd IgG, positieve autoantistoffen en complementverbruik`}</Inline></li>
      </ul>
    </div>
  )
}
