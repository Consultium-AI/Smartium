import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Seizoensgebonden allergenen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inhalatieallergie spelen seizoenen een grote rol.`}</Inline></p>
      <SubHeading><Inline>{`Boompollen`}</Inline></SubHeading>
      <PBody text={`Boompollen geven vooral klachten in de **late winter en lente**. In deze module vallen daar vooral de maanden **januari tot en met mei** onder.`} />
      <p className="leading-relaxed"><Inline>{`Voorbeelden van bomen en struiken zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hazelaar;`}</Inline></li>
        <li><Inline>{`els;`}</Inline></li>
        <li><Inline>{`wilg;`}</Inline></li>
        <li><Inline>{`taxus;`}</Inline></li>
        <li><Inline>{`populier;`}</Inline></li>
        <li><Inline>{`haagbeuk;`}</Inline></li>
        <li><Inline>{`berk;`}</Inline></li>
        <li><Inline>{`beuk;`}</Inline></li>
        <li><Inline>{`eik;`}</Inline></li>
        <li><Inline>{`es;`}</Inline></li>
        <li><Inline>{`den;`}</Inline></li>
        <li><Inline>{`kastanje;`}</Inline></li>
        <li><Inline>{`linde;`}</Inline></li>
        <li><Inline>{`ceder.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Graspollen`}</Inline></SubHeading>
      <PBody text={`Graspollen spelen vooral een rol in de **late lente en zomer**, met name **mei tot en met augustus**.`} />
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`timoteegras;`}</Inline></li>
        <li><Inline>{`Engels raaigras;`}</Inline></li>
        <li><Inline>{`kropaar;`}</Inline></li>
        <li><Inline>{`veldbeemdgras;`}</Inline></li>
        <li><Inline>{`rogge;`}</Inline></li>
        <li><Inline>{`glanshaver;`}</Inline></li>
        <li><Inline>{`straatgras;`}</Inline></li>
        <li><Inline>{`kweek;`}</Inline></li>
        <li><Inline>{`riet;`}</Inline></li>
        <li><Inline>{`mais.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Huisstofmijt`}</Inline></SubHeading>
      <PBody text={`Huisstofmijt is **niet seizoensgebonden**. Klachten kunnen dus het hele jaar door voorkomen.`} />
    </div>
  )
}
