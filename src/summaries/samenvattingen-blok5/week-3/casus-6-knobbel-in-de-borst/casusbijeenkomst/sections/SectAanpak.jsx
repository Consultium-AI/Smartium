import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aanpak:`}</Inline></SubHeading>
      <PBody text={`**amlodipine staken of verlagen**`} />
      <p className="leading-relaxed"><Inline>{`kijken of de klachten verdwijnen; dat ondersteunt de werkdiagnose`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`eventueel overstappen op een andere groep antihypertensiva`}</Inline></p>
      <PBody text={`**ambulante compressietherapie** kan helpen bij het oedeem`} />
      <PBody text={`**diuretica** zijn hier niet de standaardoplossing; die zijn vooral geïndiceerd bij **hartfalen**`} />
    </div>
  )
}
