import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mogelijke behandelingen zijn:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`chirurgie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`radiotherapie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`systemische therapie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`combinaties daarvan`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`7. Medicamenteus oedeem door amlodipine`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw van 68 jaar met bilateraal onderbeenoedeem en recent gestart **amlodipine** is **medicamenteus oedeem** de meest waarschijnlijke diagnose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Amlodipine is een **calciumantagonist** en kan **pitting oedeem** geven. De timing is belangrijk: klachten ontstaan vaak na starten of ophogen van de dosis.`}</Inline></p>
    </div>
  )
}
