import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vaak spelen bij kindermishandeling problemen mee die voortkomen uit onmacht van ouders. Het is dus niet altijd een bewuste intentie om een kind iets aan te doen. Juist daarom is het belangrijk om risicofactoren te herkennen.`}</Inline></p>
      <SubHeading><Inline>{`Ouderlijke factoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ouders kunnen onder andere de volgende factoren een rol spelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zelf mishandeld of misbruikt zijn;`}</Inline></li>
        <li><Inline>{`verslaving;`}</Inline></li>
        <li><Inline>{`psychiatrische problematiek;`}</Inline></li>
        <li><Inline>{`te weinig kennis over opvoeding;`}</Inline></li>
        <li><Inline>{`te hoge verwachtingen van het kind.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Kindfactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook kenmerken van het kind kunnen een rol spelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een ongewenst kind;`}</Inline></li>
        <li><Inline>{`prematuriteit;`}</Inline></li>
        <li><Inline>{`handicaps;`}</Inline></li>
        <li><Inline>{`gedragsproblemen;`}</Inline></li>
        <li><Inline>{`een stief- of adoptiekind.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Gezinsfactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Binnen het gezin kunnen onder meer deze factoren meespelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`relatieproblemen;`}</Inline></li>
        <li><Inline>{`werkloosheid;`}</Inline></li>
        <li><Inline>{`financiële problemen;`}</Inline></li>
        <li><Inline>{`isolement;`}</Inline></li>
        <li><Inline>{`een groot gezin.`}</Inline></li>
      </ul>
    </div>
  )
}
