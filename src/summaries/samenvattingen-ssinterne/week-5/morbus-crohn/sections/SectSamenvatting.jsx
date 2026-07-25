import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ziekte van Crohn is een chronische inflammatoire darmziekte die vooral bij jonge mensen voorkomt en zich kan uiten met buikpijn, diarree, gewichtsverlies en vermoeidheid. De diagnose stel je stap voor stap met anamnese, laboratoriumonderzoek, fecaal calprotectine, beeldvorming en vooral ileocoloscopie met biopten. De behandeling volgt meestal een step-upstrategie: bij milde tot matige ileocaecale Crohn start je met budesonide en voor onderhoud gebruik je azathioprine. Bij complicaties zoals stenosen, fistels of extra-intestinale manifestaties kan intensievere medicatie of chirurgie nodig zijn.`}</Inline></p>
    </div>
  )
}
