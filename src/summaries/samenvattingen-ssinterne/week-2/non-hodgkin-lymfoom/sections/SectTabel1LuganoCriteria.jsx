import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Lugano-criteria`}</Inline></SubHeading>
      <DataTable rows={[["Stadium", "Betrokkenheid"], ["I", "1 lymfeklier of groep aangrenzende lymfeklieren, of 1 extranodale laesie zonder lymfeklierbetrokkenheid"], ["II", "≥2 lymfekliergroepen aan dezelfde kant van het diafragma, of stadium I/II met beperkte dichtbijgelegen extranodale betrokkenheid"], ["III", "Lymfeklieren aan beide kanten van het diafragma, of lymfeklieren boven het diafragma met miltbetrokkenheid"], ["IV", "Bijkomende niet-aansluitende extranodale betrokkenheid"]]} />
      <PBody text={`**Aandachtsvraag:** wat betekent stadium III?
**Mini-antwoord:** dat er lymfeklieren aan beide kanten van het diafragma zijn aangedaan.`} />
      <p className="leading-relaxed"><Inline>{`In de casus gaat het om vergrote FDG-avid lymfeklieren boven en onder het diafragma, zonder beenmergbetrokkenheid en zonder andere extranodale lokalisaties. Dat past bij stadium III.`}</Inline></p>
    </div>
  )
}
