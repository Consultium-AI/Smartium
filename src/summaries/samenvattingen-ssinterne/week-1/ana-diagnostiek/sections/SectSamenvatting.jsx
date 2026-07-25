import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ANA zijn antinucleaire autoantistoffen die vooral van belang zijn bij ANA-geassocieerde systeemziekten zoals SLE, Sjögren, systemische sclerose en MCTD. De test is het meest waardevol als de klinische verdenking al gericht is. Indirecte immunofluorescentie op HEp-2-cellen is de gouden standaard. Het patroon van ANA kan helpen bij het herkennen van een specifieke ziekte. ANA ondersteunt de diagnose, maar bewijst die niet. Ook de hoogte van de titer en de pretestkans zijn belangrijk voor de interpretatie. Specifieke antistoffen hebben daarnaast prognostische en therapeutische betekenis, vooral bij systemische sclerose.`}</Inline></p>
    </div>
  )
}
