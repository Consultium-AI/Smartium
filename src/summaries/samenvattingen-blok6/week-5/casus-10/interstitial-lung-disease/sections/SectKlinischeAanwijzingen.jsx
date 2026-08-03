import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische aanwijzingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Extrapulmonale verschijnselen kunnen helpen om de onderliggende connective tissue disease te herkennen. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstig beschadigde handen bij reumatoïde artritis`}</Inline></li>
        <li><Inline>{`Raynaudfenomeen bij systemische sclerose`}</Inline></li>
        <li><Inline>{`vlindervormig erytheem bij lupus`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 6. Voorbeelden van connective tissue diseases met ILD`}</Inline></SubHeading>
      <DataTable rows={[["Ziekte", "Klinische kenmerken", "Auto-antistoffen", "Typische patronen"], ["Systemische sclerose", "Raynaud, huidverdikking, sclerodactylie, ulcera, calcinosis, telangiectasie, microstomie, xerostomie, slokdarmdilatatie", "Anti-Scl-70, anti-Th/To, anti-RNA polymerase III", "NSIP, UIP"], ["Reumatoïde artritis", "Inflammatoire artritis, ochtendstijfheid", "Reumafactor, anti-CCP", "UIP, NSIP, OP"], ["Idiopathische inflammatoire myositis", "Gottron’s sign, mechanic hands, shawl sign, spierzwakte", "Anti-Jo-1, PL-7, PL-12, anti-MDA5", "NSIP, OP, DAD, UIP"], ["Sjögren", "Oog- of monddroogte, speekselklierzwelling, inflammatoire artritis", "Anti-Ro", "NSIP, LIP, OP, UIP"]]} />
    </div>
  )
}
