import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese: waar vraag je naar?`}</Inline></SubHeading>
      <PBody text={`Bij een zwangere met veel braken wil je eerst de oorzaak beter inschatten. Belangrijke vragen zijn of er sprake is van een **eenling of meerlingzwangerschap**, of de zwangerschap **gewenst** is, of er nog andere klachten zijn zoals **vaginaal bloedverlies**, en welke maatregelen of medicatie al zijn geprobeerd.`} />
      <PBody text={`Sommige factoren maken hyperemesis waarschijnlijker. Het komt vaker voor bij vrouwen met een **migratieachtergrond**. Bij een multipara vraag je of het eerder ook is voorgekomen, want er is een verhoogde kans op herhaling. Ook een **hoog b-hCG** speelt een rol. Dat zie je bijvoorbeeld bij een **meerlingzwangerschap** of bij een **mola-zwangerschap**. Bij meerlingen zijn een positieve familieanamnese en geassisteerde voortplantingstechnieken zoals IVF of ovariële stimulatie risicofactoren.`} />
    </div>
  )
}
