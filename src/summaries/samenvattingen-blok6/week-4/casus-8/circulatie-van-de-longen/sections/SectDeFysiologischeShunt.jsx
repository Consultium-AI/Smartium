import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De fysiologische shunt`}</Inline></SubHeading>
      <PBody text={`Tussen beide circulaties bestaat ook een relatie. Een klein deel van het bloed uit de bronchiale circulatie mengt zich met het bloed uit de pulmonale circulatie. Dit heet een **fysiologische shunt**.`} />
      <PBody text={`Dat gebeurt doordat de **bronchiale venen** uitmonden in de **pulmonale venen**. Daardoor komt een klein beetje zuurstofarm bloed toch in de systemische circulatie terecht, zonder eerst langs de alveoli te gaan. Het bloed is dus niet volledig “schoon” zuurstofrijk.`} />
      <PBody text={`In gezonde mensen is deze shunt klein. De shuntfractie is **niet groter dan 5% van de flow in de pulmonale circulatie**.`} />
      <SubHeading><Inline>{`Tabel 4. Fysiologische shunt`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Fysiologische shunt", "Menging van zuurstofarm bronchiaal bloed met zuurstofrijk pulmonair bloed"], ["Oorzaak", "Bronchiale venen draineren in de pulmonale venen"], ["Gevolg", "Een klein deel van het bloed omzeilt de alveoli"], ["Grootte", "In gezonde mensen kleiner dan 5% van de pulmonale flow"]]} />
    </div>
  )
}
