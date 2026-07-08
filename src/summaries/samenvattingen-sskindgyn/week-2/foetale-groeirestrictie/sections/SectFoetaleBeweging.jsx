import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Foetale beweging`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast CTG is ook de subjectieve beoordeling van foetale bewegingen belangrijk. Minder kindsbewegingen kunnen een reden zijn om de foetale bewaking te intensiveren of om, afhankelijk van de zwangerschapsduur, de zwangerschap te beëindigen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In een cohortstudie leidde schriftelijke informatie over minder kindsbewegingen in combinatie met een richtlijn voor professionals tot een duidelijke daling van intra-uteriene sterfte. Dat gold zowel in een SGA-groep als in de algemene zwangerenpopulatie.`}</Inline></p>
    </div>
  )
}
