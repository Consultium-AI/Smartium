import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Ultrabewerkt voedsel en de NOVA-classificatie`}</Inline></h3>
      <p><Inline>{`De stof besteedt veel aandacht aan **ultrabewerkt voedsel**. Daarbij wordt de NOVA-classificatie gebruikt, die voedingsmiddelen indeelt op basis van de mate van bewerking.`}</Inline></p>
      <p><Inline>{`Tabel 2. De NOVA-classificatie in grote lijnen`}</Inline></p>
      <DataTable rows={[["Groep", "Omschrijving"], ["1. Onbewerkt of minimaal bewerkt", "Natuurlijke producten die weinig of geen bewerking hebben ondergaan"], ["2. Bewerkte culinaire ingrediënten", "Bijvoorbeeld zout, suiker, olie en boter"], ["3. Bewerkte voedingsmiddelen", "Producten die vooral bestaan uit groep 1 plus groep 2, bijvoorbeeld ingeblikte of bewerkte basisproducten"], ["4. Ultrabewerkte voedingsmiddelen", "Fabrieksproducten met meerdere bewerkingsstappen en vaak veel toevoegingen"]]} />
      <p><Inline>{`In de stof wordt benadrukt dat het begrip **ultrabewerkt** vooral gaat over de bewerkingsgraad, niet alleen over of iets “gezond” lijkt. Binnen deze indeling worden bijvoorbeeld supermarkt-volkorenbrood en volkoren cornflakes als ultrabewerkt gezien. Tegelijk wordt ook genoemd dat producten zoals honing en fruitsap niet automatisch in de ultrabewerkte categorie vallen, ook al zijn ze niet per se gezonde keuzes.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom is ultrabewerkt voedsel relevant voor diabetes?  
**Mini-antwoord:** Omdat een hogere inname samenhangt met meer gewichtstoename en een hoger risico op diabetes type 2.`} />
      <p><Inline>{`De associatie is duidelijk: mensen met een matige inname van ultrabewerkt voedsel hebben een hoger diabetesrisico, en bij een hoge consumptie loopt dat risico nog verder op. Vooral bewerkt vlees en suikerhoudende dranken lijken hierin belangrijk te zijn.`}</Inline></p>
    </div>
  )
}
