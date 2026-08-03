import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`EDPVR`}</Inline></SubHeading>
      <PBody text={`De **end-diastolic pressure-volume relation** beschrijft de passieve vullingseigenschappen van de ventrikel. Die weerspiegelt de compliantie of stijfheid van de ventrikel.`} />
      <p className="leading-relaxed"><Inline>{`Een stijvere ventrikel heeft een steilere EDPVR. Een hogere contractiliteit geeft een steilere ESPVR.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
