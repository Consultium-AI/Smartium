import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren voor vallen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste risicofactoren voor vallen moeten minimaal in de anamnese worden uitgevraagd. Denk aan problemen met mobiliteit, visus, gehoor, cognitie, pijn, medicatie en eerdere vallen. Ook lichamelijk onderzoek is belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke aandachtspunten bij lichamelijk onderzoek van een oudere met vallen`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Waar let je op?"], ["Algemeen", "bewustzijn, aandacht, cognitieve of psychische problemen"], ["Zintuigen", "visus, gehoor"], ["Vitale controles", "bloeddruk, orthostase, polsfrequentie"], ["Cardiaal", "souffle, frequentie, ritme"], ["Pulmonaal", "bijgeluiden, COPD, tekenen van hypoxie"], ["Abdomen", "blaasretentie"], ["Extremiteiten", "sarcopenie, neuropathie, pulsaties, wonden, oedeem"], ["Skelet", "beenlengteverschil, afwijkende houding, kyfose"], ["Looppatroon", "gangbeeld, armzwaai, voeten optillen"], ["Neurologisch", "lateralisatie, kracht, sensibiliteit, ataxie"]]} />
    </div>
  )
}
