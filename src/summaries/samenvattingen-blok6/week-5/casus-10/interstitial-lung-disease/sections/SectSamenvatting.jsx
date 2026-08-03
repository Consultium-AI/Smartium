import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ILD is een brede en complexe groep longaandoeningen waarbij het interstitium van de long is aangedaan. De klachten zijn vaak aspecifiek, met droge hoest, dyspneu en vermoeidheid. De diagnose vraagt om een combinatie van anamnese, lichamelijk onderzoek, longfunctie, bloedonderzoek, HRCT en soms BAL of longbiopt. De belangrijkste patronen zijn UIP, NSIP, BIP en OP. Oorzaken kunnen idiopathisch zijn, maar ook samenhangen met auto-immuniteit, blootstelling, medicatie, bestraling of granulomateuze ziekte. Fibrose ontstaat door een verstoorde wondgenezing met overmatige collageenafzetting en verlies van longarchitectuur. Multidisciplinaire samenwerking is essentieel. IPF is de bekendste fibrotische ILD met een slechte prognose en wordt behandeld met antifibrotica en ondersteunende zorg. Bij connective tissue disease-ILD zijn de onderliggende systemische kenmerken en auto-antistoffen belangrijke aanwijzingen.`}</Inline></p>
    </div>
  )
}
