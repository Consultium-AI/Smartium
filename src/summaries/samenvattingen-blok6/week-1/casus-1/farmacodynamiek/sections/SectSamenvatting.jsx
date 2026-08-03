import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Farmacodynamiek gaat over de effecten van geneesmiddelen op het lichaam. Receptoren spelen daarin een centrale rol. Geneesmiddelen kunnen agonisten, partiële agonisten of antagonisten zijn. Een volle agonist kan het maximale effect bereiken, een partiële agonist niet. Potentie zegt iets over de benodigde concentratie; effectiviteit zegt iets over het maximale effect.`}</Inline></p>
      <PBody text={`Concentratie-responsrelaties worden vaak logaritmisch weergegeven, omdat dat overzicht geeft over lage en hoge concentraties. Daaruit volgen begrippen als **Emax**, **EC50** en **pEC50**. Antagonisten kunnen competitief of allosterisch werken. Met een **Schildplot** kun je bepalen of er sprake is van competitief reversibel antagonisme en kun je de **pA2** van de antagonist afleiden.`} />
    </div>
  )
}
