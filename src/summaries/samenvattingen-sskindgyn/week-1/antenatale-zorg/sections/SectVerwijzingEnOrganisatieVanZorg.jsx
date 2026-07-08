import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verwijzing en organisatie van zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Of een zwangere in de eerste, tweede of derde lijn wordt begeleid, hangt af van de anamnese en zo nodig het lichamelijk onderzoek. Elke aandoening in de voorgeschiedenis die een bedreiging vormt voor de foetale groei en ontwikkeling of voor de moeder, is een reden voor tweedelijnszorg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een praktische vuistregel is: als iemand onder controle is bij een specialist of eerder een gecompliceerde zwangerschap heeft gehad, is er meestal een medische indicatie voor tweedelijnszorg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De indicaties voor verwijzing staan in de Verloskundige Indicatie Lijst (VIL). Zwangeren met een verhoogd risico worden op die indicatie verwezen naar en verder begeleid door de gynaecoloog, soms in een perinatologisch centrum. In verloskundige samenwerkingsverbanden werken verloskundigen en gynaecologen steeds meer samen en maken zij afspraken over gezamenlijke of gedeelde zorg.`}</Inline></p>
    </div>
  )
}
