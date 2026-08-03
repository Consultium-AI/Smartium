import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom lichaamsbouw belangrijk is`}</Inline></SubHeading>
      <PBody text={`Lichaamsgewicht en lichaamssamenstelling hebben invloed op hoe een geneesmiddel zich gedraagt. Vooral het verschil tussen **watermassa** en **vetweefsel** is belangrijk. Sommige middelen lossen goed op in water, andere juist in vet. Daardoor komen ze niet overal even makkelijk terecht.`} />
      <p className="leading-relaxed"><Inline>{`Een geneesmiddel dat vooral in waterige delen van het lichaam blijft, zal zich anders verdelen dan een geneesmiddel dat gemakkelijk in vetweefsel terechtkomt. Daardoor kan ook de concentratie in het plasma anders verlopen.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom is vetweefsel zo belangrijk?
**Mini-antwoord:** Omdat lipofiele middelen daar makkelijker in kunnen verdwijnen en daardoor minder in de bloedbaan achterblijven.`} />
    </div>
  )
}
