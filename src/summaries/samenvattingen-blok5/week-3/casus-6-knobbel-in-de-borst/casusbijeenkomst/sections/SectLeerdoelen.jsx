import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="m-0">
        <Inline>{`Na deze casusbijeenkomst moet je:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2.5">
        <li>
          <Inline>{`zwelling van één of beide benen kunnen indelen in **diffuus** of **lokaal**;`}</Inline>
        </li>
        <li>
          <Inline>{`de belangrijkste oorzaken van beenzwelling kunnen koppelen aan de juiste etiologische groep;`}</Inline>
        </li>
        <li>
          <Inline>{`bij een patiënt met beenzwelling een logische **differentiaaldiagnose** kunnen opstellen op basis van leeftijd, eenzijdigheid, duur, pijn, roodheid, koorts en voorgeschiedenis;`}</Inline>
        </li>
        <li>
          <Inline>{`herkennen wanneer beenzwelling past bij **veneuze insufficiëntie/varices**, **hartfalen**, **trombose**, **erysipelas/cellulitis**, **lymfoedeem**, **medicamenteus oedeem**, **maligniteit** of **trauma**;`}</Inline>
        </li>
        <li>
          <Inline>{`weten welke diagnostiek passend is, zoals lichamelijk onderzoek, **duplex/echo**, **D-dimeer**, **ECG**, **NT-proBNP** en verwijzing;`}</Inline>
        </li>
        <li>
          <Inline>{`de eerste behandelstappen kennen bij de belangrijkste oorzaken van beenzwelling.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
