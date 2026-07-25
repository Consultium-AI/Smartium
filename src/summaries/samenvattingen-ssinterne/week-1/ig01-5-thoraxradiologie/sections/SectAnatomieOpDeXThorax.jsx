import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie op de X-thorax`}</Inline></SubHeading>
      <PBody text={`Op een thoraxfoto moet je de normale anatomie kunnen herkennen. Dat is de basis om afwijkingen te zien. Belangrijke structuren zijn onder andere de **trachea**, **claviculae**, **ribben**, **aortaboog**, **rechteratrium**, **linkerventrikel**, **costofrenische sinussen** en de **maagbel**.`} />
      <PBody text={`De **costofrenische sinus** is de hoek tussen diafragma en borstwand; deze moet normaal scherp zichtbaar zijn. De **carina** is de splitsing van de trachea in de hoofdbronchi. Ook de **vena azygos** en de **linker arterie pulmonalis** kunnen op een normale opname herkend worden.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijke anatomische herkenningspunten op de X-thorax`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Waarom belangrijk?"], ["Trachea en carina", "Oriëntatie in het mediastinum"], ["Aortaboog", "Herkenning van mediastinale contouren"], ["Rechteratrium en linkerventrikel", "Beoordeling van de hartcontour"], ["Costofrenische sinus", "Kan afwijkingen zoals pleuravocht tonen"], ["Maagbel", "Helpt bij oriëntatie links onderin"]]} />
    </div>
  )
}
