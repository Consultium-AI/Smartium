import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Farmacokinetiek van de bètablokkers`}</Inline></SubHeading>
      <PBody text={`Farmacokinetiek gaat over **wat het lichaam met het geneesmiddel doet**: opname, verdeling, metabolisme en uitscheiding. In deze module staat vooral het **metabolisme** centraal.`} />
      <SubHeading><Inline>{`Interactie met fluoxetine`}</Inline></SubHeading>
      <PBody text={`Bij een patiënt die **fluoxetine** gebruikt, verdient **atenolol** de voorkeur boven propranolol of metoprolol.`} />
      <DataTable rows={[["Tabel 2. Voorkeursmiddel bij gelijktijdig gebruik van fluoxetine"], ["**Voorkeur**", "Atenolol"], ["**Waarom?**", "Atenolol wordt niet via **CYP2D6** gemetaboliseerd"]]} />
      <PBody text={`**Fluoxetine** is een remmer van **CYP2D6**. Daardoor kunnen de spiegels van **propranolol** en **metoprolol** stijgen als ze samen met fluoxetine worden gebruikt. Hogere spiegels kunnen leiden tot meer bijwerkingen. Atenolol geeft dit probleem niet, omdat het niet via CYP2D6 wordt afgebroken.`} />
      <SubHeading><Inline>{`Wat is CYP2D6?`}</Inline></SubHeading>
      <PBody text={`CYP2D6 is een **enzym** dat betrokken is bij de afbraak van bepaalde geneesmiddelen. Als dit enzym geremd wordt, kan een geneesmiddel dat normaal via dit enzym wordt afgebroken, langer of in hogere concentratie in het lichaam aanwezig blijven.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is atenolol hier handiger?
**Mini-antwoord:** Omdat fluoxetine de afbraak van atenolol niet beïnvloedt via CYP2D6.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
