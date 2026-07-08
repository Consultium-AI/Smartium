import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gevolgen van kindermishandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De gevolgen kunnen groot zijn en zich op meerdere terreinen uiten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lichamelijk letsel;`}</Inline></li>
        <li><Inline>{`psychische schade en een negatief zelfbeeld;`}</Inline></li>
        <li><Inline>{`risicovol gedrag en verslaving;`}</Inline></li>
        <li><Inline>{`verminderde hersenfunctie, met daardoor meer sociaal-economische problemen;`}</Inline></li>
        <li><Inline>{`relatieproblemen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De Adverse Childhood Experiences Study laat zien dat traumatische ervaringen in de kindertijd grote risico’s geven voor gezondheid, gedrag en sociaal functioneren later in het leven. De boodschap is dus dat kindermishandeling niet alleen een acuut probleem is, maar ook langdurige gevolgen kan hebben.`}</Inline></p>
    </div>
  )
}
