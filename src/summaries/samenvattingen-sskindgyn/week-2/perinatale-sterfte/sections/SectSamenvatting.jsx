import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Perinatale sterfte is sterfte rondom de geboorte en omvat foetale sterfte en vroege neonatale sterfte. Nederland heeft de sterfte de afgelopen decennia zien dalen, maar scoort nog steeds relatief ongunstig in Europa. De belangrijkste oorzaken zijn vroeggeboorte, aangeboren afwijkingen, placenta-afwijkingen met laag geboortegewicht en perinatale asfyxie. Risicofactoren zijn onder andere meerlingzwangerschap, hoge maternale leeftijd, roken, overgewicht, chronische ziekte en een gestoorde obstetrische voorgeschiedenis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De organisatie van de Nederlandse prenatale zorg is gebaseerd op risicoselectie met eerste-, tweede- en derdelijnszorg. Preventie begint al vóór de zwangerschap met preconceptiezorg, en goede zorg vraagt om screening, controles, tijdige herkenning van complicaties en goede samenwerking tussen zorgverleners. Substandaard factoren en gebrekkige organisatie kunnen bijdragen aan perinatale sterfte. Daarom zijn kwaliteitsverbetering, perinatale audits en goede begeleiding van risicogroepen essentieel.`}</Inline></p>
    </div>
  )
}
