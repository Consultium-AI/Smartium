import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Buffers in het bloed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veranderingen in de zuurgraad van het bloed worden eerst opgevangen door buffers. De belangrijkste buffer in plasma is het CO₂-bicarbonaat-evenwicht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kernreactie is:`}</Inline></p>
      <PBody text={`**CO₂ + H₂O ⇄ HCO₃⁻ + H⁺**`} />
      <p className="leading-relaxed"><Inline>{`Hieruit volgt direct dat de pH daalt als de concentratie H⁺ stijgt, als de CO₂-concentratie stijgt, of als de bicarbonaatconcentratie daalt. Andersom stijgt de pH bij minder H⁺, minder CO₂ of meer bicarbonaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De relatie tussen deze stoffen wordt beschreven met de Henderson-Hasselbalch-vergelijking:`}</Inline></p>
      <PBody text={`**pH = 6,1 + log([HCO₃⁻]/[CO₂])**`} />
      <p className="leading-relaxed"><Inline>{`Een handige manier om dit te onthouden is: de pH hangt af van de verhouding tussen base en zuur. Meer bicarbonaat maakt het bloed basischer, meer CO₂ of meer H⁺ maakt het zuurder.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke buffers in plasma`}</Inline></SubHeading>
      <DataTable rows={[["Buffer", "Samenstelling"], ["Bicarbonaat/CO₂", "HCO₃⁻ / CO₂"], ["Fosfaatbuffer", "HPO₄²⁻ / H₂PO₄⁻"], ["Eiwitbuffer", "proteïne / H-proteïne"]]} />
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is de CO₂-bicarbonaatbuffer zo belangrijk?**
Omdat deze buffer direct gekoppeld is aan de longen én de nieren, waardoor het lichaam de pH actief kan regelen.`} />
    </div>
  )
}
