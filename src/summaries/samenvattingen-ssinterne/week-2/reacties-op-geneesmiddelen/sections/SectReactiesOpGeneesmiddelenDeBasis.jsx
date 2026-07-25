import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reacties op geneesmiddelen: de basis`}</Inline></SubHeading>
      <PBody text={`Geneesmiddelen kunnen naast hun gewenste werking ook **ongewenste effecten** geven. Dat noemen we in het algemeen **bijwerkingen** of **adverse drug reactions**. Voor een arts is het belangrijk om zulke reacties te herkennen, omdat ze kunnen variëren van mild en tijdelijk tot ernstig en levensbedreigend.`} />
      <PBody text={`Een geneesmiddelreactie kan op verschillende manieren ontstaan. Soms is het een **verwacht effect** van het middel zelf, bijvoorbeeld omdat het middel ook op andere plaatsen in het lichaam werkt dan bedoeld. Soms is de reactie juist **onverwacht** en treedt die alleen bij bepaalde mensen op. Vooral die laatste groep is belangrijk bij overgevoeligheidsreacties.`} />
    </div>
  )
}
