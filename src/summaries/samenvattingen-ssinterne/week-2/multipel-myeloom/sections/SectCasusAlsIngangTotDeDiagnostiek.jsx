import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus als ingang tot de diagnostiek`}</Inline></SubHeading>
      <PBody text={`Een 53-jarige vrouw komt bij de huisarts met **vermoeidheid** en **rugpijn**. De klachten bestaan al maanden en nemen geleidelijk toe. Pijnstilling helpt onvoldoende. In het bloedonderzoek worden al een **verhoogde bezinking** en **anemie** gevonden, waarna zij wordt verwezen naar de internist.`} />
      <PBody text={`Dit is een klassiek begin van de diagnostische zoektocht bij multipel myeloom: klachten zijn vaak aspecifiek, maar de combinatie van **botklachten**, **anemie** en **afwijkend laboratoriumonderzoek** kan richting geven.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom valt multipel myeloom vaak pas later op?**
Omdat de klachten in het begin vaak vaag zijn, zoals moeheid of rugpijn, en daardoor niet meteen aan een hematologische maligniteit doen denken.`} />
    </div>
  )
}
