import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer denk je aan transfusie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij bloedverlies kan de patiënt te weinig zuurstoftransport hebben door een laag hemoglobinegehalte. Dan kunnen erytrocytenconcentraten nodig zijn. Ook kan verlies van plasma leiden tot tekort aan stollingsfactoren, en verlies of verbruik van trombocyten kan een trombocytentransfusie nodig maken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij massaal bloedverlies is transfusie duidelijk geïndiceerd. De behandeling moet dan snel en doelgericht gebeuren, omdat anders een gevaarlijke situatie kan ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Massaal bloedverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Massaal bloedverlies kan op verschillende manieren worden gedefinieerd:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Definities van massaal bloedverlies"], [">10 eenheden bloed in 24 uur", "zeer grote transfusiebehoefte"], [">1 circulerend bloedvolume in 24 uur", "volledig bloedvolumeverlies"], [">50% van het circulerend bloedvolume in 3 uur", "zeer snel en ernstig bloedverlies"], [">150 ml/min bloedverlies", "hoog tempo van bloeding"]]} />
      <PBody text={`Bij ernstig trauma is niet alleen het bloedverlies zelf belangrijk, maar ook het voorkomen van de zogenoemde **Lethal Triade**. Die bestaat uit:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`onderkoeling;`}</Inline></li>
        <li><Inline>{`acidose;`}</Inline></li>
        <li><Inline>{`coagulopathie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Coagulopathie betekent dat de stolling verstoord raakt. Transfusiebeleid moet daarom niet alleen gericht zijn op aanvullen van bloed, maar ook op het doorbreken van deze vicieuze cirkel.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is de Lethal Triade zo gevaarlijk?
**Mini-antwoord:** Omdat onderkoeling, verzuring en stollingsstoornissen elkaar versterken en zo de kans op overlijden vergroten.`} />
    </div>
  )
}
