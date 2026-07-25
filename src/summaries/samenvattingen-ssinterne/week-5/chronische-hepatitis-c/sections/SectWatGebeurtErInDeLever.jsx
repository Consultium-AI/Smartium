import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat gebeurt er in de lever?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij chronische hepatitis C blijft het virus aanwezig in het lichaam. Niet elke chronische infectie leidt meteen tot duidelijke leverschade, maar op de lange termijn kan het virus wel leiden tot ontsteking en beschadiging van de lever. Uiteindelijk kan dit uitmonden in levercirrose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Levercirrose betekent dat de lever door langdurige schade steeds meer littekenweefsel vormt. Daardoor raakt de normale bouw en functie van de lever verstoord. Dit is belangrijk, omdat cirrose de basis vormt voor ernstige complicaties, zoals gedecompenseerde leverziekte en hepatocellulair carcinoom.`}</Inline></p>
    </div>
  )
}
