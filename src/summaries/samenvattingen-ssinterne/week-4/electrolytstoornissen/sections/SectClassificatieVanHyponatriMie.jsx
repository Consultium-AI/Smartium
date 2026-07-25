import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Classificatie van hyponatriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyponatriëmie kan op verschillende manieren worden ingedeeld. Elke indeling heeft een eigen nut.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke classificaties van hyponatriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Classificatie", "Mogelijkheden", "Waarom belangrijk?"], ["Ernst", "mild, matig, ernstig", "geeft een indruk van de mate van afwijking"], ["Tijdsbeloop", "acuut vs. chronisch", "klinisch het meest relevant voor gevaar en behandeling"], ["Klachten", "symptomatisch vs. asymptomatisch", "helpt bij de urgentie van behandeling"], ["Volume-status", "hypervolemisch, euvolemisch, hypovolemisch", "helpt bij de oorzaak en behandeling"], ["Osmolariteit", "hypertoon, isotoon, hypotoon", "bepaalt of het echt om “echte” hyponatriëmie gaat"]]} />
      <PBody text={`Mild is een natrium < 136 mmol/l, matig < 130 mmol/l en ernstig < 125 mmol/l. Toch zegt alleen de absolute natriumwaarde weinig over het gevaar voor de patiënt. De indeling in **acuut versus chronisch** is daarom het meest klinisch relevant. Bij acute hyponatriëmie kunnen ernstige neurologische verschijnselen optreden, zoals hersenoedeem en coma.`} />
      <PBody text={`**Aandachtsvraag:** waarom is acuut versus chronisch zo belangrijk?
**Mini-antwoord:** omdat de hersenen zich bij chronische hyponatriëmie aanpassen, waardoor snelle correctie gevaarlijk kan zijn.`} />
    </div>
  )
}
