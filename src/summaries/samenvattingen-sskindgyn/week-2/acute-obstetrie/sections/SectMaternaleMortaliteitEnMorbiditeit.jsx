import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Maternale mortaliteit en morbiditeit`}</Inline></SubHeading>
      <PBody text={`Wereldwijd is maternale sterfte nog steeds een groot probleem. In de westerse wereld ligt de maternale sterfte rond **5–15 per 100.000 levendgeborenen**, terwijl dit in delen van de derde wereld veel hoger ligt, soms **boven 800 per 100.000 levendgeborenen**. Wereldwijd sterft er ongeveer **1 moeder per minuut**.`} />
      <SubHeading><Inline>{`Tabel 1. Oorzaken van maternale sterfte`}</Inline></SubHeading>
      <DataTable rows={[["Type sterfte", "Voorbeelden"], ["Directe maternale sterfte", "Postpartum bloeding, pre-eclampsie/eclampsie, infectie, onveilige abortus"], ["Indirecte maternale sterfte", "Hartproblematiek, diabetes, nierfalen"], ["Incidentele sterfte", "Verkeersongeval, tumoren, andere niet-zwangerschapsgerelateerde oorzaken"]]} />
      <PBody text={`Naast sterfte is er ook aanzienlijke maternale morbiditeit. Ernstige complicaties komen regelmatig voor, zoals bloedverlies, IC-opname en eclampsie. Ook perinatale sterfte blijft relevant. In Nederland ligt die rond **7–8 per 1000**, met zowel foetale als neonatale sterfte. Belangrijke oorzaken zijn vroeggeboorte, laag geboortegewicht, congenitale afwijkingen, asfyxie en infectie.`} />
    </div>
  )
}
