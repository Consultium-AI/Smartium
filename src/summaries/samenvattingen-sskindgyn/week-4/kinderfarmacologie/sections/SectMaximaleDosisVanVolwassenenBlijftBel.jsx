import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Maximale dosis van volwassenen blijft belangrijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij kinderen wordt vaak gerekend met mg/kg. Toch mag de berekende dosis niet zomaar boven de maximale volwassendosis uitkomen. Soms moet je vanaf een bepaald gewicht de volwassen dosis aanhouden. Dat verschilt per geneesmiddel.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Voorbeelden van veelgemaakte fouten`}</Inline></SubHeading>
      <DataTable rows={[["Fouttype", "Wat gaat mis?", "Gevolg"], ["Decimale fout", "125 mg in plaats van 125 microgram", "Dosis veel te hoog"], ["Keer- en dagdosis verwisseld", "2x per dag een dosis die eigenlijk de totale dagdosis is", "Overdosering"], ["Kind uit dosering gegroeid", "Dosis blijft gelijk terwijl kind groeit", "Onderbehandeling"], ["Maximale dosis overschreden", "mg/kg-berekening komt boven volwassen maximum uit", "Te hoge dosis"], ["Verkeerde sterkte", "Verkeerde concentratie of preparaat gekozen", "Over- of onderdosering"]]} />
    </div>
  )
}
