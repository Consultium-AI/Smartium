import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Intraveneus versus oraal`}</Inline></SubHeading>
      <PBody text={`Bij een **intraveneuze toediening** komt het geneesmiddel direct in de bloedbaan. Er is dan geen absorptiefase. De plasmaconcentratie is vrijwel meteen maximaal en daalt daarna door metabolisme en eliminatie.`} />
      <PBody text={`Bij **orale toediening** moet het geneesmiddel eerst worden geabsorbeerd. Daardoor stijgt de plasmaconcentratie eerst. Op een bepaald moment zijn absorptie en klaring in evenwicht: dan ligt de curve op zijn top. Daarna is de klaring groter dan de absorptie en daalt de plasmaconcentratie weer.`} />
      <SubHeading><Inline>{`Tabel 4. Verschil tussen intraveneuze en orale toediening`}</Inline></SubHeading>
      <DataTable rows={[["Toediening", "Kenmerk van de curve"], ["Intraveneus", "Direct hoge plasmaconcentratie, geen absorptiefase"], ["Oraal", "Eerst stijging door absorptie, daarna daling door klaring"]]} />
      <PBody text={`Bij een eenmalige intraveneuze toediening verloopt de afname vaak volgens **eerste-orde kinetiek**. Dat betekent dat de snelheid van afname afhangt van de concentratie: hoe minder er over is, hoe langzamer de daling wordt.`} />
    </div>
  )
}
