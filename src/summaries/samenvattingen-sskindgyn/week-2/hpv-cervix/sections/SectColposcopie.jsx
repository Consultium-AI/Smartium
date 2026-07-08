import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Colposcopie`}</Inline></SubHeading>
      <PBody text={`Een **colposcopisch onderzoek** gebeurt op de polikliniek. De gynaecoloog neemt eerst de anamnese af. Daarna gaat de patiënte op de gynaecologische stoel liggen. Er wordt een **speculum** ingebracht zodat de portio zichtbaar wordt. Vervolgens wordt de **colposcoop** op ongeveer 10 tot 15 cm voor het speculum geplaatst. Via de colposcoop kan de gynaecoloog de cervix goed beoordelen.`} />
      <PBody text={`Als er een afwijkend gebied wordt gezien, wordt daar een **biopt** van genomen.`} />
    </div>
  )
}
