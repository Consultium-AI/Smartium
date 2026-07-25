import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Levercirrose: het grote plaatje`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Levercirrose is een eindstadium van chronische leverziekte. Daarbij raakt de normale bouw van de lever verstoord en ontstaat er littekenvorming met knobbels en een hobbelige leverstructuur. Daardoor kan het bloed minder goed door de lever stromen en ontstaat portale hypertensie: een verhoogde druk in het poortadersysteem. Dat heeft grote gevolgen, zoals ascites, splenomegalie, collateralen en varices.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk kenmerk van cirrose is dat de leverfunctie achteruitgaat. De lever maakt dan minder goed eiwitten aan, verwerkt bilirubine slechter en de stolling raakt ontregeld. Ook kunnen de nieren in de problemen komen. Daarom zie je bij ernstige cirrose vaak een combinatie van icterus, oedeem, ascites, stollingsstoornissen en nierfunctiestoornissen.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Waarom vallen icterus en oedeem samen zo op?**
Omdat deze combinatie vaak past bij een leveraandoening, vooral bij subacute hepatitis, cirrose en alcoholische hepatitis.`} />
    </div>
  )
}
