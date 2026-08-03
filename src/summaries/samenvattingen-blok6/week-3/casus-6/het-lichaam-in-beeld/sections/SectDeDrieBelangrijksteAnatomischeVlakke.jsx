import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De drie belangrijkste anatomische vlakken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De drie klassieke vlakken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Axiaal / transversaal**: verdeelt het lichaam in een **boven- en onderdeel**. Je kunt dit zien als een doorsnede alsof je van bovenaf naar het lichaam kijkt.`}</Inline></li>
        <li><Inline>{`**Coronaal / frontaal**: verdeelt het lichaam in een **voor- en achterdeel**. Dit is het vlak dat je ziet als je iemand van voren bekijkt.`}</Inline></li>
        <li><Inline>{`**Sagittaal**: verdeelt het lichaam in een **linker- en rechterdeel**. Dit is het vlak dat je ziet als je iemand van opzij bekijkt.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Anatomische vlakken`}</Inline></SubHeading>
      <DataTable rows={[["Vlak", "Verdeelt het lichaam in", "Denkbeeldige kijkrichting", "Veelgebruikt bij"], ["Axiaal / transversaal", "Boven en onder", "Van bovenaf", "CT, MRI van de hersenen"], ["Coronaal / frontaal", "Voor en achter", "Van voren", "X-thorax, CT thorax en abdomen"], ["Sagittaal", "Links en rechts", "Van opzij", "MRI hersenen, CT wervelkolom"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom zijn deze vlakken zo handig?
**Mini-antwoord:** Omdat je zo radiologische beelden systematisch kunt lezen en precies kunt aangeven waar iets zit.`} />
    </div>
  )
}
