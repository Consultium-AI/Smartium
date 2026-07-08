import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het ABCDEF-principe bij de zwangere`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij acute obstetrische problemen wordt gewerkt volgens een gestructureerde benadering. Eerst zoek je de levensbedreigende problemen op en behandel je die direct. Daarna beoordeel je de foetus en pas vervolgens doe je een uitgebreider onderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Opbouw van de acute opvang`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Inhoud"], ["Primary survey", "Levensbedreigende problemen herkennen"], ["Reanimatie", "Gevonden problemen direct behandelen"], ["Foetale beoordeling", "Foetale nood opsporen en handelen"], ["Secondary survey", "Kop-teenonderzoek en verdere planning"], ["Definitieve zorg", "Specifieke behandeling"]]} />
      <PBody text={`Bij de zwangere zijn er enkele extra aandachtspunten. Vanaf ongeveer **20 weken** kan de uterus op de **vena cava inferior** en de **aorta** drukken. Daardoor daalt de veneuze terugvloed, vermindert de cardiac output en verslechtert ook de placentaperfusie. Daarom is **left lateral tilt** of **manual uterine displacement** belangrijk. Door de vrouw ongeveer **15 graden naar links te kantelen** of de uterus handmatig naar links te verplaatsen, verbeter je de circulatie van moeder en foetus.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is links kantelen zo belangrijk?**
Omdat je daarmee de druk van de zwangere uterus op de grote vaten vermindert, waardoor de doorbloeding van moeder en placenta verbetert.`} />
    </div>
  )
}
