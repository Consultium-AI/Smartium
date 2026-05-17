import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Preventie: waarom behandelen we diabetes?`}</Inline></h3>
      <p><Inline>{`De behandeling van diabetes is gericht op het voorkomen van langetermijncomplicaties. Studies zoals de DCCT-studie bij type 1 diabetes en de UKPDS-studie bij type 2 diabetes laten zien dat verlaging van de bloedglucoseconcentratie leidt tot minder microvasculaire complicaties op lange termijn.`}</Inline></p>
      <p><Inline>{`Voor macrovasculaire complicaties is de relatie ingewikkelder. Daarbij spelen vooral andere risicofactoren voor hart- en vaatziekten een grote rol. Daarom is het belangrijk om niet alleen glucose, maar ook de andere risicofactoren zo goed mogelijk te behandelen.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leefstijl en voeding`}</Inline></h3>
      <p><Inline>{`Beweging volgens de beweegrichtlijn helpt. Een passend advies is dagelijks minimaal 30 minuten matig intensief bewegen, aangevuld met spierversterkende oefeningen. Matig intensief bewegen betekent dat hartslag en ademfrequentie omhoog gaan, bijvoorbeeld door stevig wandelen, fietsen of paardrijden.`}</Inline></p>
      <p><Inline>{`Voeding speelt ook een rol. Een gezond voedingspatroon volgens de schijf van vijf, met veel groenten, fruit, volkorenproducten en onverzadigde vetten, kan complicaties helpen voorkomen. Volkorenproducten zorgen voor complexere suikers die trager worden opgenomen, waardoor minder hoge glucosepieken ontstaan. Daarnaast helpen vitamines, waaronder antioxidanten zoals vitamine C en E, bij het neutraliseren van zuurstofradicalen. Ook dragen onverzadigde vetten en voedingsvezels bij aan verlaging van het niet-HDL-cholesterol.`}</Inline></p>
      <p><Inline>{`**Tabel 4. Preventie van langetermijncomplicaties**`}</Inline></p>
      <DataTable rows={[["Onderdeel", "Advies"], ["Bewegen", "Dagelijks minimaal 30 minuten matig intensief, aangevuld met spierversterkende oefeningen"], ["Voeding", "Schijf van vijf, veel groente, fruit, volkorenproducten en onverzadigde vetten"], ["Risicofactoren behandelen", "Ook bloeddruk, lipiden, roken en obesitas aanpakken"], ["Glucoseregulatie", "HbA1c gebruiken om behandeling af te stemmen"]]} />
    </div>
  )
}
