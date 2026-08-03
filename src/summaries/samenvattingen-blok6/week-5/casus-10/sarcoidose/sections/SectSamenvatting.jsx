import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose is een **multisysteem granulomateuze ziekte** met **niet-necrotiserende granulomen** en soms fibrose. De longen zijn het vaakst betrokken, maar ook huid, ogen, lymfeklieren, nieren, zenuwstelsel, hart en lever kunnen meedoen. De presentatie is heel wisselend: van toevallige radiologische afwijkingen tot droge hoest, dyspneu, vermoeidheid, huidafwijkingen, uveïtis of hypercalciëmie.`} />
      <PBody text={`De klassieke radiologische stadia lopen van **bilaterale hiluslymfadenopathie** tot **fibrose**. Een bijzondere presentatie is het **Löfgren-syndroom**, dat vaak zelflimiterend is. Behandeling is niet altijd nodig, maar kan wel geïndiceerd zijn bij klachten, achteruitgang van de longfunctie of belangrijke extrapulmonale betrokkenheid.`} />
    </div>
  )
}
