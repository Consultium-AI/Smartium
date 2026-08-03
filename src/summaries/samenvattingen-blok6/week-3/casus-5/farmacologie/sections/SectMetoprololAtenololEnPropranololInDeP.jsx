import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metoprolol, atenolol en propranolol in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De drie bètablokkers worden in deze module ook apart genoemd, omdat ze elk een eigen profiel hebben. Metoprolol en atenolol zijn selectief, propranolol is aselectief. Dat verschil is belangrijk voor de werking en voor de keuze van het middel in de praktijk.`}</Inline></p>
      <SubHeading><Inline>{`Metoprolol`}</Inline></SubHeading>
      <PBody text={`Metoprolol is een **selectieve bètablokker**. In de module wordt dit middel genoemd als voorbeeld van een geneesmiddel waarbij ook aandacht is voor **bijwerkingen en contra-indicaties**.`} />
      <SubHeading><Inline>{`Atenolol`}</Inline></SubHeading>
      <PBody text={`Atenolol is ook een **selectieve bètablokker**. Daarnaast komt naar voren dat atenolol in de context van interacties met fluoxetine een gunstige keuze is, omdat het niet via CYP2D6 wordt gemetaboliseerd.`} />
      <SubHeading><Inline>{`Propranolol`}</Inline></SubHeading>
      <PBody text={`Propranolol is een **aselectieve bètablokker**. Dat betekent dat het niet alleen bèta1, maar ook bèta2 blokkeert. In de module wordt propranolol vooral gebruikt om het verschil met de selectieve bètablokkers duidelijk te maken.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
