import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hartfalen definiëren als een klinisch syndroom;`}</Inline></li>
        <li><Inline>{`de pathofysiologische mechanismen van hartfalen uitleggen, inclusief systolische en diastolische dysfunctie;`}</Inline></li>
        <li><Inline>{`het verschil beschrijven tussen HFrEF, HFmrEF en HFpEF;`}</Inline></li>
        <li><Inline>{`de belangrijkste compensatiemechanismen bij hartfalen uitleggen;`}</Inline></li>
        <li><Inline>{`forward failure en backward failure van elkaar onderscheiden;`}</Inline></li>
        <li><Inline>{`de klinische verschijnselen van hartfalen koppelen aan de onderliggende pathofysiologie.`}</Inline></li>
      </ul>
    </div>
  )
}
