import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Patiëntervaringen met thuismonitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meerderheid van de patiënten is positief over thuismonitoring. In het onderzoek van de Patiëntenfederatie was de onderzochte groep redelijk representatief, maar middelbaar en hoogopgeleiden waren oververtegenwoordigd. Van de patiënten beoordeelde 87% de thuismonitoring positief of zeer positief. 66% ging minder naar de zorgverlener voor controle door thuismonitoring, en 10% had liever een fysieke controle dan thuismonitoring.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat past bij het algemene beeld: patiënten ervaren vaak meer rust, veiligheid en gemak.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Belangrijkste patiëntervaringen`}</Inline></SubHeading>
      <DataTable rows={[["Voordelen", "Nadelen"], ["Het scheelt tijd", "Minder of geen persoonlijk contact"], ["Meer eigen regie", "Problemen met apparatuur of verbinding"], ["Direct contact mogelijk bij twijfel", "Dagelijks ermee bezig zijn kost tijd en moeite"], ["Gemakkelijk en eenvoudig", "Vereist digitale vaardigheden"]]} />
      <PBody text={`Aandachtsvraag: waarom vinden veel patiënten thuismonitoring prettig?
Mini-antwoord: omdat het tijd bespaart, rust geeft en meer controle over de eigen situatie kan geven.`} />
      <p className="leading-relaxed"><Inline>{`De belangrijkste nadelen zijn minder persoonlijk contact, technische problemen, extra gedoe en de noodzaak van digitale vaardigheden. Dat zijn dus vooral praktische en relationele nadelen.`}</Inline></p>
    </div>
  )
}
