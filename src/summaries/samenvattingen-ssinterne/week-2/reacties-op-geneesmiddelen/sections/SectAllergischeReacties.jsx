import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Allergische reacties`}</Inline></SubHeading>
      <PBody text={`Bij een **allergische reactie** speelt het afweersysteem een centrale rol. Het lichaam reageert dan op het geneesmiddel of een afbraakproduct alsof het een schadelijke stof is. Dat betekent dat er een immunologische reactie optreedt.`} />
      <p className="leading-relaxed"><Inline>{`Allergische reacties kunnen verschillende verschijningsvormen hebben, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**huidreacties** zoals jeuk, roodheid of galbulten;`}</Inline></li>
        <li><Inline>{`**luchtwegklachten** zoals benauwdheid;`}</Inline></li>
        <li><Inline>{`**systemische reacties** zoals anafylaxie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een belangrijk punt is dat een allergische reactie niet altijd bij de eerste blootstelling optreedt. Vaak is eerst sensibilisatie nodig: het immuunsysteem moet het middel of een onderdeel daarvan eerst “leren kennen”.`}</Inline></p>
    </div>
  )
}
