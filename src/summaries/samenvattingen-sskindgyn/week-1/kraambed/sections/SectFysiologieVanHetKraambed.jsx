import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysiologie van het kraambed`}</Inline></SubHeading>
      <SubHeading><Inline>{`Borstvoeding op gang brengen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Borstvoeding komt op gang door een combinatie van hormonale veranderingen. Na de bevalling zijn prolactine hoog en oestradiol, progesteron en human placental lactogen snel gedaald. Daardoor kan de melkproductie starten. Tepelstimulatie zorgt vervolgens via oxytocine voor de toeschietreflex. Tegelijk remt dopamine deze reflex minder sterk. Zo blijft de lactatie op gang door een samenspel van vraag en aanbod.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vanaf dag 3 is er vaak sprake van stuwing. Dat betekent dat de borsten voller en gespannen aanvoelen doordat de melkproductie op gang komt.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom blijft borstvoeding doorgaan?
**Mini-antwoord:** Door herhaalde tepelstimulatie en het hormonale samenspel van prolactine en oxytocine.`} />
      <SubHeading><Inline>{`Perineum, lochia en involutie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de bevalling kan het perineum pijnlijk zijn, ook als het perineum intact is gebleven. Verzorging gebeurt met frequent spoelen met water. De huid hoort binnen 7 dagen dicht te zijn. Als hechtingen trekken, kunnen ze soms eerder verwijderd worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Lochia is het kraamvloeien. In de eerste dagen is dit meer dan normale menstruatie en het neemt geleidelijk af. De kleur verandert van helder rood naar lichtbruin. De duur verschilt per vrouw, maar ligt meestal tussen 2 en 6 weken postpartum.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uterus ondergaat involutie: het terugkeren naar de oorspronkelijke grootte. Dit gebeurt onder invloed van naweeën en kan pijnlijk zijn, maar is functioneel. Direct na de bevalling staat de fundus ongeveer ter hoogte van de navel. Daarna daalt de baarmoeder geleidelijk en komt zij na ongeveer 1 tot 2 weken onder de symfyse te liggen. De mate van contractie hangt samen met de hoeveelheid bloedverlies: hoe beter de uterus samentrekt, hoe minder bloedverlies.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens involutie wordt het endometrium afgestoten. Daarnaast treedt autolyse van het myometrium op: enzymatische vertering van het cytoplasma, terwijl het aantal cellen gelijk blijft. De bloedvaten blijven nog groter dan vóór de zwangerschap. De cervix is na ongeveer 1 week nog ongeveer 1 vinger toegankelijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij borstvoeding is de involutie sterker dan bij flesvoeding, door de hypo-oestrogene toestand.`}</Inline></p>
      <SubHeading><Inline>{`Psychosociale veranderingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de eerste dagen na de bevalling kan een babyblues optreden. Dit gebeurt vaak op de 3e of 4e dag postpartum en uit zich in emotionele labiliteit zonder duidelijke aanleiding. Daarnaast is hechting tussen moeder en kind een belangrijk onderdeel van deze periode.`}</Inline></p>
      <SubHeading><Inline>{`Menstruele cyclus na de bevalling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De menstruatiecyclus herstelt zich meestal vanaf ongeveer 6 weken postpartum, afhankelijk van of de vrouw borstvoeding geeft. Bij minimaal 6 borstvoedingen per dag kan lactatieamenorroe optreden tot ongeveer 6 maanden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verklaring hiervoor is hormonale remming: dopamine is laag tijdens zwangerschap en kraambed, waardoor prolactine hoog blijft. Prolactine remt GnRH, waardoor FSH en LH laag blijven. Daardoor blijft oestrogeen laag en ontstaat anovulatie. Dit heet lactatieamenorroe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Orale anticonceptie is mogelijk tijdens borstvoeding, al kan de melkproductie tijdelijk iets teruglopen. Ook de prikpil of minipil kan gebruikt worden bij volledige borstvoeding. Een IUD, met of zonder progestageen, kan vanaf 10 weken postpartum worden geplaatst. Sterilisatie is ook een mogelijkheid.`}</Inline></p>
    </div>
  )
}
