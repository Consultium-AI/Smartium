import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnose van sarcopenie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose sarcopenie wordt gesteld met spierfunctietesten, zoals handknijpkracht en loopsnelheid, en soms aangevuld met meting van spiermassa, bijvoorbeeld met een DEXA-scan. Welke criteria precies worden gebruikt, hangt af van de definitie; de EWGSOP-criteria worden vaak aangehouden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij mevrouw De Vries worden handknijpkracht en loopsnelheid gemeten. De handknijpkracht is 15 kg en de loopsnelheid 0,76 m/s. Daarmee is er ook sprake van sarcopenie.`}</Inline></p>
    </div>
  )
}
