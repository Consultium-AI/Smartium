import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Na deze casusbijeenkomst moet je kunnen:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Psoriasis herkennen, de ernst en uitbreiding beschrijven en de belangrijkste behandelopties noemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Uitleggen hoe biologicals bij psoriasis werken en waarom ze steeds gerichter zijn geworden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Artritis psoriatica herkennen met behulp van klachten, nagelafwijkingen en de PEST-score.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een rood, gezwollen onderbeen klinisch beoordelen en onderscheid maken tussen cellulitis, hematoom en vasculitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Uitleggen wat purpura zijn, wat palpabele purpura betekenen en waarom lokalisatie belangrijk is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`IgA-vasculitis herkennen, de typische klachten noemen en weten welke follow-up nodig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hemofilie A herkennen op basis van bloedingsklachten en laboratoriumonderzoek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het verschil begrijpen tussen hemofilie A en von Willebrandziekte type 2N.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De veranderde huidbarrière bij eczeem begrijpen en weten waarom smeren zo belangrijk is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Atopisch eczeem, eczeema herpeticum en contactallergie in samenhang kunnen bespreken.`}</Inline></p>
    </div>
  )
}
