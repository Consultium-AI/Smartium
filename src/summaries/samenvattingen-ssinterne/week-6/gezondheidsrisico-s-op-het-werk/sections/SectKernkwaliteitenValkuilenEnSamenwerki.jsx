import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kernkwaliteiten, valkuilen en samenwerking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het is belangrijk om je eigen kernkwaliteiten, valkuilen, allergieën en uitdagingen te kennen. Een kernkwadrant helpt daarbij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kernkwaliteit;`}</Inline></li>
        <li><Inline>{`valkuil;`}</Inline></li>
        <li><Inline>{`allergie;`}</Inline></li>
        <li><Inline>{`uitdaging.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als je bijvoorbeeld heel precies bent, kun je je ergeren aan mensen die slordig werken. Tegelijk kan jouw eigen kwaliteit in stresssituaties doorschieten naar een valkuil. Bewustzijn hiervan helpt bij samenwerking en zelfontwikkeling.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Kernkwadrant in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Betekenis"], ["Kernkwaliteit", "sterke eigenschap"], ["Valkuil", "doorschieten van die kwaliteit"], ["Allergie", "gedrag van anderen waar je je aan ergert"], ["Uitdaging", "eigenschap die je kunt ontwikkelen"]]} />
    </div>
  )
}
