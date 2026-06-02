import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 2: tiener met paarse verkleuring en zwelling`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Hier zijn de belangrijkste punten:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`paarse verkleuring en zwelling van het onderbeen;`}</Inline></li>
        <li><Inline>{`lichte pijn en lichte warmte;`}</Inline></li>
        <li><Inline>{`niet wegdrukbaar;`}</Inline></li>
        <li><Inline>{`ontstaan na licht trauma tijdens voetballen;`}</Inline></li>
        <li><Inline>{`geen koorts en niet ziek;`}</Inline></li>
        <li><Inline>{`geen spontane bloedneuzen;`}</Inline></li>
        <li><Inline>{`wel blauwe plekken, maar nooit spontaan;`}</Inline></li>
        <li><Inline>{`wel lang nabloeden na wondjes;`}</Inline></li>
        <li><Inline>{`geen duidelijke familieanamnese;`}</Inline></li>
        <li><Inline>{`geen beperking van mobiliteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit beeld maakt dat je moet denken aan een bloedingsprobleem, maar ook aan een lokale afwijking die op vasculitis kan lijken.`}</Inline></p>
    </div>
  )
}
