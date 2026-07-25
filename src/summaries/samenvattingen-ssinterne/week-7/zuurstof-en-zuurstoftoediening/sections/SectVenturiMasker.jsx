import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Venturi-masker`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het Venturi-masker geeft een constante flow en een constante FiO2. De FiO2 wordt ingesteld met verschillende opzetstukjes. De flow ligt tussen 4 en 15 l/min. De instelling van de flow hangt af van de gewenste FiO2 en dus van de kleur van het opzetstukje.`}</Inline></p>
    </div>
  )
}
