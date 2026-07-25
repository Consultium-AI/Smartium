import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Orgaanschade bij multipel myeloom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Multipel myeloom kan verschillende vormen van orgaanschade geven.`}</Inline></p>
      <SubHeading><Inline>{`Botlaesies`}</Inline></SubHeading>
      <PBody text={`Er kunnen **lytische botlaesies** ontstaan. Dat gebeurt doordat de myeloomplasmacel de **osteoclast aanzet** en de **osteoblast uitzet**. De osteoclast breekt bot af, terwijl de osteoblast normaal bot opbouwt. Als die balans verstoord raakt, ontstaan botafbraak en botzwakte.`} />
      <SubHeading><Inline>{`Hypercalciëmie`}</Inline></SubHeading>
      <PBody text={`Door botafbraak komt calcium vrij uit het bot, waardoor **hypercalciëmie** kan ontstaan. Klachten die daarbij passen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sufheid en verwardheid`}</Inline></li>
        <li><Inline>{`obstipatie`}</Inline></li>
        <li><Inline>{`dorst en veel plassen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Nierfunctiestoornis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook de nierfunctie kan achteruitgaan. In de casus is het creatinine verhoogd, wat hierbij past.`}</Inline></p>
      <SubHeading><Inline>{`Anemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Anemie ontstaat doordat het beenmerg wordt verdrongen door de plasmacellen en de normale bloedaanmaak verstoord raakt.`}</Inline></p>
    </div>
  )
}
