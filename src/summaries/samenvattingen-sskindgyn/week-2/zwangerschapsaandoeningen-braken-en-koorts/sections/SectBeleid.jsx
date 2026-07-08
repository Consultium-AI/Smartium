import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beleid`}</Inline></SubHeading>
      <PBody text={`Bij HELLP of ernstige pre-eclampsie is vaak **spoedverwijzing** nodig. De zwangerschap zal meestal **binnen niet al te lange termijn actief beëindigd** moeten worden, op maternale of foetale indicatie. Als de termijn **korter dan 32 weken** is, heeft opname in een centrum met **intensieve neonatale opvang** de voorkeur. Dan wordt soms een **intra-uteriene overplaatsing** geregeld.`} />
      <PBody text={`De moeder krijgt **corticosteroïden** voor longrijping van de foetus. De optimale werking treedt op na ongeveer **48 uur**. Bij dreigende convulsies of ernstige ziekte wordt **magnesiumsulfaat** gegeven als preventieve behandeling. Afhankelijk van de situatie gebeurt de bevalling vaak via een **sectio caesarea**. De keuze tussen spinale analgesie en algehele narcose wordt samen met de anesthesioloog gemaakt; bij trombocytopenie is dat een afweging tussen bloedingsrisico en bloeddrukschommelingen.`} />
    </div>
  )
}
