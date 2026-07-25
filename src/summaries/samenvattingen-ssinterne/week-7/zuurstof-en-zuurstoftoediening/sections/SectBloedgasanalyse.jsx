import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedgasanalyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Met een bloedgas kun je arterieel, veneus of capillair bloed onderzoeken. Een bloedgas geeft informatie over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`partiële gasdrukken, zoals pCO2 en pO2;`}</Inline></li>
        <li><Inline>{`zuur-base status, zoals pH en bicarbonaat;`}</Inline></li>
        <li><Inline>{`Hb-vormen, zoals CO-Hb en met-Hb;`}</Inline></li>
        <li><Inline>{`lactaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De normale arteriële waarden zijn:`}</Inline></p>
      <DataTable rows={[["Parameter", "Normaal"], ["pH", "7,35 – 7,45"], ["PaO2", "75 – 100 mmHg (10,0 – 13,3 kPa)"], ["PaCO2", "35 – 48 mmHg (4,7 – 6,4 kPa)"], ["Bicarbonaat", "22 – 29 mmol/l"]]} />
    </div>
  )
}
