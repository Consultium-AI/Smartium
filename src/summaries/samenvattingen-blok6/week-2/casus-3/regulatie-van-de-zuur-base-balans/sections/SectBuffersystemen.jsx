import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Buffersystemen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Buffers vangen veranderingen in pH direct op. Ze werken snel en vormen dus de eerste verdedigingslinie tegen grote pH-schommelingen.`}</Inline></p>
      <PBody text={`**Tabel 1. Belangrijke buffers in het lichaam**`} />
      <DataTable rows={[["Buffersysteem", "Belangrijkste plaats", "Functie"], ["Bicarbonaatbuffer", "Bloed", "Belangrijkste buffersysteem in het bloed"], ["Fosfaatbuffer", "Intracellulaire vloeistof en urine", "Belangrijk in cellen en in de urine"], ["Eiwitbuffer", "Bloed", "Eiwitten, zoals hemoglobine, kunnen H+ binden"]]} />
      <p className="leading-relaxed"><Inline>{`Het belangrijkste buffersysteem in het bloed is het bicarbonaatbuffersysteem. Dit systeem bestaat uit CO2, water, koolzuur (H2CO3), H+ en bicarbonaat (HCO3-). De kern van dit systeem is dat CO2 met water in evenwicht staat met koolzuur, en dat koolzuur weer uiteen kan vallen in H+ en HCO3-.`}</Inline></p>
      <SubHeading><Inline>{`Het bicarbonaatbuffersysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je kunt dit systeem zien als een soort evenwichtssysteem:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3-`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als er meer CO2 in het bloed komt, verschuift het evenwicht richting meer H+, en daalt de pH. Komt er juist minder CO2, dan daalt de H+-concentratie en stijgt de pH. Daarom is CO2 zo belangrijk in de zuur-base balans.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is CO2 zo belangrijk voor de pH?`} />
      <p className="leading-relaxed"><Inline>{`Omdat CO2 via het bicarbonaatsysteem direct invloed heeft op de hoeveelheid H+ in het bloed.`}</Inline></p>
    </div>
  )
}
