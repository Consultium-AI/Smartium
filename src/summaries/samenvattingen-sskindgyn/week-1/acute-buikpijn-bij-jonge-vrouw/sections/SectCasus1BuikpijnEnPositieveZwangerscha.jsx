import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 1: buikpijn en positieve zwangerschapstest`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw met linker onderbuikpijn, een positieve zwangerschapstest en een leeg cavum uteri op echo heeft een zwangerschap op onbekende locatie, ook wel ZOL genoemd. Dat betekent dat je nog niet weet of de zwangerschap intra-uterien of extra-uterien zit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënte werden onder andere beta-HCG, hemoglobine en bloedgroep bepaald. De echo liet geen zwangerschap in de uterus zien en geen vrij vocht. Dan is vervolg met herhaalde HCG-bepaling belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`HCG en de interpretatie ervan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verandering van HCG na 2 dagen helpt om onderscheid te maken tussen een vitale intra-uteriene zwangerschap, een EUG en een miskraam of regressie van de zwangerschap.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Verandering van HCG na 2 dagen`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Verwachte HCG-verandering"], ["Vitale intra-uteriene zwangerschap", "Stijging >50%"], ["EUG", "Daling <20% of stijging <50%"], ["Miskraam / regressie", "Daling >20%"]]} />
      <p className="leading-relaxed"><Inline>{`Als het HCG daalt, past dat bij regressie van de zwangerschap of een miskraam. Als de zwangerschap nooit echoscopisch intra-uterien is gezien, blijft onduidelijk waar de zwangerschap precies zat. Daarom wordt dan vervolgd tot het HCG <5 is.`}</Inline></p>
    </div>
  )
}
