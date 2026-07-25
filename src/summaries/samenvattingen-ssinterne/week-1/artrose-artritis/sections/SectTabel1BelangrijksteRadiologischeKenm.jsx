import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Belangrijkste radiologische kenmerken`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening / afwijking", "Belangrijkste kenmerken"], ["Artrose", "Asymmetrische gewrichtsspleetversmalling, osteofyten, subchondrale sclerose, subchondrale cysten"], ["RA", "Synovitis, peri-articulaire osteopenie, kraakbeendestructie, erosies"], ["Seronegatieve artritis", "Enthesitis / enthesopathie, vaak axiale betrokkenheid"], ["Jicht", "Weke delen zwelling, calcificaties, erosies, vaak MTP-1"], ["CPPD", "Kan TFCC en carpale instabiliteit aantasten"]]} />
    </div>
  )
}
