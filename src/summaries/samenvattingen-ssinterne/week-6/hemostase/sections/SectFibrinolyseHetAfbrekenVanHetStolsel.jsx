import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fibrinolyse: het afbreken van het stolsel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Fibrinolyse is het afbreken van fibrine. Daardoor wordt het stolsel weer afgebroken en blijft de stolselvorming beperkt. Dit is nodig om te voorkomen dat een stolsel te groot of te langdurig aanwezig blijft.`}</Inline></p>
      <PBody text={`Bij fibrinolyse wordt plasminogeen omgezet in plasmin. Plasmin knipt fibrine af tot fibrine-afbraakproducten. Deze afbraakproducten kunnen in het bloed worden gemeten als **D-dimeren**. Hoe meer D-dimeren aanwezig zijn, hoe meer fibrinolyse er is.`} />
      <PBody text={`**Aandachtsvraag:** wat meet je bij fibrinolyse in het bloed?
**Mini-antwoord:** D-dimeren, als teken van afbraak van fibrine.`} />
    </div>
  )
}
