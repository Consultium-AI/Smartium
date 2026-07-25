import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek voor stadiëring en prognose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de diagnose is verdere diagnostiek nodig om de uitgebreidheid van de ziekte te bepalen en om de prognose in te schatten. Daarbij spelen vooral PET-scan, beenmergonderzoek en soms FISH een rol.`}</Inline></p>
    </div>
  )
}
