import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Off-label en unlicensed`}</Inline></SubHeading>
      <PBody text={`**Off-label** betekent dat een geneesmiddel buiten de officiële registratie wordt gebruikt. Dat kan gaan om een andere indicatie, leeftijd, dosis, frequentie, toedienvorm of toedienroute dan waarvoor het geregistreerd is.`} />
      <PBody text={`**Unlicensed** betekent dat het geneesmiddel zelf niet als zodanig geregistreerd is, bijvoorbeeld omdat het in de apotheek is bereid of aangepast. Een voorbeeld is een tablet die tot drank wordt verwerkt.`} />
      <p className="leading-relaxed"><Inline>{`Bij kinderen worden veel geneesmiddelen off-label of unlicensed gebruikt. In het kinderziekenhuis gebeurt dat vaker dan in de eerste lijn. Als er geen standaard of protocol is, moet er overleg zijn tussen arts en apotheker. Het Kinderformularium kan als beroepsstandaard dienen. Ouders of het kind moeten bij voorkeur worden geïnformeerd over off-label gebruik.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Off-label, unlicensed en on-label`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["On-label", "Gebruik volgens registratie"], ["Off-label", "Buiten registratie, bijvoorbeeld andere leeftijd of indicatie"], ["Unlicensed", "Niet-geregistreerd of apotheekbereid/aangepast middel"]]} />
    </div>
  )
}
