import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risico-inschatting: wie heeft een hoog risico?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na anamnese, lichamelijk onderzoek en aanvullend onderzoek wordt het risico op hart- en vaatziekten ingeschat met een risicotabel. Daarbij wordt vooral gekeken naar het 10-jaarsrisico op overlijden door hart- en vaatziekten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt onderscheid gemaakt in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zeer hoog risico: rood;`}</Inline></li>
        <li><Inline>{`hoog risico: oranje;`}</Inline></li>
        <li><Inline>{`matig verhoogd risico: geel;`}</Inline></li>
        <li><Inline>{`laag risico: groen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In het rode gebied is behandeling geïndiceerd. In het oranje gebied moet behandeling overwogen worden. In het groene gebied is medicamenteuze behandeling doorgaans niet nodig.`}</Inline></p>
      <SubHeading><Inline>{`Zeer hoog risico`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten hebben altijd een zeer hoog risico als er al sprake is van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerdere hart- en vaatziekten;`}</Inline></li>
        <li><Inline>{`diabetes mellitus met ernstige eindorgaanschade;`}</Inline></li>
        <li><Inline>{`ernstige chronische nierschade.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënten is behandeling dus direct aangewezen.`}</Inline></p>
      <SubHeading><Inline>{`Hoog risico en matig verhoogd risico`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten met diabetes zonder ernstige orgaanschade, met matige chronische nierschade of met een ernstige risicofactor zoals zeer hoge bloeddruk of zeer hoog cholesterol, vallen in een hogere risicocategorie. Bij hen moet behandeling worden overwogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als er alleen diabetes is zonder andere risicofactoren, dan is het risico matig verhoogd.`}</Inline></p>
    </div>
  )
}
