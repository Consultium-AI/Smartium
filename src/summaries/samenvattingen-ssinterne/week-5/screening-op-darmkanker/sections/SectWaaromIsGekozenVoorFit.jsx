import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is gekozen voor FIT?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Uit vergelijkingen van screeningsmethoden bleek dat de Nederlandse bevolking veel minder bereid is om een coloscopie te ondergaan dan om mee te doen aan FIT-screening. Bij FIT is de deelname veel hoger. Daardoor worden uiteindelijk, zeker bij herhaalde rondes, meer darmkankers en advanced adenomen opgespoord.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De keuze in Nederland is daarom gevallen op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**FIT als eerste test**`}</Inline></li>
        <li><Inline>{`bij een **positieve FIT** volgt een **coloscopie**`}</Inline></li>
        <li><Inline>{`bij een **negatieve FIT** volgt na **2 jaar** opnieuw een FIT`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Vergelijking van screeningsmethoden op deelname en opbrengst`}</Inline></SubHeading>
      <DataTable rows={[["Methode", "Deelname", "Opbrengst"], ["gFOBT", "matig", "minder gunstig"], ["FIT", "hoog", "veel detectie bij herhaling"], ["Sigmoidoscopie", "lager", "goede detectie"], ["CT-colonografie", "laag-matig", "goede detectie"], ["Coloscopie", "laag", "beste test, maar te lage deelname"]]} />
    </div>
  )
}
