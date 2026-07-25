import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Levercirrose is een chronische leverziekte met littekenvorming, portale hypertensie en verlies van leverfunctie. De belangrijkste oorzaken zijn alcohol, virale hepatitis, NASH, auto-immuun leverziekten en metabole aandoeningen. Typische klachten en bevindingen zijn icterus, oedeem, ascites, splenomegalie, spider naevi, erythema palmare en soms encefalopathie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnostiek bestaat uit anamnese, lichamelijk onderzoek, laboratoriumonderzoek, echo, fibroscan en onderzoek naar de oorzaak. Ascites moet altijd worden gepuncteerd om SBP uit te sluiten. De ernst en prognose worden beoordeeld met onder andere de MELD- en Child-Pugh-Turcotte-score. Bij ernstig leverfalen kan levertransplantatie nodig zijn.`}</Inline></p>
    </div>
  )
}
