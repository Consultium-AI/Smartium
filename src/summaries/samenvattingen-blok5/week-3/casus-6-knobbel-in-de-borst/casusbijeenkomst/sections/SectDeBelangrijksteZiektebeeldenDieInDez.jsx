import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De belangrijkste ziektebeelden die in deze bijeenkomst steeds terugkomen zijn:`}</Inline></SubHeading>
      <PBody text={`**veneuze insufficiëntie / varices**`} />
      <PBody text={`**trombose**`} />
      <PBody text={`**erysipelas / cellulitis**`} />
      <PBody text={`**lymfoedeem**`} />
      <PBody text={`**hartfalen**`} />
      <PBody text={`**medicamenteus oedeem**, vooral door amlodipine`} />
      <PBody text={`**maligniteit met veneuze of lymfatische afvloedbelemmering**`} />
      <PBody text={`**trauma / hematoom**`} />
      <p className="leading-relaxed"><Inline>{`in enkele gevallen **compartimentsyndroom**`}</Inline></p>
    </div>
  )
}
