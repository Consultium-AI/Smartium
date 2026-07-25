import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren en bijzondere situaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij roken of een forse rookgeschiedenis moet je ook denken aan astma-COPD overlap syndroom, afgekort ASCOS.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij obesitas kan afvallen helpen om astma te verbeteren. Bij ernstig obesitas-gerelateerd astma kunnen andere ziekte-mechanismen een rol spelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij kinderen geldt een eigen benadering; astma bij kinderen wordt apart behandeld.`}</Inline></p>
    </div>
  )
}
