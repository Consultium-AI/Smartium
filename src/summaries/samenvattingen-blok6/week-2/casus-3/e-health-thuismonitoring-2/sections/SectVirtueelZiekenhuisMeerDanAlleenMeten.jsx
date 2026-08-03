import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Virtueel ziekenhuis: meer dan alleen meten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een virtueel ziekenhuis heeft een breder doel dan alleen op afstand meten. Het is bedoeld om betere zorg op afstand te verlenen, waarbij lokale zorg niet wordt vervangen maar aangevuld. Patiënten hoeven niet per se naar een gespecialiseerd ziekenhuis te worden verplaatst. Gespecialiseerde zorg kan juist in een lokaal ziekenhuis worden aangeboden, ook in gebieden waar niet alle kennis of voorzieningen aanwezig zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een virtueel ziekenhuis biedt meer functionaliteiten dan alleen monitoren op afstand:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Functionaliteiten van een virtueel ziekenhuis`}</Inline></SubHeading>
      <DataTable rows={[["Monitoren op afstand", "Virtueel ziekenhuis"], ["Waardes worden doorgegeven", "24-uurs monitoring"], ["", "Review van complexe casus"], ["", "Diagnose op afstand"], ["", "Patiënt wordt lokaal opgenomen, gegevens worden gedeeld"], ["", "Consulting tussen artsen op afstand"]]} />
      <p className="leading-relaxed"><Inline>{`Het virtuele ziekenhuis is dus een soort uitgebreid digitaal zorgnetwerk. Het gaat niet alleen om meten, maar ook om overleg, beoordeling en diagnostiek op afstand.`}</Inline></p>
    </div>
  )
}
