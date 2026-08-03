import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`FDG PET/CT laat het metabolisme zien en is vooral gevoelig, maar niet specifiek. Het wordt gebruikt bij stadiëring, responsevaluatie, verdenking op recidief en radiotherapieplanning. Goede voorbereiding is essentieel, omdat spieren, bruin vet, hoge glucosewaarden en cardiale activiteit de scan kunnen verstoren. Bij melanoom is beeldvorming vooral belangrijk als de kans op metastasen groter is. Voor hersenmetastasen is MRI de eerste keus, omdat FDG PET/CT in de hersenen te veel achtergrondactiviteit heeft. MRI is een techniek zonder stralingsbelasting en is vooral geschikt voor weke delen en hersenen. De sentinel node-procedure helpt bij het opsporen van de eerste lymfeklier met mogelijke metastase. Bij de beoordeling van FDG PET/CT moet je altijd denken aan de belangrijkste valkuil: FDG-opname betekent niet automatisch maligniteit.`}</Inline></p>
    </div>
  )
}
