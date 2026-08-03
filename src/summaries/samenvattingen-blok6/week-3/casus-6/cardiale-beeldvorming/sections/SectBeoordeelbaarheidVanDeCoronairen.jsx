import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeelbaarheid van de coronairen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke CTA is even goed te beoordelen. Dat hangt onder andere af van de hoeveelheid calcificatie.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij **geen afwijkingen** zijn de coronairen goed beoordeelbaar.`}</Inline></li>
        <li><Inline>{`Bij **kleine calcificaties** zijn de coronairen vaak nog steeds goed beoordeelbaar.`}</Inline></li>
        <li><Inline>{`Bij **uitgebreide atherosclerose** worden de beelden slecht beoordeelbaar.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hoe meer kalk, hoe lastiger het wordt om stenosen betrouwbaar te beoordelen. Dat is ook de reden dat een hoge calciumscore een beperking vormt voor CTA.`}</Inline></p>
    </div>
  )
}
