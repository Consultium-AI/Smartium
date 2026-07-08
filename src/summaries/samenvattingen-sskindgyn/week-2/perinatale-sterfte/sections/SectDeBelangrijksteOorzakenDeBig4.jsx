import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De belangrijkste oorzaken: de “big 4”`}</Inline></SubHeading>
      <PBody text={`Een groot deel van de perinatale sterfte wordt bepaald door vier hoofdgroepen van oorzaken, ook wel de **“big 4”** genoemd. Samen verklaren zij ongeveer 85% van de perinatale sterfte.`} />
      <SubHeading><Inline>{`Tabel 2. De belangrijkste oorzaken van perinatale sterfte`}</Inline></SubHeading>
      <DataTable rows={[["Oorzaak", "Aandeel"], ["Vroeggeboorte < 32 weken", "58%"], ["Ernstige aangeboren afwijkingen", "16%"], ["Placenta-afwijkingen en laag geboortegewicht", "9%"], ["Zuurstoftekort tijdens de geboorte (perinatale asfyxie)", "6%"]]} />
      <SubHeading><Inline>{`Vroeggeboorte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vroeggeboorte is veruit de belangrijkste oorzaak. In Nederland worden jaarlijks ongeveer 13.000 kinderen te vroeg geboren, tussen 24 en 37 weken zwangerschap. Ongeveer 5% daarvan wordt zelfs vóór 28 weken geboren. Vroeggeboorte is verantwoordelijk voor ongeveer 75% van de sterfte onder kinderen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De perinatale sterfte hangt sterk samen met de zwangerschapsduur. Hoe vroeger de geboorte, hoe hoger het risico:`}</Inline></p>
      <DataTable rows={[["Zwangerschapsduur", "Perinatale sterfte"], ["À terme (≥ 37 weken)", "2,7‰"], ["32,0 t/m 36,6 weken", "21,2‰"], ["24,0 t/m 31,6 weken", "257‰"]]} />
      <p className="leading-relaxed"><Inline>{`Prematuriteit kan niet alleen leiden tot sterfte, maar ook tot chronische ziekte en handicaps op langere termijn. Preventie van vroeggeboorte en verbetering van neonatale zorg zijn daarom heel belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Aangeboren afwijkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ongeveer 1 op de 20 kinderen wordt geboren met een aangeboren afwijking. Een deel van deze kinderen overlijdt tijdens de zwangerschap of kort na de geboorte. Aangeboren afwijkingen kunnen ook blijvende handicaps geven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door de invoering van de eerste trimester screening en de 20-wekenecho, samen met betere prenatale diagnostiek, worden veel afwijkingen al tijdens de zwangerschap ontdekt. Sommige afwijkingen kunnen zelfs intra-uterien worden behandeld, bijvoorbeeld bloedarmoede bij de foetus of het tweelingtransfusiesyndroom.`}</Inline></p>
    </div>
  )
}
