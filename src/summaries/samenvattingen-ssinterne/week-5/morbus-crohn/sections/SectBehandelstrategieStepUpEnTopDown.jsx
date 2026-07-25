import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandelstrategie: step-up en top-down`}</Inline></SubHeading>
      <PBody text={`De behandeling van Crohn hangt af van de ernst en de uitgebreidheid van de ziekte. Bij een milde tot matige ziekte wordt vaak gekozen voor een **step-upstrategie**: beginnen met minder zware medicatie en pas opschalen als dat nodig is.`} />
      <PBody text={`Bij sommige patiënten met een ongunstig beloop kan ook een **top-downstrategie** worden gekozen. Dan start je juist vroeg met effectievere medicatie om ziekteprogressie en complicaties te remmen.`} />
      <p className="leading-relaxed"><Inline>{`Mesalazine of sulfasalazine spelen in Nederland geen rol in de richtlijnen voor Crohn.`}</Inline></p>
    </div>
  )
}
