import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`X-thorax: techniek en uitgangspunten`}</Inline></SubHeading>
      <PBody text={`Een **X-thorax** is een conventioneel radiologisch onderzoek met **röntgenstralen**. Het standaardonderzoek wordt bij voorkeur in **twee richtingen** gemaakt: een **PA-opname** en een **laterale opname**.`} />
      <PBody text={`Bij een **PA-opname** staat de patiënt met de borst tegen de detector en gaat de straling van achter naar voren. Dit heeft een belangrijk voordeel: het **hart wordt zo min mogelijk vergroot afgebeeld**. Als een patiënt niet kan staan, kan de opname ook zittend of liggend worden gemaakt; dan spreek je van een **AP-opname**. Bij een AP-opname is de projectie minder gunstig, onder andere omdat het hart dan sneller vergroot lijkt.`} />
      <PBody text={`Bij de laterale opname is het ook belangrijk dat het hart zo klein mogelijk wordt afgebeeld. Daarom staat de patiënt met de **linkerzijde tegen de plaat**, omdat het hart meer links in de thorax ligt.`} />
      <PBody text={`**Aandacht-vraag:** Waarom is de PA-opname de standaard?
**Mini-antwoord:** Omdat het hart dan het minst vergroot wordt afgebeeld.`} />
    </div>
  )
}
