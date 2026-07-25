import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD is een chronische, progressieve aandoening met luchtwegobstructie, meestal door roken of andere schadelijke blootstelling. De klachten zijn vooral kortademigheid en hoesten, vaak met sputum. De diagnose stel je met spirometrie, waarbij een postbronchodilatator FEV1/FVC < 0,70 past bij COPD. Daarna bepaal je de ernst met FEV1, klachten met mMRC of CAT, en het risico op exacerbaties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit stoppen met roken, luchtwegverwijding, zo nodig inhalatiecorticosteroïden, longrevalidatie, vaccinatie, goede voeding en bij ernstige hypoxemie zuurstoftherapie. Exacerbaties zijn acute verslechteringen die vaak door infecties worden uitgelokt en soms ziekenhuiszorg vereisen. COPD gaat vaak samen met systemische effecten en comorbiditeiten, die belangrijk zijn voor prognose en beleid.`}</Inline></p>
    </div>
  )
}
