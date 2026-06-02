import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`7. Medicamenteus oedeem door amlodipine`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een vrouw van 68 jaar met bilateraal onderbeenoedeem en recent gestart **amlodipine** is **medicamenteus oedeem** de meest waarschijnlijke diagnose.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Amlodipine is een **calciumantagonist** en kan **pitting oedeem** geven. De timing is belangrijk: klachten ontstaan vaak na starten of ophogen van de dosis.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Aanpak:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**amlodipine staken of verlagen**;`}</Inline></li>
        <li><Inline>{`kijken of de klachten verdwijnen; dat ondersteunt de werkdiagnose;`}</Inline></li>
        <li><Inline>{`eventueel overstappen op een andere groep antihypertensiva;`}</Inline></li>
        <li><Inline>{`**ambulante compressietherapie** kan helpen bij het oedeem;`}</Inline></li>
        <li>
          <Inline>{`**diuretica** zijn hier niet de standaardoplossing; die zijn vooral geïndiceerd bij **hartfalen**.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
