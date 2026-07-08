import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof moet je begrijpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke mogelijkheden er zijn voor eerste trimesterscreening en invasieve prenatale diagnostiek;`}</Inline></li>
        <li><Inline>{`wanneer invasieve prenatale diagnostiek geïndiceerd is bij een vermoeden op een afwijking;`}</Inline></li>
        <li><Inline>{`wat de 13-weken echo (ETSEO) en de 20-weken echo (TTSEO) als screenend onderzoek inhouden;`}</Inline></li>
        <li><Inline>{`wat geavanceerd ultrageluidsonderzoek is en wanneer dit wordt ingezet in de derde lijn.`}</Inline></li>
      </ul>
    </div>
  )
}
