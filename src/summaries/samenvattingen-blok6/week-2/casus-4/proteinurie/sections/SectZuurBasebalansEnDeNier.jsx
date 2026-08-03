import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuur-basebalans en de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier is ook belangrijk voor de zuur-basebalans. De longen verwijderen vluchtige zuren via CO2, maar niet-vluchtige zuren, bijvoorbeeld uit eiwitmetabolisme, moeten door de nier worden verwerkt. De nier moet daarom:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bicarbonaat terugwinnen**`}</Inline></li>
        <li><Inline>{`**nieuw bicarbonaat maken**`}</Inline></li>
        <li><Inline>{`**H+ uitscheiden**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Bicarbonaat terugresorptie`}</Inline></SubHeading>
      <PBody text={`In de proximale tubulus wordt gefiltreerd bicarbonaat teruggeresorbeerd. Dat gebeurt niet via een directe natriumbicarbonaattransporter aan de apicale kant, maar via een **natrium-waterstofuitwisselaar**. Daarbij wordt Na+ de cel in gebracht en H+ het lumen in gestuurd. In het lumen reageert H+ met bicarbonaat tot water en CO2. Dankzij koolzuuranhydrase verloopt dit snel. CO2 kan de cel in, waar opnieuw bicarbonaat wordt gevormd. Zo wordt bicarbonaat effectief teruggewonnen.`} />
      <SubHeading><Inline>{`Zuuruitscheiding in de verzamelbuis`}</Inline></SubHeading>
      <PBody text={`De echte netto zuuruitscheiding gebeurt in de **verzamelbuis**. Daar pompt de **waterstof-ATPase** H+ actief het lumen in. Omdat de urine niet oneindig zuur kan worden, zijn buffers nodig:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**fosfaat**: vormt titreerbaar zuur`}</Inline></li>
        <li><Inline>{`**NH3/NH4+**: bindt H+ en maakt uitscheiding mogelijk zonder dat de urine-pH extreem laag hoeft te worden`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De nier maakt NH4+ al in de proximale tubulus uit glutamine. Dat NH4+ wordt later in de dikke opstijgende lis weer opgenomen en in het interstitium als NH3-reservoir opgeslagen. In de verzamelbuis komt NH3 weer vrij en bindt daar H+, zodat NH4+ ontstaat en uitgescheiden kan worden.`}</Inline></p>
    </div>
  )
}
