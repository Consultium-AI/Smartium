import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus met een palpabele klier en alarmsignalen`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`In een andere variant voelt de patiënt al weken een bobbeltje in de oksel. Daarna ontstaat een huiddefect door krabben. De klier lijkt sneller te groeien. Er zijn ook algemene klachten zoals je niet lekker voelen en nachtelijk transpireren. Bij onderzoek is er een palpabele lymfeklier onder het huiddefect en daarnaast een supraclaviculaire zwelling.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Dit beeld vraagt om een bredere differentiaaldiagnose. Nachtzweten en een supraclaviculaire klier zijn alarmsignalen die je serieus neemt. Dan denk je niet alleen aan infectie, maar ook aan maligniteit.`}</Inline>
      </p>
      <SubHeading><Inline>{`Differentiaaldiagnose hierbij`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`infectieuze lymfadenitis;`}</Inline></li>
        <li><Inline>{`kattenkrabziekte;`}</Inline></li>
        <li><Inline>{`lymfoom;`}</Inline></li>
        <li><Inline>{`metastase of recidief van een maligniteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`De aanwezigheid van een huiddefect kan een ingang zijn voor infectie, maar een niet-pijnlijke lymfeklier en supraclaviculaire zwelling maken een maligniteit ook belangrijk om te overwegen.`}</Inline>
      </p>
    </div>
  )
}
