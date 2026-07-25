import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een systeemziekte met long- en nierbetrokkenheid vraag je gericht bloed- en urineonderzoek aan. Belangrijk zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedbeeld;`}</Inline></li>
        <li><Inline>{`nierfunctie;`}</Inline></li>
        <li><Inline>{`ontstekingsparameters zoals CRP en BSE;`}</Inline></li>
        <li><Inline>{`urineonderzoek op erytrocyten, leukocyten en eiwit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij afwijkingen zoals anemie, verhoogde BSE/CRP, creatininstijging en proteïnurie met hematurie wordt een systeemziekte waarschijnlijker.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Onderzoek dat past bij verdenking op kleine-vatenvasculitis`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Waarom nuttig?"], ["Bloedbeeld", "anemie of andere afwijkingen kunnen passen bij systemische ziekte"], ["Nierfunctie", "nierbetrokkenheid opsporen"], ["CRP/BSE", "ontstekingsactiviteit beoordelen"], ["Urineonderzoek", "hematurie en proteïnurie wijzen op nierbetrokkenheid"], ["X-thorax", "longafwijkingen zichtbaar maken"], ["Mantoux/Quantiferon", "tuberculose uitsluiten"]]} />
    </div>
  )
}
