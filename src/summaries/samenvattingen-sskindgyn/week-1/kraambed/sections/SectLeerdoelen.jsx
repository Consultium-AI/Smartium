import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van dit onderwerp moet je verschijnselen kunnen herkennen die passen bij het normale kraambed. Ook moet je van een aantal veelvoorkomende problemen in het kraambed de oorzaak, klachten, diagnostiek, behandeling en prognose kunnen benoemen.`}</Inline></p>
    </div>
  )
}
