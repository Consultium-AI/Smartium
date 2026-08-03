import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casuïstiek: tumor, infectie en inflammatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een FDG PET/CT kan verschillende ziektebeelden zichtbaar maken. Bij verdenking op longkanker wordt bijvoorbeeld standaard een FDG PET/CT gebruikt voor stadiëring. Bij koorts zonder focus kan het onderzoek juist helpen om een infectie op te sporen, zoals nierabcessen of geïnfecteerde cysten. Ook bij inflammatoire aandoeningen kan het onderzoek afwijkingen laten zien, bijvoorbeeld uitgebreide vasculitis met FDG-opname in de vaatwand van grote vaten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Wat kan FDG PET/CT laten zien?`}</Inline></SubHeading>
      <DataTable rows={[["Proces", "Voorbeeld van FDG-opname"], ["Tumor", "Maligne laesies met hoog metabolisme"], ["Infectie", "Abces, pneumonie, geïnfecteerde cyste"], ["Inflammatie", "Vasculitis, reactieve veranderingen"]]} />
    </div>
  )
}
