import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing: community acquired pneumonia`}</Inline></SubHeading>
      <PBody text={`Bij een patiënt met koorts, hoesten, groen sputum, een infiltraat op de thoraxfoto en een lage AMBU-65-score is sprake van een **lichte pneumonie**. De **AMBU-65-score** wordt gebruikt om de **30-daagse sterfte** te voorspellen. Het is dus een prognostische score, geen score die direct bepaalt of iemand wel of niet opgenomen moet worden.`} />
      <PBody text={`Bij een lichte community acquired pneumonia kun je onder andere **amoxicilline** of **doxycycline** voorschrijven. Doxycycline kan ook gegeven worden als iemand allergisch is voor amoxicilline, omdat het een andere antibioticagroep is en er geen kruisovergevoeligheid is tussen penicillines en tetracyclines.`} />
      <PBody text={`Als iemand na 48 uur doxycycline niet opknapt, denk je aan een pneumokok die ongevoelig is voor tetracyclines. Dan zou je normaal gesproken naar amoxicilline switchen, maar dat kan niet bij een ernstige amoxicilline-allergie. Andere mogelijkheden zijn dan **azitromycine**, **cotrimoxazol** of, als opname nodig is, **cefuroxim**. Ciprofloxacin is hier niet geschikt, omdat het vooral gramnegatieve staven dekt en weinig grampositieve kokken.`} />
    </div>
  )
}
