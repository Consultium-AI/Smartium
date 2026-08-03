import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bètablokkers: het basisidee`}</Inline></SubHeading>
      <PBody text={`Bètablokkers zijn geneesmiddelen die de werking van **adrenerge bèta-receptoren** remmen. In deze module ligt de nadruk op drie veelgebruikte middelen:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Metoprolol**`}</Inline></li>
        <li><Inline>{`**Atenolol**`}</Inline></li>
        <li><Inline>{`**Propranolol**`}</Inline></li>
      </ul>
      <PBody text={`Deze middelen lijken op elkaar, maar ze verschillen in **selectiviteit**, **metabolisme** en dus ook in hun klinische gebruik. Een belangrijk uitgangspunt is dat **metoprolol en atenolol selectieve bètablokkers zijn**, terwijl **propranolol aselectief** is.`} />
      <SubHeading><Inline>{`Wat betekent selectief of aselectief?`}</Inline></SubHeading>
      <PBody text={`Een **selectieve** bètablokker heeft vooral affiniteit voor de **bèta1-receptor**. Een **aselectieve** bètablokker blokkeert zowel **bèta1** als **bèta2**. De selectiviteit heeft dus te maken met de vraag of een middel vooral aan de bèta1-receptor bindt, of ook duidelijk aan de bèta2-receptor.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is dat belangrijk?
**Mini-antwoord:** Omdat blokkade van bèta2-receptoren andere effecten kan geven dan blokkade van alleen bèta1-receptoren.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
