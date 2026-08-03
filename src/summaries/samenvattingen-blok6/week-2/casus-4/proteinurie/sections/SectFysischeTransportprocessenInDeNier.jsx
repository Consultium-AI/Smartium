import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysische transportprocessen in de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de nier spelen verschillende transportprocessen een rol:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Diffusie**: verplaatsing van stoffen van hoge naar lage concentratie`}</Inline></li>
        <li><Inline>{`**Osmose**: verplaatsing van water door een halfdoorlaatbaar membraan`}</Inline></li>
        <li><Inline>{`**Filtratie**: verplaatsing door drukverschil`}</Inline></li>
        <li><Inline>{`**Convectie**: meevoeren van kleine stoffen met gefiltreerd water`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De nier gebruikt ze allemaal. In de glomerulus is filtratie belangrijk, in de tubulus speelt diffusie een grote rol, en in de verzamelbuis is osmose belangrijk voor waterreabsorptie.`}</Inline></p>
      <PBody text={`Bij **hemodialyse** worden vooral filtratie en convectie gebruikt, en ook diffusie. Bij **peritoneale dialyse** zijn diffusie en osmose belangrijker; osmose wordt daar opgewekt door glucose in het dialysaat.`} />
    </div>
  )
}
