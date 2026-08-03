import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom aanvullend onderzoek?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Klachten en lichamelijk onderzoek zijn meestal niet genoeg om hartfalen zeker vast te stellen. Je hebt objectieve aanwijzingen nodig voor een structurele of functionele afwijking van het hart.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste onderzoeken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**NT-proBNP**`}</Inline></li>
        <li><Inline>{`**ECG**`}</Inline></li>
        <li><Inline>{`**Echocardiografie**`}</Inline></li>
      </ul>
    </div>
  )
}
