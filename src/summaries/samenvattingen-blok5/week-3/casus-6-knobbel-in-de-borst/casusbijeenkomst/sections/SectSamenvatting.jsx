import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij zwelling van het been moet je eerst bepalen of de zwelling **diffuus of lokaal** is en of deze **unilateraal of bilateraal** voorkomt. Daarna koppel je het beeld aan de juiste etiologische groep. De belangrijkste oorzaken zijn **veneuze insufficiëntie**, **trombose**, **erysipelas/cellulitis**, **lymfoedeem**, **hartfalen**, **medicamenteus oedeem door amlodipine**, **maligniteit** en **trauma**.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Chronische bilaterale zwelling past vaak bij **veneuze hypertensie** of **hartfalen**. Unilaterale zwelling met pijn en risicofactoren doet denken aan **DVT**. Roodheid, koorts en ziek zijn wijzen meer op **erysipelas**. Langzaam ontstane zwelling met huidveranderingen en varices past bij **veneuze insufficiëntie**. Een recent gestart middel zoals **amlodipine** kan bilateraal pitting oedeem geven. Bij een combinatie van beenzwelling met bloedverlies of buikpijn moet je ook aan **maligniteit in het kleine bekken** denken. Bij trauma moet je altijd letten op een **hematoom** en het gevaar van een **compartimentsyndroom**.`}</Inline>
        </p>
      </div>
    </div>
  )
}
