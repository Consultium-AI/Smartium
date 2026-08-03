import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 1: ritme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het normale ritme is een sinusritme. Dat betekent dat de sinusknoop het hart aanstuurt en dat de geleiding via de normale route verloopt. Omdat de sinusknoop rechtsboven in de rechterboezem ligt, wijst de atriale depolarisatie naar beneden en naar links. Daardoor is de P-top normaal positief in I, II en III.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij sinusritme geldt ook dat elke P-top gevolgd wordt door een QRS-complex.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wat is het belangrijkste kenmerk van sinusritme?**
De P-top is positief in I, II en III en elke P-top wordt gevolgd door een QRS-complex.`} />
    </div>
  )
}
