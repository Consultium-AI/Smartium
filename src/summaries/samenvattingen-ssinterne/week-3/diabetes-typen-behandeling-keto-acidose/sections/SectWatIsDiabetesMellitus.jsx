import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is diabetes mellitus?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes mellitus, ook wel suikerziekte genoemd, is een verzamelnaam voor aandoeningen waarbij de glucoseregulatie verstoord is. Het gevolg is hyperglykemie: een te hoge glucosewaarde in het bloed. De twee meest voorkomende vormen zijn diabetes type 1 en type 2.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Diabetes is een veelvoorkomende aandoening. In Nederland waren in 2015 ongeveer 1,1 miljoen mensen bekend met diabetes mellitus. Dat is waarschijnlijk een onderschatting, omdat vooral diabetes type 2 in het begin weinig of geen klachten geeft. Naar schatting is 25-50% van de mensen met diabetes nog niet gediagnosticeerd.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Diagnostische criteria voor diabetes mellitus`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Diabetes mellitus"], ["Nuchtere glucose", "≥ 7,0 mmol/L, tweemaal gemeten"], ["2 uur na OGTT (75 g glucose)", "≥ 11,1 mmol/L, tweemaal gemeten"], ["HbA1c", "≥ 48 mmol/mol, tweemaal gemeten"], ["Eenmalige glucosemeting bij klassieke klachten", "≥ 11,1 mmol/L is voldoende"]]} />
      <p className="leading-relaxed"><Inline>{`Zonder klachten kan de diagnose pas gesteld worden als een tweede bepaling ook afwijkend is. De huisartsenstandaard gebruikt vergelijkbare afkapwaarden, maar gebruikt geen OGTT voor het vaststellen van diabetes. De OGTT wordt nu vooral nog gebruikt bij zwangerschapsdiabetes.`}</Inline></p>
      <SubHeading><Inline>{`Klachten bij hyperglykemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij klachten passend bij hyperglykemie is één verhoogde glucosewaarde al voldoende voor de diagnose. De klassieke klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`polyurie: veel plassen door osmotische diurese`}</Inline></li>
        <li><Inline>{`polydipsie: veel dorst door vochtverlies`}</Inline></li>
        <li><Inline>{`gewichtsverlies: door vochtverlies en afbraak van vet en spierweefsel`}</Inline></li>
        <li><Inline>{`vermoeidheid: door onvoldoende insuline-effect`}</Inline></li>
        <li><Inline>{`wazig zien: door glucoseveranderingen in het oog`}</Inline></li>
        <li><Inline>{`slecht genezende wondjes`}</Inline></li>
        <li><Inline>{`terugkerende infecties, bijvoorbeeld Candida-infecties`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De klachten hangen af van het type diabetes, de hoogte van de glucose en hoe snel de aandoening ontstaat.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom geeft diabetes vaak dorst?
**Kort antwoord:** Door veel plassen verliest iemand vocht en elektrolyten, waardoor dorst ontstaat.`} />
    </div>
  )
}
