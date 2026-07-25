import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke bloedproducten zijn er?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste bewerkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`standaard;`}</Inline></li>
        <li><Inline>{`gewassen;`}</Inline></li>
        <li><Inline>{`bestraald;`}</Inline></li>
        <li><Inline>{`Parvo B19-veilig.`}</Inline></li>
      </ul>
      <PBody text={`Het standaard bloedproduct is in Nederland een **leucocyt gedepleteerd** bloedproduct. Daarbij zijn veel leucocyten verwijderd. Dat vermindert de kans op febriele transfusiereacties en verlaagt het risico op overdracht van CMV.`} />
      <p className="leading-relaxed"><Inline>{`Gewassen bloedproducten zijn twee keer gewassen. Daarbij wordt plasma vervangen door buffervloeistof. Dit wordt gebruikt na zeer ernstige allergische reacties of bij IgA-deficiëntie met anti-IgA en anafylaxie na transfusie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bestraalde bloedproducten zijn bedoeld om resterende lymfocyten te inactiveren. Dit voorkomt transfusie-geassocieerde graft-versus-hostziekte bij ernstig immuungecompromitteerde patiënten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Parvo B19-veilig bloedproduct betekent dat donorantistoffen tegen Parvo B19 zijn aangetoond. Dit is vooral relevant bij patiënten bij wie een Parvo B19-infectie ernstige gevolgen kan hebben, zoals ernstig immuungecompromitteerden, patiënten met een hemolytische anemie en foetussen.`}</Inline></p>
    </div>
  )
}
