import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invloed van leverfunctiestoornissen op ADME`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Leverfunctiestoornissen kunnen ontstaan bij bijvoorbeeld levercirrose, hepatitis of leverfalen. De lever werkt dan minder goed, en dat heeft gevolgen voor verschillende onderdelen van ADME.`}</Inline></p>
      <SubHeading><Inline>{`Absorptie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Over het algemeen heeft een leverfunctiestoornis weinig directe invloed op de absorptie van geneesmiddelen.`}</Inline></p>
      <SubHeading><Inline>{`Distributie`}</Inline></SubHeading>
      <PBody text={`Bij leverfunctiestoornissen kan **hypoalbuminemie** optreden: een tekort aan albumine. Albumine wordt normaal door de lever gemaakt en kan ook verloren gaan door lekkage. Albumine bindt geneesmiddelen in het bloed. Alleen de **vrije fractie** is actief.`} />
      <p className="leading-relaxed"><Inline>{`Als er minder albumine is, neemt de vrije fractie van sterk eiwitgebonden geneesmiddelen toe. Dat kan leiden tot een sterkere werking en meer kans op toxiciteit.`}</Inline></p>
      <DataTable rows={[["Situatie", "Gevolg"], ["Minder albumine", "Minder binding van geneesmiddelen"], ["Meer vrije fractie", "Meer actief geneesmiddel"], ["Gevolg", "Meer kans op bijwerkingen/toxiciteit"]]} />
      <PBody text={`Daarnaast kan **ascites** optreden: abnormale vochtophoping in de buikholte. Daardoor wordt het hydrofiele compartiment groter. **Hydrofiele geneesmiddelen** verdelen zich vooral in de extracellulaire vloeistof, dus ook in ascites. Het verdelingsvolume neemt dan toe, waardoor soms een hogere dosis nodig is om dezelfde bloedspiegel te bereiken. Lipofiele geneesmiddelen worden hierdoor minder beïnvloed.`} />
      <SubHeading><Inline>{`Metabolisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij leverfunctiestoornissen werken de CYP-enzymen minder goed en worden ze minder aangemaakt. Daardoor worden geneesmiddelen die via deze enzymen worden afgebroken trager geklaard. Dat geeft een hoger risico op bijwerkingen en toxiciteit.`}</Inline></p>
      <PBody text={`Voor **prodrugs** geldt juist dat ze minder goed worden omgezet in hun actieve vorm. Daardoor kan het effect afnemen.`} />
      <SubHeading><Inline>{`First-pass effect bij leverfunctiestoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het first-pass effect is bij leverfunctiestoornissen verminderd door een lagere leverdoorbloeding en verminderde enzymactiviteit. Daardoor komt meer van het actieve geneesmiddel in de bloedbaan terecht, wat het risico op bijwerkingen en toxiciteit verhoogt.`}</Inline></p>
      <SubHeading><Inline>{`Eliminatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Geneesmiddelen verlaten het lichaam via de nieren of via de gal. Vaak moeten ze in de lever eerst worden omgezet naar kleinere, inactieve metabolieten. Als de leverfunctie verminderd is, gebeurt dat trager. Daardoor blijven geneesmiddelen langer actief in het lichaam en kunnen de bloedspiegels stijgen.`}</Inline></p>
      <SubHeading><Inline>{`Voorbeelden`}</Inline></SubHeading>
      <DataTable rows={[["Geneesmiddel", "Gevolg bij leverfunctiestoornis"], ["Fenytoïne", "Minder albumine betekent meer vrije fractie en meer kans op bijwerkingen"], ["Ceftriaxon", "Bij ascites kan het verdelingsvolume toenemen, waardoor een hogere dosis nodig kan zijn"], ["Clopidogrel", "Minder omzetting naar actieve vorm, dus minder bloedplaatjesremming en meer risico op trombose"], ["Propranolol", "Sterker beïnvloed door verminderde leverfunctie dan lorazepam, omdat propranolol een hoog first-pass effect heeft"], ["Volledig renaal geklaard middel", "De eliminatie verandert nauwelijks, omdat het niet afhankelijk is van de lever"]]} />
    </div>
  )
}
