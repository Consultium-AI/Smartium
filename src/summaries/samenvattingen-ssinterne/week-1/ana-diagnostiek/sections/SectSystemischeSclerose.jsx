import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systemische sclerose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Systemische sclerose kan zich ontwikkelen met huidafwijkingen, slikklachten, Raynaudfenomeen en teleangiëctasieën. Teleangiëctasieën zijn kleine verwijde bloedvaatjes aan huid of slijmvliezen. Ze passen bij vasculopathie, een kenmerk van systemische sclerose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het klassieke CREST-syndroom bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`calcinosis`}</Inline></li>
        <li><Inline>{`Raynaud`}</Inline></li>
        <li><Inline>{`esophagus dysmotility`}</Inline></li>
        <li><Inline>{`sclerodactyly`}</Inline></li>
        <li><Inline>{`teleangiectasia`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Tegenwoordig wordt meestal de term systemische sclerose gebruikt, waarbij de orgaanbetrokkenheid wordt beschreven.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Antistoffen bij systemische sclerose`}</Inline></SubHeading>
      <DataTable rows={[["Antistof", "Patroon", "Associatie"], ["Anti-centromeer (CENP-A/B)", "Centromeer", "Gelimiteerde cutane SSc, CREST, pulmonale hypertensie"], ["Alleen CENP-A", "Centromeer", "Gelimiteerde cutane SSc in ontwikkeling"], ["Anti-Scl-70", "Homogeen/nucleolair", "Diffuse SSc, longfibrose, pulmonale hypertensie, slechte prognose"], ["Anti-RNA polymerase III", "Gespikkeld fijn", "Diffuse SSc, renale crisis"], ["Anti-Ku", "Gespikkeld fijn", "Overlapsyndroom met polymyositis"], ["Anti-PM-Scl", "—", "Myositis-overlap"]]} />
      <p className="leading-relaxed"><Inline>{`Bij systemische sclerose hebben specifieke antistoffen ook prognostische waarde. Ze helpen inschatten welke orgaancomplicaties kunnen optreden. Zo kan op basis van het antistofprofiel een persoonlijk risicoprofiel worden opgesteld.`}</Inline></p>
    </div>
  )
}
