import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 1: Ritme`}</Inline></SubHeading>
      <PBody text={`Het normale ritme is het **sinusritme**. Dat betekent dat de sinusknoop het hart aanstuurt en dat de geleiding via de normale route verloopt.`} />
      <p className="leading-relaxed"><Inline>{`Omdat de sinusknoop rechtsboven in het rechteratrium ligt, loopt de depolarisatie van de boezems naar beneden en naar links. Daardoor is de P-top normaal positief in afleidingen I, II en III.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Elke P-top hoort gevolgd te worden door een QRS-complex. De normale frequentie van de sinusknoop in rust ligt tussen 60 en 100 slagen per minuut.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat is een belangrijk kenmerk van sinusritme?
**Mini-antwoord:** De P-top is positief in I, II en III en wordt gevolgd door een QRS-complex.`} />
    </div>
  )
}
