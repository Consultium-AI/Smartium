import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe CO₂ en bicarbonaat worden omgezet`}</Inline></SubHeading>
      <PBody text={`De omzetting van CO₂ naar bicarbonaat en terug gebeurt vooral in de rode bloedcellen. Daar zit het enzym **koolzuuranhydrase**, dat de reactie enorm versnelt.`} />
      <p className="leading-relaxed"><Inline>{`De somreactie is:`}</Inline></p>
      <PBody text={`**CO₂ + H₂O ⇄ H⁺ + HCO₃⁻**`} />
      <p className="leading-relaxed"><Inline>{`Zonder koolzuuranhydrase zou deze omzetting te traag verlopen om de grote hoeveelheid CO₂ effectief te verwerken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de periferie wordt CO₂ uit de weefsels opgenomen in het bloed. Een groot deel wordt vervoerd als bicarbonaat, een deel gebonden aan eiwitten en een klein deel opgelost als CO₂. In de longen gebeurt het omgekeerde: bicarbonaat wordt weer omgezet in CO₂ en dat CO₂ wordt uitgeademd. Zo blijft de arteriële pCO₂ normaal.`}</Inline></p>
    </div>
  )
}
