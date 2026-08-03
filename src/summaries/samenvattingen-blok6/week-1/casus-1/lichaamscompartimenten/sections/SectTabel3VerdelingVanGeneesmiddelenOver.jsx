import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Verdeling van geneesmiddelen over compartimenten`}</Inline></SubHeading>
      <DataTable rows={[["Compartiment", "Geneesmiddelen die hier vooral terug te vinden zijn"], ["Bloedbaan", "Heparine"], ["Vloeistof in weefsels", "Fenobarbital, fenytoïne"], ["Gebonden aan cellen in organen en/of vetweefsel", "Diazepam, digoxine"]]} />
      <p className="leading-relaxed"><Inline>{`De vloeistof in de cellen vormt het grootste deel van het water in het lichaam. Daarom zal een middel dat zich goed over waterige compartimenten verdeelt, daar vaak in grote hoeveelheid aanwezig zijn.`}</Inline></p>
    </div>
  )
}
