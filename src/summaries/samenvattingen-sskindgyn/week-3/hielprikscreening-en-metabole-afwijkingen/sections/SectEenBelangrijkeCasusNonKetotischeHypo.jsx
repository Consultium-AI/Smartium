import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Een belangrijke casus: non-ketotische hypoglycemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een kind met een diepe hypoglycemie, geen ketonen in de urine, normaal lactaat en verhoogde vrije vetzuren past niet bij een glycogeenstapelingsziekte of gluconeogenese-defect. De verhoogde vrije vetzuren laten zien dat lipolyse actief is. Dat sluit hyperinsulinisme juist uit, omdat insuline lipolyse remt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**non-ketotische hypoglycemie**`}</Inline></li>
        <li><Inline>{`**verhoogde vrije vetzuren**`}</Inline></li>
        <li><Inline>{`**geen hepatomegalie**`}</Inline></li>
      </ul>
      <PBody text={`maakt een **vetzuuroxidatiestoornis** of een **ketogenese-defect** waarschijnlijk.`} />
      <PBody text={`In de casus bleek uiteindelijk sprake van een **VLCAD-deficiëntie**: very-long-chain acyl-CoA dehydrogenase-deficiëntie. Dat is een stoornis in de afbraak van vrije vetzuren naar acetyl-CoA.`} />
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een dieet met weinig langketen vetten;`}</Inline></li>
        <li><Inline>{`meer middellange keten vetten;`}</Inline></li>
        <li><Inline>{`veel koolhydraten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast krijgt de patiënt een noodplan met afspraken over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe lang vasten is toegestaan;`}</Inline></li>
        <li><Inline>{`wat te doen bij ziekte;`}</Inline></li>
        <li><Inline>{`wat in het ziekenhuis moet gebeuren als koolhydraatinname niet meer gegarandeerd is.`}</Inline></li>
      </ul>
    </div>
  )
}
