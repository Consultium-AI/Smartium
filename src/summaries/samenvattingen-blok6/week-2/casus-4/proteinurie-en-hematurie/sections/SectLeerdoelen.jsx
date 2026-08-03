import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de pathofysiologische mechanismen beschrijven die leiden tot fout-positieve of fout-negatieve uitslagen op de urinstick;`}</Inline></li>
        <li><Inline>{`kruisreactiviteit van de urinstick herkennen en verklaren aan de hand van voorbeelden zoals vrij hemoglobine, myoglobine en paraproteïnen;`}</Inline></li>
        <li><Inline>{`minder bekende oorzaken van proteinurie en hematurie herkennen en koppelen aan de onderliggende fysiologische mechanismen.`}</Inline></li>
      </ul>
    </div>
  )
}
