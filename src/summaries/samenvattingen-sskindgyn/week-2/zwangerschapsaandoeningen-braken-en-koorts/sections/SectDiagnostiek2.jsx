import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <PBody text={`Bij verdenking op pre-eclampsie of HELLP wordt bloedonderzoek gedaan naar **Hb**, **hematocriet**, **trombocyten**, **leverfunctie**, **nierfunctie** en urineonderzoek. Een verhoogde LDH past bij hemolyse, een verhoogd ALAT bij leverbetrokkenheid en een verlaagd trombocytenaantal bij HELLP.`} />
      <PBody text={`Bij een patiënte met hypertensie, proteïnurie, verhoogde LDH, verhoogd ALAT en trombocytopenie past een **beginnend HELLP-syndroom**. Ook als bloeddruk of proteïnurie nog niet duidelijk afwijkend zijn, kunnen de klachten al wijzen op HELLP; dan moet je dus alsnog snel onderzoek doen.`} />
    </div>
  )
}
