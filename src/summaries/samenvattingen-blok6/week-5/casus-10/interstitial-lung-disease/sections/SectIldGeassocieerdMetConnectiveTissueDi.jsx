import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ILD geassocieerd met connective tissue diseases`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ILD is een frequente complicatie van connective tissue diseases en heeft een grote invloed op morbiditeit en mortaliteit. De prevalentie verschilt per ziekte en ook het patroon van ILD verschilt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. ILD bij belangrijke connective tissue diseases`}</Inline></SubHeading>
      <DataTable rows={[["Ziekte", "Prevalentie van ILD", "Meest voorkomend patroon"], ["Reumatoïde artritis", "11%", "UIP"], ["Systemische sclerose", "47%", "NSIP"], ["Mixed connective tissue disease", "47%", "NSIP"], ["Inflammatoire myositis", "41%", "NSIP"], ["Systemische lupus erythematosus", "6%", "NSIP"]]} />
      <p className="leading-relaxed"><Inline>{`Bij reumatoïde artritis is UIP het meest voorkomende patroon. Bij de andere genoemde connective tissue diseases is NSIP het meest voorkomend.`}</Inline></p>
    </div>
  )
}
