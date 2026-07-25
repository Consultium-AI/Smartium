import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van sarcopenie en ondervoeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De optimale behandeling van sarcopenie is niet bekend. De resultaten van interventiestudies zijn wisselend. In de praktijk wordt daarom multifactorieel behandeld: de factoren die bijdragen aan sarcopenie, zoals ziekte en ondervoeding, moeten zoveel mogelijk worden aangepakt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is het belangrijk om beweging te stimuleren, zodat spieratrofie door bedlegerigheid zoveel mogelijk wordt voorkomen. Vaak is de fysiotherapeut hierbij betrokken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij ondervoeding is een multidisciplinaire aanpak belangrijk. De diëtist speelt daarin een centrale rol.`}</Inline></p>
    </div>
  )
}
