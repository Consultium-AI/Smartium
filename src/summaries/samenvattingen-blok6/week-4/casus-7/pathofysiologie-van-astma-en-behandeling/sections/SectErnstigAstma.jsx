import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ernstig astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ernstig astma is een relatief kleine subgroep, maar door de hoge prevalentie van astma gaat het toch om een grote groep patiënten met hoge ziektelast en veel zorggebruik. Er is sprake van ernstig astma wanneer er onvoldoende controle is ondanks hoge doseringen ICS/LABA en optimale behandeling van bijdragende factoren, of wanneer klachten toenemen bij afbouwen van die hoge doseringen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling kan bestaan uit aanvullende opties zoals azitromycine als onderhoud bij type 2-laag fenotype, longrevalidatie of hooggebergtebehandeling wanneer meerdere bijdragende factoren een rol spelen. Een grote vooruitgang is de komst van biologicals. Deze zijn bedoeld voor patiënten met ernstig astma en frequente exacerbaties of afhankelijkheid van orale corticosteroïden.`}</Inline></p>
      <SubHeading><Inline>{`Biologicals`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij Type 2-hoog astma zijn er meerdere mogelijkheden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anti-IL4R: dupilumab`}</Inline></li>
        <li><Inline>{`anti-IgE: omalizumab`}</Inline></li>
        <li><Inline>{`anti-IL5: mepolizumab of reslizumab`}</Inline></li>
        <li><Inline>{`anti-IL5R: benralizumab`}</Inline></li>
        <li><Inline>{`anti-TSLP: tezepelumab`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij Type 2-laag astma is vooral anti-TSLP, dus tezepelumab, genoemd.`}</Inline></p>
    </div>
  )
}
