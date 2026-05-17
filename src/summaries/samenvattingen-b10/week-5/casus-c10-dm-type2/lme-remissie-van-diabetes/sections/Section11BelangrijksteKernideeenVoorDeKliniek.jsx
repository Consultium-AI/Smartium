import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Belangrijkste kernideeën voor de kliniek`}</Inline>
      </h3>
      <p>
        <Inline>{`De klinische les van deze stof is dat je bij diabetes type 2 altijd moet denken aan de **kans op remissie**, maar ook aan de **kans op terugval**. De beste behandeling hangt af van de patiënt, en niet alleen van de glucosewaarden. Bij iemand met ernstige obesitas en een grote wens om medicatievrij te worden, kan bariatrische chirurgie het meeste opleveren. Bij andere patiënten is leefstijl een belangrijke eerste stap, of is medicatie nodig om glucosecontrole en gewichtsverlies te ondersteunen.`}</Inline>
      </p>
    </div>
  )
}
