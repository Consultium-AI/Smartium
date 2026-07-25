import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat gebeurt er bij ABO-incompatibiliteit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een incompatibele erytrocytentransfusie kunnen de antistoffen van de ontvanger aan de donorerytrocyten binden. Dat kan leiden tot agglutinatie en vooral tot hemolyse. In vitro kan agglutinatie zichtbaar zijn, maar in vivo is het gevaar vooral intravasculaire hemolyse. Dat kan zeer ernstig en zelfs letaal verlopen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een acute hemolytische transfusiereactie kan zich uiten met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`koorts;`}</Inline></li>
        <li><Inline>{`rillingen;`}</Inline></li>
        <li><Inline>{`hypotensie;`}</Inline></li>
        <li><Inline>{`lendenpijn;`}</Inline></li>
        <li><Inline>{`hematurie;`}</Inline></li>
        <li><Inline>{`anurie;`}</Inline></li>
        <li><Inline>{`diffuse intravasale stolling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zelfs een kleine hoeveelheid incompatibel bloed kan al ernstige gevolgen hebben.`}</Inline></p>
    </div>
  )
}
