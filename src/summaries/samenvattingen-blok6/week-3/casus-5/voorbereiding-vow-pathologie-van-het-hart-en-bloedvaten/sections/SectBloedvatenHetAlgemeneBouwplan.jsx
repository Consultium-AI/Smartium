import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedvaten: het algemene bouwplan`}</Inline></SubHeading>
      <PBody text={`Bloedvaten vormen samen een flexibel en dynamisch transportsysteem. Ze zorgen voor het vervoer van onder andere voedingsstoffen, afvalstoffen, hormonen en antilichamen tussen het bloed en de weefsels. Het bloed stroomt vanuit het hart via de **arteriën** naar de organen en keert via de **venen** weer terug naar het hart. Tussen beide systemen liggen de **capillairen**, de haarvaatjes waar uitwisseling met de weefsels plaatsvindt.`} />
      <p className="leading-relaxed"><Inline>{`De opbouw van de vaatwand volgt in grote lijnen steeds hetzelfde patroon. Vooral in de grotere arteriën is dat bouwplan goed te herkennen. De wand bestaat klassiek uit drie lagen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Tunica intima**: de binnenste laag, direct tegen het bloed aan`}</Inline></li>
        <li><Inline>{`**Tunica media**: de middelste laag, meestal met gladde spiercellen`}</Inline></li>
        <li><Inline>{`**Tunica adventitia**: de buitenste bindweefsellaag`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De overgang tussen de verschillende typen bloedvaten is geleidelijk. Dat betekent dat je in de praktijk niet altijd een scherp grensvlak ziet, maar wel typische kenmerken die helpen bij het herkennen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Overzicht van de belangrijkste bloedvattypen`}</Inline></SubHeading>
      <DataTable rows={[["Type vat", "Belangrijkste bouwkenmerken", "Hoofdfunctie"], ["Elastische arteriën", "Veel elastische lamellen in de media", "Bloed vanuit het hart geleiden en door elastic recoil de stroom op gang houden"], ["Musculaire arteriën", "Dikke media met veel gladde spiercellen, duidelijke lamina elastica interna", "Bloed verdelen over organen en door vasoconstrictie/vasodilatatie de doorstroming regelen"], ["Kleine arteriën", "Dunner dan musculaire arteriën, nog steeds meerdere spierlagen", "Bloed verder geleiden naar arteriolen"], ["Arteriolen", "Slechts 1-3 lagen gladde spiercellen", "Weerstandsvaten; bepalen sterk de bloeddruk en de doorstroming naar capillairen"], ["Capillairen", "Alleen endotheel, geen echte media of adventitia", "Uitwisseling van stoffen met de weefsels"], ["Venulen", "Dunne wand, weinig spiercellen", "Afvoer van capillair bloed; plaats van leukocytenuittrede"], ["Kleine en middelgrote venen", "Dunnere media, relatief dikkere adventitia, soms kleppen", "Bloed terugvoeren naar grotere venen en naar het hart"], ["Grote venen", "Dikke adventitia, veel bindweefsel en longitudinale spierbundels", "Terugvoer van bloed naar het hart"]]} />
    </div>
  )
}
