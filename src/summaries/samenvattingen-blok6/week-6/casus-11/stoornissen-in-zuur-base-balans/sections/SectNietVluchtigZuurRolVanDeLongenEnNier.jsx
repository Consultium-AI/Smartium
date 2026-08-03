import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet-vluchtig zuur: rol van de longen en nieren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet-vluchtig zuur kan niet simpelweg worden uitgeademd. In eerste instantie wordt het in veneus bloed gebufferd, vooral door het CO₂/HCO₃⁻-systeem. Daarbij wordt bicarbonaat verbruikt en omgezet in CO₂.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de longen wordt dat CO₂ uitgeademd, maar het verbruikte bicarbonaat komt niet vanzelf terug. Daardoor daalt de bicarbonaatconcentratie in het arteriële bloed en blijft de pH verlaagd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De reactie op die daling komt in twee stappen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Respiratoire compensatie:** de ademhaling neemt toe, waardoor pCO₂ daalt.`}</Inline></li>
        <li><Inline>{`**Renale compensatie:** de nieren vullen bicarbonaat weer aan en scheiden H⁺ uit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De nieren doen dit op twee manieren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`in de proximale tubulus door meer bicarbonaat te reabsorberen;`}</Inline></li>
        <li><Inline>{`in de verzamelbuis door nieuw bicarbonaat te vormen en af te geven aan het bloed.`}</Inline></li>
      </ul>
      <PBody text={`In de **α-intercalaircellen** van de verzamelbuis wordt CO₂ via koolzuuranhydrase omgezet in H⁺ en HCO₃⁻. Het H⁺ wordt actief uitgescheiden in de voorurine met protonpompen, terwijl het bicarbonaat naar het bloed gaat.`} />
    </div>
  )
}
