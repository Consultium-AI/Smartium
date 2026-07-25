import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Energiebehoefte en veroudering`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Met het ouder worden neemt de energie-inname af. Bij mannen daalt de energie-inname tussen 20 en 80 jaar ongeveer met een derde. De calorische behoefte bij ouderen wordt vooral bepaald door de mate van lichamelijke activiteit. Het basale metabolisme blijft bij ouderen vrijwel onveranderd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat betekent dat ouderen vaak minder eten, terwijl hun lichaam nog steeds voldoende energie nodig heeft voor functioneren en herstel.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is alleen een normale BMI niet genoeg om ondervoeding uit te sluiten?**
Omdat iemand ondanks een normale of zelfs hoge BMI toch veel spiermassa kan hebben verloren door onbedoeld gewichtsverlies.`} />
    </div>
  )
}
