import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing: ernstige pneumonie`}</Inline></SubHeading>
      <PBody text={`Bij een oudere, zieke en verwarde patiënt met een hogere AMBU-65-score is sprake van een **ernstige pneumonie**. Dan moet je altijd ook aan **Legionella** denken.`} />
      <PBody text={`Bij ernstige CAP wordt een **2e of 3e generatie cefalosporine** gecombineerd met een **chinolon**. De cefalosporine dekt de pneumokok en mogelijke gramnegatieve verwekkers, terwijl het chinolon extra dekking geeft, onder andere voor Legionella.`} />
      <SubHeading><Inline>{`Tabel 4. Behandeling van pneumonie in deze stof`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Behandeling"], ["Lichte CAP", "Amoxicilline of doxycycline"], ["CAP bij amoxicilline-allergie", "Doxycycline, azitromycine of cotrimoxazol; bij opname ook cefuroxim mogelijk"], ["Ernstige CAP", "Cefalosporine + chinolon"]]} />
    </div>
  )
}
