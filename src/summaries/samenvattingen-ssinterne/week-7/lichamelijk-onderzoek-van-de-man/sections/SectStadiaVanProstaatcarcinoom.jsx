import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stadia van prostaatcarcinoom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De stadia T1 tot en met T4 beschrijven hoe ver de tumor zich heeft uitgebreid.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**T1**: de tumor zit alleen in het prostaatweefsel en verandert het kapsel niet. Dit stadium is niet te voelen bij rectaal onderzoek en wordt alleen gevonden met een prostaatbiopsie.`}</Inline></li>
        <li><Inline>{`**T2**: de tumor zit nog binnen de prostaat, maar vervormt het kapsel wel. Daardoor kan hij wel voelbaar zijn bij rectaal onderzoek.`}</Inline></li>
        <li><Inline>{`**T3**: de tumor groeit door buiten het kapsel of in de vesicula seminalis.`}</Inline></li>
        <li><Inline>{`**T4**: de tumor groeit verder buiten de prostaat en is meestal vastgegroeid aan de spieren van de bekkenbodem.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Globaal overzicht van prostaatcarcinoomstadia`}</Inline></SubHeading>
      <DataTable rows={[["Stadium", "Uitbreiding", "Klinische betekenis"], ["T1", "Alleen in prostaatweefsel, geen kapselverandering", "Niet voelbaar bij rectaal onderzoek"], ["T2", "Nog binnen prostaat, wel kapselvervorming", "Wel voelbaar bij rectaal onderzoek"], ["T3", "Groei buiten kapsel of in vesicula seminalis", "Verder uitgebreid"], ["T4", "Groei buiten prostaat, vaak vast aan bekkenbodem", "Niet curabel"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een stadium T4 prostaatcarcinoom is genezing niet meer mogelijk. De tumor is dan doorgegroeid naar de omgeving en vaak ook uitgezaaid naar lymfeklieren en soms botten. Een prostaatverwijdering heeft dan geen voordeel, omdat de patiënt er niet door geneest maar wel incontinent en impotent kan worden. Soms wordt wel palliatieve bestraling gegeven bij lokale pijn door doorgroei in het bekken.`}</Inline></p>
    </div>
  )
}
