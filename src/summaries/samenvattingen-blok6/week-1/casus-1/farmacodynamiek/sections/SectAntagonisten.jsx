import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antagonisten`}</Inline></SubHeading>
      <PBody text={`Tot nu toe ging het vooral over agonisten: stoffen die een receptor activeren. Er zijn echter ook stoffen die een receptor blokkeren. Dat zijn **antagonisten**. Veel antagonisten worden ook als geneesmiddel gebruikt. Het is belangrijk om te begrijpen hoe ze werken en hoe je hun werking kunt kwantificeren.`} />
      <p className="leading-relaxed"><Inline>{`Een antagonist kan de respons op een agonist blokkeren door de receptor te bezetten. Dat kan op verschillende manieren gebeuren.`}</Inline></p>
      <PBody text={`**Tabel 3. Invloed van verschillende liganden op de receptor**`} />
      <DataTable rows={[["Ligand", "Effect op receptor/antwoord"], ["Agonist", "Activeert de receptor en geeft effect"], ["Competitieve antagonist", "Bezette dezelfde bindingsplaats en blokkeert agonist"], ["Allosterische activator", "Versterkt de respons via een andere bindingsplaats"], ["Allosterische inhibitor", "Verzwakt de respons via een andere bindingsplaats"]]} />
      <PBody text={`Bij **competitief antagonisme** bindt de antagonist aan dezelfde plaats als de agonist. Als de binding reversibel is, kan een hogere concentratie agonist de antagonist verdringen. Dan kan alsnog dezelfde respons worden bereikt, maar er is meer agonist nodig.`} />
      <p className="leading-relaxed"><Inline>{`Allosterische activatoren en inhibitoren beïnvloeden de respons via een andere plaats op de receptor.`}</Inline></p>
    </div>
  )
}
