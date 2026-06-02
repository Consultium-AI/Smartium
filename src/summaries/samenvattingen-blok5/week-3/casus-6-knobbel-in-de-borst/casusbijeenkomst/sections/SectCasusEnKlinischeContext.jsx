import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Deze bijeenkomst draait om de klacht **knobbel of zwelling in het been**, maar de kern is breder: je leert klinisch redeneren bij **zwelling van de benen**. Daarbij is het belangrijk om eerst goed te bepalen of de zwelling **diffuus** is of **lokaal**.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Een **diffuse zwelling** betekent dat twee of meer anatomische delen van het been zijn aangedaan, bijvoorbeeld lies, bovenbeen, onderbeen en voet. Een lokale zwelling zit meer op één plek, zoals een kuit, enkel of een duidelijk afgrensbare plek op het been.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De belangrijkste ziektebeelden die in deze bijeenkomst steeds terugkomen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**veneuze insufficiëntie / varices**`}</Inline></li>
        <li><Inline>{`**trombose**`}</Inline></li>
        <li><Inline>{`**erysipelas / cellulitis**`}</Inline></li>
        <li><Inline>{`**lymfoedeem**`}</Inline></li>
        <li><Inline>{`**hartfalen**`}</Inline></li>
        <li><Inline>{`**medicamenteus oedeem**, vooral door amlodipine`}</Inline></li>
        <li><Inline>{`**maligniteit met veneuze of lymfatische afvloedbelemmering**`}</Inline></li>
        <li><Inline>{`**trauma / hematoom**`}</Inline></li>
        <li><Inline>{`in enkele gevallen **compartimentsyndroom**`}</Inline></li>
      </ul>
    </div>
  )
}
