import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste behandeling is het stoppen van verdere schadelijke blootstelling. Dat is de kern van de aanpak. Als iemand blijft worden blootgesteld, zal de ziekte vaak doorgaan of verergeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat kan betekenen dat de werkplek moet worden aangepast met ventilatie of persoonlijke beschermingsmiddelen. Soms is dat niet genoeg en moet iemand ander werk zoeken om verdere blootstelling te voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De medicamenteuze behandeling hangt af van het type ILD. Bij aanhoudende ontsteking kunnen immunosuppressiva worden gebruikt. Bij fibrose kunnen antifibrotische middelen worden ingezet. Daarnaast kunnen longrevalidatie en zuurstoftherapie nodig zijn. In ernstige gevallen kan longtransplantatie worden overwogen.`}</Inline></p>
    </div>
  )
}
