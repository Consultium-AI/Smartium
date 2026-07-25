import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij verdenking op leukemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste stap is vaak bloedonderzoek. Daarbij let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Hb`}</Inline></li>
        <li><Inline>{`leukocyten`}</Inline></li>
        <li><Inline>{`trombocyten`}</Inline></li>
        <li><Inline>{`differentiatie van de leukocyten`}</Inline></li>
        <li><Inline>{`bloeduitstrijkje`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er blasten of een verdacht bloedbeeld is, volgt meestal beenmergonderzoek. Dat is nodig om de diagnose verder te specificeren en om aanvullende onderzoeken te doen.`}</Inline></p>
      <SubHeading><Inline>{`Beenmergonderzoek: wat wordt onderzocht?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij beenmergonderzoek worden meerdere technieken gebruikt:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Belangrijke diagnostische technieken bij leukemie"], ["Morfologie", "Beoordeling van celvorm en rijpingsstadium onder de microscoop"], ["Immunofenotypering", "Bepaalt welke celmarkers aanwezig zijn"], ["Cytogenetica", "Onderzoek naar chromosoomafwijkingen"], ["Moleculaire diagnostiek", "Opsporen van fusiegenen, mutaties, deleties en inserties"]]} />
      <p className="leading-relaxed"><Inline>{`Morfologie laat zien of het om een acute of chronische leukemie gaat. Immunofenotypering helpt om myeloïde en lymfatische ziekte van elkaar te onderscheiden. Cytogenetica en moleculaire diagnostiek zijn belangrijk voor diagnose, prognose en behandelkeuze.`}</Inline></p>
    </div>
  )
}
