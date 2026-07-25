import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Definitie en epidemiologie`}</Inline></SubHeading>
      <PBody text={`COPD staat voor **Chronic Obstructive Pulmonary Disease**. Het is een veelvoorkomende, chronische longaandoening met een hoge ziektelast en sterfte. COPD is wereldwijd een belangrijke doodsoorzaak en komt steeds vaker voor, onder andere doordat mensen langer leven en risicofactoren langer aanwezig blijven.`} />
      <PBody text={`De kern van COPD is dat iemand **aanhoudende luchtwegklachten** heeft, vooral **kortademigheid** en **hoesten**, met of zonder sputumproductie. Daarbij is er sprake van **luchtwegobstructie**: de lucht kan moeilijker uit de longen stromen. Die obstructie is meestal **niet volledig reversibel**. COPD ontstaat meestal door blootstelling aan schadelijke stoffen of gassen, vooral door roken.`} />
      <SubHeading><Inline>{`Risicofactoren`}</Inline></SubHeading>
      <PBody text={`De belangrijkste risicofactor is **roken**. Ook andere vormen van tabaksgebruik, zoals sigaren, pijp, waterpijp en cannabis, tellen mee. Daarnaast spelen luchtvervuiling, beroepsmatige blootstelling en terugkerende luchtweginfecties een rol. Ook erfelijke en patiëntgebonden factoren kunnen bijdragen, zoals alfa-1-antitrypsinedeficiëntie.`} />
      <PBody text={`**Tabel 1. Belangrijke risicofactoren voor COPD**`} />
      <DataTable rows={[["Hostfactoren", "Expositie"], ["Genetische factoren, zoals alfa-1-antitrypsinedeficiëntie", "Roken"], ["Infecties op kinderleeftijd", "Sociaal-economische status"], ["Luchtweghyperactiviteit", "Luchtvervuiling binnenshuis"], ["IgE", "Beroepsmatige blootstelling"], ["Astma bronchiale", "Chronische bronchitis"], ["Oudere leeftijd", "Terugkerende luchtweginfecties"], ["Vrouwelijk geslacht", ""]]} />
      <PBody text={`Een belangrijk gegeven is dat ook **niet-rokers** COPD kunnen ontwikkelen. Dat komt doordat meerdere risicofactoren samen een chronische ontstekingsreactie kunnen uitlokken.`} />
      <SubHeading><Inline>{`Verlies van longfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Iedereen verliest vanaf ongeveer het 30e levensjaar langzaam longfunctie. Bij gezonde mensen is dat verlies beperkt, maar bij COPD is het verlies veel sterker. Stoppen met roken kan dit versnelde verlies afremmen of stoppen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is stoppen met roken zo belangrijk bij COPD?
**Mini-antwoord:** Omdat het versnelde verlies van longfunctie dan kan afnemen of stoppen.`} />
    </div>
  )
}
