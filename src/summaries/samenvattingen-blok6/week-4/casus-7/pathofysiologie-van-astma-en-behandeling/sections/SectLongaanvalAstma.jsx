import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longaanval astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een longaanval astma is een episode van toenemende dyspneu, hoesten of piepen met verminderde longfunctie. Dit kan optreden bij iemand met bekende astma, maar ook als eerste presentatie. Vaak wordt een longaanval uitgelokt door een luchtweginfectie, een allergische prikkel, een aspecifieke prikkel zoals rook of vervuilde lucht, of door verkeerd of onvoldoende medicatiegebruik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ernstige longaanval astma herken je aan één of meer van de volgende kenmerken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`dyspneu in rust, moeite met spreken in hele zinnen of niet plat kunnen liggen;`}</Inline></li>
        <li><Inline>{`hartfrequentie boven 100/min;`}</Inline></li>
        <li><Inline>{`zuurstofsaturatie onder 94%;`}</Inline></li>
        <li><Inline>{`verlengd piepend expirium;`}</Inline></li>
        <li><Inline>{`productieve hoest.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een ernstige aanval moet je de ernst goed inschatten om te bepalen of de patiënt naar huis kan of naar het ziekenhuis moet. Als iemand ABCDE-instabiel is, moet direct zuurstof worden gegeven, samen met inhalaties SABA/SAMA en 112 worden gebeld. Bij een ernstige aanval zonder ABCDE-instabiliteit, maar met onvoldoende herstel of eerdere ziekenhuisopnames, is verwijzing naar het ziekenhuis ook aangewezen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling van een longaanval bestaat uit drie onderdelen: kortwerkende luchtwegverwijders, orale corticosteroïden en tijdelijke verhoging van de onderhoudsinhalatiemedicatie. Prednisolon 40 mg per dag gedurende 5 dagen is gebruikelijk, eventueel langer tot 14 dagen op geleide van klachten.`}</Inline></p>
    </div>
  )
}
