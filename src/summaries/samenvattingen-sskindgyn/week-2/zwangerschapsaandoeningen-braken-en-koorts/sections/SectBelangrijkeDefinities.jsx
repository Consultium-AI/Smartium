import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke definities`}</Inline></SubHeading>
      <SubHeading><Inline>{`Tabel 1. Kernbegrippen`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Definitie"], ["Hyperemesis gravidarum", "Aanhoudend braken met gewichtsverlies en tekenen van dehydratie, met aantoonbare ketonurie"], ["Zwangerschapshypertensie", "Hypertensie zonder proteïnurie in de tweede helft van de zwangerschap bij een voorheen normotensieve vrouw"], ["Pre-eclampsie", "Hypertensie met proteïnurie in de tweede helft van de zwangerschap bij een voorheen normotensieve vrouw"], ["Zwangerschapscholestase", "Verhoogde galzuren met gegeneraliseerde jeuk zonder andere huidafwijkingen, behalve krabeffecten"], ["Zwangerschapsdiabetes", "Diabetes die tijdens de zwangerschap wordt vastgesteld, ook als er al een niet eerder herkende type 2-diabetes bestond"]]} />
    </div>
  )
}
