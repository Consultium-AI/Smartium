import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe stel je de diagnose cirrose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose cirrose kan op verschillende manieren worden gesteld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leverbiopsie;`}</Inline></li>
        <li><Inline>{`fibroscan;`}</Inline></li>
        <li><Inline>{`echografisch beeld;`}</Inline></li>
        <li><Inline>{`aspect van de lever op CT;`}</Inline></li>
        <li><Inline>{`klinisch beeld.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De leverbiopsie geldt nog steeds als gouden standaard, maar wordt in de dagelijkse praktijk bijna niet meer gebruikt. Meestal zijn fibroscan in combinatie met echografie en het klinisch beeld voldoende.`}</Inline></p>
      <SubHeading><Inline>{`Fibroscan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een fibroscan meet de stijfheid van de lever in kPa. Hoe stijver de lever, hoe meer fibrose.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Fibroscan-uitslag`}</Inline></SubHeading>
      <DataTable rows={[["Stadium", "kPa", "Betekenis"], ["F0/F1", "2,5–7,4", "geen of milde fibrose"], ["F2", "7,5–9,4", "matige fibrose"], ["F3", "9,5–12,4", "ernstige fibrose"], ["F4", "12,5 en hoger", "cirrose"]]} />
      <p className="leading-relaxed"><Inline>{`Een waarde boven 12,5 kPa past dus bij ernstige fibrose of cirrose.`}</Inline></p>
    </div>
  )
}
