import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: waarom urineonderzoek zo nuttig is`}</Inline></SubHeading>
      <PBody text={`Urineonderzoek met een urinstick is een snelle en goedkope manier om afwijkingen op te sporen. Het is vooral een **screenend onderzoek**: het geeft een eerste indruk, maar je moet de uitslag altijd in de juiste context plaatsen. De stick kan meerdere dingen meten, zoals eiwit, bloed, leukocyten, nitriet en soms ook bilirubine en pH.`} />
      <p className="leading-relaxed"><Inline>{`Bij een normale, goed geconcentreerde urine is een fout-negatieve uitslag zeldzaam. Toch kan de stick je ook op het verkeerde been zetten, bijvoorbeeld doordat hij reageert op stoffen die niet echt erytrocyten zijn, of doordat urine verkleurd is door iets anders dan bloed.`}</Inline></p>
      <SubHeading><Inline>{`Wat meet de urinstick eigenlijk?`}</Inline></SubHeading>
      <PBody text={`De stick detecteert hematurie via de **peroxidase-activiteit van hemoglobine**. Dat betekent dat niet alleen hemoglobine uit erytrocyten een reactie kan geven, maar ook vrij hemoglobine of myoglobine. Voor eiwit geldt iets vergelijkbaars: de stick reageert vooral op **albumine**.`} />
      <PBody text={`**Aandachtsvraag:** betekent rode urine altijd bloed?
**Mini-antwoord:** nee, rode urine kan ook door kleurstoffen, voeding of medicijnen komen.`} />
    </div>
  )
}
