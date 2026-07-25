import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Noduli van Bouchard en Heberden`}</Inline></SubHeading>
      <PBody text={`Benige zwellingen van de PIP-gewrichten heten **noduli van Bouchard**.`} />
      <PBody text={`Benige zwellingen van de DIP-gewrichten heten **noduli van Heberden**.`} />
    </div>
  )
}
