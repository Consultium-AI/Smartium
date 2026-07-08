import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Perinatale asfyxie`}</Inline></SubHeading>
      <PBody text={`Voor het beoordelen van **perinatale asfyxie** kunnen de **criteria van Levene** worden gebruikt. Hierbij gaat het om zes kenmerken:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`foetale nood, bijvoorbeeld bradycardie of afwijkingen op het CTG`}</Inline></li>
        <li><Inline>{`meconiumhoudend vruchtwater`}</Inline></li>
        <li><Inline>{`metabole acidose, bijvoorbeeld navelstreng-pH < 7,05`}</Inline></li>
        <li><Inline>{`Apgar-score < 5 op 5 minuten`}</Inline></li>
        <li><Inline>{`hypoxisch-ischemische encefalopathie (HIE), beoordeeld met Sarnat/Thompson`}</Inline></li>
        <li><Inline>{`multi-organ failure, dus falen van meer dan één orgaan, behalve de hersenen`}</Inline></li>
      </ul>
      <PBody text={`Er is sprake van asfyxie als **5 van de 6 criteria** aanwezig zijn. Bij **4 criteria** is de kans al groot. Geen enkel criterium is op zichzelf diagnostisch; hoe meer criteria, hoe waarschijnlijker de diagnose. Van **ernstige asfyxie** wordt gesproken bij een **arteriële navelstreng-pH < 7,00** en een **Apgar-score < 3 op 5 minuten**.`} />
    </div>
  )
}
