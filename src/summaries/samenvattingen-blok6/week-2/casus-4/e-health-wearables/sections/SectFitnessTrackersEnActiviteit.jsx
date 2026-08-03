import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fitness-trackers en activiteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Uit de grootste meta-analyse die genoemd wordt, blijkt dat fitness-trackers de activiteit van gebruikers verhogen. Gemiddeld leidt dat tot ongeveer 1800 extra stappen per dag en ongeveer 40 minuten extra looptijd per dag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat is een belangrijk voorbeeld van hoe wearables gedrag kunnen beïnvloeden. Ze meten dus niet alleen, maar kunnen mensen ook stimuleren om actiever te worden.`}</Inline></p>
    </div>
  )
}
