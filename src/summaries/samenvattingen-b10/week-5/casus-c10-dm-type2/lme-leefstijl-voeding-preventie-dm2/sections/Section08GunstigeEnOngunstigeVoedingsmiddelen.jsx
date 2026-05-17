import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Gunstige en ongunstige voedingsmiddelen`}</Inline></h3>
      <p><Inline>{`Uit de voedingsstudies komen enkele duidelijke patronen naar voren. De volgende voedingsmiddelen zijn gunstig in de preventie van diabetes type 2:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`volkoren granen;`}</Inline></li>
        <li><Inline>{`groene groenten;`}</Inline></li>
        <li><Inline>{`koffie;`}</Inline></li>
        <li><Inline>{`zuivel;`}</Inline></li>
        <li><Inline>{`alcohol bij vrouwen, zoals in de stof genoemd.`}</Inline></li>
      </ul>
      <p><Inline>{`Ongunstig zijn onder meer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`suikerhoudende dranken;`}</Inline></li>
        <li><Inline>{`rood vlees, zowel bewerkt als onbewerkt;`}</Inline></li>
        <li><Inline>{`witte rijst.`}</Inline></li>
      </ul>
      <p><Inline>{`Belangrijk is dat alcohol **niet** wordt geadviseerd om diabetes te voorkomen, omdat alcohol ook duidelijke andere risico’s heeft, zoals verslaving en bepaalde vormen van kanker.`}</Inline></p>
    </div>
  )
}
