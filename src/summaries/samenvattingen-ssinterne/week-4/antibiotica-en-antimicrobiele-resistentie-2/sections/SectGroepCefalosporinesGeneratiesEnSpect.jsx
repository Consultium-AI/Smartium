import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Groep cefalosporines: generaties en spectrum`}</Inline></SubHeading>
      <PBody text={`Cefalosporines zijn **bètalactam-antibiotica**. Ze worden ingedeeld in generaties. Die generaties zijn in de tijd na elkaar ontwikkeld en verschillen in gevoeligheid voor **bètalactamase** en in werking tegen **grampositieve** en **gramnegatieve** bacteriën.`} />
      <p className="leading-relaxed"><Inline>{`De module behandelt vooral de eerste drie generaties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**1e generatie: cefazoline**`}</Inline></li>
        <li><Inline>{`**2e generatie: cefuroxim**`}</Inline></li>
        <li><Inline>{`**3e generatie: ceftazidim**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Cefalosporines in deze stof`}</Inline></SubHeading>
      <DataTable rows={[["Generatie", "Middel", "Kernwerking", "Veel gebruikt bij"], ["1", "Cefazoline", "Vooral grampositief en gramnegatief zonder bètalactamase", "Preoperatieve profylaxe"], ["2", "Cefuroxim", "Grampositief en gramnegatief die “smal spectrum” bètalactamase maken", "Pneumonie, urineweginfectie"], ["3", "Ceftazidim", "Werkt tegen Pseudomonas", "Vooral bij gramnegatieve infecties met Pseudomonas"]]} />
      <PBody text={`Belangrijk is dat cefalosporines per generatie anders werken. **Cefazoline** is vooral geschikt voor profylaxe rond operaties. **Cefuroxim** wordt vaak gebruikt bij pneumonie en urineweginfecties. **Ceftazidim** is juist belangrijk door de werking tegen **Pseudomonas**.`} />
    </div>
  )
}
