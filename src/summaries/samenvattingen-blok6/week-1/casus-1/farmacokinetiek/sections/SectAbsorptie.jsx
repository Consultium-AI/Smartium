import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Absorptie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Absorptie is de eerste stap van de reis van een geneesmiddel. Een tablet komt bijvoorbeeld in de maag terecht en valt daar uit elkaar. De werkzame stof lost op in het maagsap en gaat daarna verder naar de darmen, waar opname in de bloedbaan plaatsvindt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk punt is dat een farmacon alleen kan worden opgenomen als het in oplossing is. Pas dan kan het door de darmwand heen naar het bloed.`}</Inline></p>
      <SubHeading><Inline>{`Biologische beschikbaarheid`}</Inline></SubHeading>
      <PBody text={`De **biologische beschikbaarheid** wordt aangeduid met **F**. Dit zegt iets over de mate waarin een geneesmiddel na toediening daadwerkelijk in de bloedbaan terechtkomt.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij **intraveneuze toediening** is de biologische beschikbaarheid altijd **100%**, omdat de volledige dosis direct in de bloedbaan komt.`}</Inline></li>
        <li><Inline>{`Bij **orale toediening** kan de biologische beschikbaarheid lager zijn, onder andere door het **first-pass effect**.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** waarom is de biologische beschikbaarheid van een intraveneus middel altijd 100%?
**Mini-antwoord:** omdat het middel direct in de bloedbaan wordt toegediend en dus niet eerst nog opgenomen hoeft te worden.`} />
    </div>
  )
}
