import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Primair spontane pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een primair spontane pneumothorax ontstaat zonder duidelijke onderliggende longziekte en zonder andere aanwijsbare oorzaak. Vaak speelt een ruptuur van kleine luchtblaasjes, blebs genoemd, een rol. Dat zijn kleine luchtbelletjes aan de top van de long. Als zo’n bleb scheurt, komt lucht in de pleuraholte terecht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze vorm hangt vaak samen met roken. Ook cannabis roken verhoogt het risico. Daarnaast zijn er genetische factoren en is een lang en smal postuur een bekende risicofactor, vooral bij jonge mannen. De gedachte is dat de anatomie van de borstkas extra trekkracht op de longtoppen kan geven.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke risicofactoren`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gescheurde blebs`}</Inline></li>
        <li><Inline>{`roken`}</Inline></li>
        <li><Inline>{`cannabisgebruik`}</Inline></li>
        <li><Inline>{`genetische aanleg`}</Inline></li>
        <li><Inline>{`lang en slank postuur`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** wat is een bleb?
**Mini-antwoord:** een klein luchtblaasje aan de longtop dat kan scheuren en zo een pneumothorax kan veroorzaken.`} />
    </div>
  )
}
