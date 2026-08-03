import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom geen FDG PET/CT voor hersenmetastasen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`FDG PET/CT is niet geschikt om hersenmetastasen goed uit te sluiten. De reden is eenvoudig: de hersenen nemen van nature veel glucose op. Daardoor is de achtergrondactiviteit in de hersenen hoog, en kleine metastasen vallen daar gemakkelijk tegen weg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom is MRI de eerste keus voor het aantonen van hersenmetastasen.`}</Inline></p>
    </div>
  )
}
