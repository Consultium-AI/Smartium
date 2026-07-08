import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doorlopen van deze stof kun je verschijnselen passend bij het normale kraambed herkennen en benoemen, en kun je de etiologie, symptomen, diagnostiek, behandeling en prognose van enkele veelvoorkomende pathologie van het kraambed benoemen. In deze module ligt de nadruk vooral op koorts bij kinderen, het rijksvaccinatieprogramma, empirische antibiotische behandeling en recidiverende luchtweginfecties.`}</Inline></p>
    </div>
  )
}
