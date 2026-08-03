import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invloed van nierfunctiestoornissen op ADME`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Normaal zorgen de nieren voor de eliminatie van geneesmiddelen via de urine. Bij een nierfunctiestoornis neemt die eliminatie af, waardoor geneesmiddelen zich kunnen ophopen en het risico op toxiciteit stijgt.`}</Inline></p>
      <SubHeading><Inline>{`Absorptie en metabolisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij nierfunctiestoornissen is er geen direct verband met absorptie of metabolisme, omdat de nieren daar geen hoofdrol in spelen.`}</Inline></p>
      <SubHeading><Inline>{`Distributie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook hier speelt albumine een rol. Als bij ernstige nierfunctiestoornissen albumine via de urine verloren gaat, daalt het albuminegehalte in het bloed. Daardoor neemt de vrije, actieve fractie van bepaalde geneesmiddelen toe. Dat kan leiden tot meer bijwerkingen en toxiciteit.`}</Inline></p>
      <SubHeading><Inline>{`Eliminatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De grootste invloed van nierfunctiestoornissen ligt bij de eliminatie. Als de nieren minder goed werken, worden geneesmiddelen trager uitgescheiden via de urine. Daardoor kunnen ze ophopen in het bloed.`}</Inline></p>
    </div>
  )
}
