import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        <Inline>{`Na deze casusbijeenkomst moet je kunnen:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2.5">
        <li>
          <Inline>{`Psoriasis herkennen, de ernst en uitbreiding beschrijven en de belangrijkste behandelopties noemen.`}</Inline>
        </li>
        <li>
          <Inline>{`Uitleggen hoe biologicals bij psoriasis werken en waarom ze steeds gerichter zijn geworden.`}</Inline>
        </li>
        <li>
          <Inline>{`Artritis psoriatica herkennen met behulp van klachten, nagelafwijkingen en de PEST-score.`}</Inline>
        </li>
        <li>
          <Inline>{`Een rood, gezwollen onderbeen klinisch beoordelen en onderscheid maken tussen cellulitis, hematoom en vasculitis.`}</Inline>
        </li>
        <li>
          <Inline>{`Uitleggen wat purpura zijn, wat palpabele purpura betekenen en waarom lokalisatie belangrijk is.`}</Inline>
        </li>
        <li>
          <Inline>{`IgA-vasculitis herkennen, de typische klachten noemen en weten welke follow-up nodig is.`}</Inline>
        </li>
        <li>
          <Inline>{`Hemofilie A herkennen op basis van bloedingsklachten en laboratoriumonderzoek.`}</Inline>
        </li>
        <li>
          <Inline>{`Het verschil begrijpen tussen hemofilie A en von Willebrandziekte type 2N.`}</Inline>
        </li>
        <li>
          <Inline>{`De veranderde huidbarrière bij eczeem begrijpen en weten waarom smeren zo belangrijk is.`}</Inline>
        </li>
        <li>
          <Inline>{`Atopisch eczeem, eczeema herpeticum en contactallergie in samenhang kunnen bespreken.`}</Inline>
        </li>
      </ol>
    </div>
  )
}
