import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mechanisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij irritatief contacteczeem is er directe toxische schade aan keratinocyten, bijvoorbeeld door oplosmiddelen of verf. Daarbij gebeurt het volgende:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de intercellulaire lipidenmatrix raakt verstoord;`}</Inline></li>
        <li><Inline>{`de huid verliest meer water;`}</Inline></li>
        <li><Inline>{`de barrière wordt zwakker;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`innate immuniteit wordt geactiveerd via IL-1α en IL-1β.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat hiervoor geen sensibilisatie nodig is. De huid reageert dus direct op de irriterende stof.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Waarom past dit bij een schilder?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een schilder komt vaak in aanraking met stoffen die de huid irriteren. Ook veel handen wassen en contact met zeep kunnen de huid verder uitdrogen en beschadigen. Daardoor ontstaat sneller irritatief contacteczeem.`}</Inline></p>
    </div>
  )
}
