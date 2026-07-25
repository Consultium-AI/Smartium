import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vier soorten shock`}</Inline></SubHeading>
      <PBody text={`Shock wordt verdeeld in vier hoofdtypen: **cardiogeen, hypovolemisch, distributief en obstructief**. Het verschil zit vooral in de verhouding tussen het bloedvolume en de capaciteit van het vaatstelsel, en in de plaats waar het probleem ontstaat.`} />
      <SubHeading><Inline>{`Tabel 4. De vier typen shock`}</Inline></SubHeading>
      <DataTable rows={[["Type shock", "Kernprobleem", "Voorbeelden/oorzaken"], ["Cardiogeen", "Het hart faalt als pomp", "Groot myocardinfarct, ritmestoornissen, ernstig kleplijden"], ["Hypovolemisch", "Absoluut volumetekort", "Bloedverlies, plasmaverlies bij brandwonden, verlies van vocht en elektrolyten"], ["Distributief", "Relatief volumetekort door vaatverwijding", "Neurogene, anafylactische en septische shock"], ["Obstructief", "Belemmering in de circulatie", "Tamponade, grote longembolie, spanningspneumothorax"]]} />
      <SubHeading><Inline>{`Cardiogene shock`}</Inline></SubHeading>
      <PBody text={`Bij cardiogene shock is het bloedvolume normaal en de capaciteit van het vaatstelsel ook normaal, maar het hart kan niet genoeg cardiac output produceren. Het probleem zit dus in de **pomp**.`} />
      <SubHeading><Inline>{`Hypovolemische shock`}</Inline></SubHeading>
      <PBody text={`Bij hypovolemische shock is er een **absoluut volumetekort**. Er is minder bloed in een normaal vaatstelsel. Het probleem zit hier vooral in de **tank**.`} />
      <SubHeading><Inline>{`Distributieve shock`}</Inline></SubHeading>
      <PBody text={`Bij distributieve shock is het bloedvolume in principe normaal, maar de capaciteit van het vaatstelsel is toegenomen door **gegeneraliseerde vasodilatatie**. Daardoor ontstaat een relatief volumetekort. Ook hier kan het lijken alsof de circulatie tekortschiet, terwijl het probleem vooral in de vaatverwijding zit.`} />
      <SubHeading><Inline>{`Obstructieve shock`}</Inline></SubHeading>
      <PBody text={`Bij obstructieve shock zijn bloedvolume en vaatcapaciteit op zichzelf normaal, maar er is een **mechanische belemmering** in de circulatie. Vaak zit die obstructie dicht bij het hart, waardoor bloed niet goed kan instromen of wegstromen.`} />
    </div>
  )
}
