import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acuut ziek kind: sepsis en meningitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een kind met hoge koorts, snel uitbreidende purpura, kreunen, slecht reageren, tachycardie, tachypneu en een verlengde capillary refill heeft een ernstig ziektebeeld passend bij sepsis, mogelijk met meningitis. In zo’n situatie start je direct met APLS, geef je zuurstof en beoordeel je het kind snel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een ernstig ziek kind met sepsis start je snel antibiotica. Een lumbaalpunctie is op dat moment niet verstandig als het kind te ziek is. Die kan later alsnog worden verricht, maar dan wordt de liquoruitslag na starten van antibiotica minder betrouwbaar. De pleiocytose in liquor blijft wel bestaan; dat betekent een verhoogd aantal witte bloedcellen in de liquor. Neutrofiele granulocyten horen normaal niet in de liquor aanwezig te zijn bij iemand zonder meningitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor een kind ouder dan 1 maand met dit beeld wordt ceftriaxon gebruikt, in een dosering van 100 mg/kg/dag als meningitis niet uitgesloten kan worden en het om een ernstige sepsis gaat.`}</Inline></p>
      <SubHeading><Inline>{`Meest voorkomende bacteriële verwekkers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste bacteriële verwekkers van sepsis/meningitis op de kinderleeftijd zijn:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Belangrijke verwekkers van sepsis/meningitis"], ["*Neisseria meningitidis*", "Meningokok"], ["*Streptococcus pneumoniae*", "Pneumokok"], ["*Haemophilus influenzae*", "Hib"]]} />
      <p className="leading-relaxed"><Inline>{`Bij neonaten zijn juist groep B-streptokokken, *Escherichia coli* en *Listeria monocytogenes* typische verwekkers.`}</Inline></p>
    </div>
  )
}
