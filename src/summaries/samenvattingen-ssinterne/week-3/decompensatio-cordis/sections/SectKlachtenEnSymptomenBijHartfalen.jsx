import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en symptomen bij hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen kan zich op veel verschillende manieren uiten. Niet iedere patiënt heeft dezelfde klachten, en sommige klachten komen ook bij andere aandoeningen voor. Dat maakt de herkenning soms lastig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Veelvoorkomende klachten en symptomen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`moeheid;`}</Inline></li>
        <li><Inline>{`kortademigheid;`}</Inline></li>
        <li><Inline>{`vochtretentie;`}</Inline></li>
        <li><Inline>{`misselijkheid of verminderde eetlust;`}</Inline></li>
        <li><Inline>{`tachycardie;`}</Inline></li>
        <li><Inline>{`derde harttoon;`}</Inline></li>
        <li><Inline>{`crepitaties in de longen;`}</Inline></li>
        <li><Inline>{`oedeem;`}</Inline></li>
        <li><Inline>{`een grote lever of ascites;`}</Inline></li>
        <li><Inline>{`bleekheid.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Kortademigheid en vochtretentie zijn klassieke verschijnselen. De klachten kunnen samen voorkomen, maar de verdeling verschilt per patiënt.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is hartfalen soms lastig te herkennen?
**Mini-antwoord:** omdat de klachten niet bij iedereen hetzelfde zijn en ook bij andere ziektebeelden kunnen passen.`} />
    </div>
  )
}
