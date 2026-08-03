import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Respiratoire of metabole oorzaak?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste stap in de diagnostiek is kijken of de primaire verandering zit in de pCO₂ of in de bicarbonaatconcentratie.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Als de pCO₂ afwijkend is, is de oorzaak **respiratoir**.`}</Inline></li>
        <li><Inline>{`Als de bicarbonaatconcentratie afwijkend is, is de oorzaak **metabool**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van typische bloedgaspatronen:`}</Inline></p>
      <DataTable rows={[["Stoornis", "pH", "pCO₂", "HCO₃⁻"], ["Metabole acidose", "laag", "laag of normaal", "laag"], ["Metabole alkalose", "hoog", "hoog of normaal", "hoog"], ["Respiratoire acidose", "laag", "hoog", "hoog of normaal"], ["Respiratoire alkalose", "hoog", "laag", "laag of normaal"]]} />
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Kan een normale pH toch een zuur-base stoornis betekenen?**
Ja. Als pH normaal is maar pCO₂ en bicarbonaat afwijkend zijn, kan er sprake zijn van volledig gecompenseerde stoornis.`} />
    </div>
  )
}
