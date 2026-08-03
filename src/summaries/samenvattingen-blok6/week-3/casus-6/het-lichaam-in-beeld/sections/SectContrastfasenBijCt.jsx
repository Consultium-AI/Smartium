import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Contrastfasen bij CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij CT wordt vaak intraveneus contrast gebruikt om weke delen en bloedvaten beter zichtbaar te maken. De keuze voor contrast en de fase hangt af van de vraagstelling.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Belangrijke contrastfasen bij CT`}</Inline></SubHeading>
      <DataTable rows={[["Fase", "Doel"], ["Blanco", "Skelet beoordelen, nierstenen uitsluiten"], ["Arterieel", "Vaatstructuren beoordelen, zoals stenosen"], ["Veneus", "Meest gebruikt, bijvoorbeeld bij oncologie"]]} />
      <p className="leading-relaxed"><Inline>{`De veneuze fase is vaak de standaard bij veel onderzoeken, terwijl de arteriële fase vooral nuttig is als je de vaten zelf goed wilt bekijken.`}</Inline></p>
    </div>
  )
}
