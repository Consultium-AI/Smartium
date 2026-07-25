import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Artrose is vooral een aandoening van het **kraakbeen** en geeft meestal **asymmetrische gewrichtsspleetversmalling**, **osteofyten**, **subchondrale sclerose** en **subchondrale cysten**. RA is vooral een ontsteking van het **synovium** en geeft vaak **synovitis**, **peri-articulaire osteopenie** en **erosies**. Seronegatieve artritis is geassocieerd met **HLA-B27** en geeft vaak **enthesopathie** en axiale betrokkenheid. Jicht en CPPD zijn kristalartropathieën, waarbij jicht vaak aan **MTP-1** voorkomt. Bij beeldvorming is een vaste systematische beoordeling belangrijk: kijk steeds naar **weke delen**, **gewrichtsruimten**, **botveranderingen** en **alignment**.`} />
    </div>
  )
}
