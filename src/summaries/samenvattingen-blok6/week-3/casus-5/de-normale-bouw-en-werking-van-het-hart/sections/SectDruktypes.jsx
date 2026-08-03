import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Druktypes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er worden drie drukconcepten onderscheiden:`}</Inline></p>
      <SubHeading><Inline>{`1. Drijvende druk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is het drukverschil langs een vat of circuit. Deze drukverschil is de echte kracht achter de flow.`}</Inline></p>
      <SubHeading><Inline>{`2. Transmurale druk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is het drukverschil over de vaatwand:`}</Inline></p>
      <PBody text={`**Ptm = Pintern − Pextern**`} />
      <p className="leading-relaxed"><Inline>{`Deze druk bepaalt de spanning op de vaatwand en beïnvloedt dus de diameter van het vat.`}</Inline></p>
      <SubHeading><Inline>{`3. Hydrostatische druk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is de druk door het gewicht van de bloedkolom:`}</Inline></p>
      <PBody text={`**Ph = ρ · g · h**`} />
      <p className="leading-relaxed"><Inline>{`Wanneer iemand staat, is de hydrostatische druk in de vaten van de benen hoger dan wanneer iemand ligt. Dat komt door de zwaartekracht en de hoogte van de bloedkolom.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Druktypes`}</Inline></SubHeading>
      <DataTable rows={[["Druktype", "Betekenis"], ["Drijvende druk", "Drukverschil dat flow veroorzaakt"], ["Transmurale druk", "Drukverschil over de vaatwand"], ["Hydrostatische druk", "Druk door de bloedkolom en zwaartekracht"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
