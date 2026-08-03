import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toevallige ontdekking`}</Inline></SubHeading>
      <PBody text={`Een groot deel van de patiënten wordt ontdekt doordat er een **thoraxfoto of CT-scan** is gemaakt om een andere reden. Bij deze groep zijn er vaak radiologische afwijkingen zonder duidelijke klachten.`} />
    </div>
  )
}
