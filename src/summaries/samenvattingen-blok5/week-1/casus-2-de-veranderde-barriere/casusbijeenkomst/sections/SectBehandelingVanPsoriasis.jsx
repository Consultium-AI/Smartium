import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling van psoriasis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de ernst en van bijkomende problemen. In deze casus zijn er meerdere redenen om systemische behandeling te overwegen:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`de psoriasis is niet meer onder controle met smeren`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`er is mogelijk artritis psoriatica`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`er zijn uitgebreide huidafwijkingen`}</Inline></p>
    </div>
  )
}
