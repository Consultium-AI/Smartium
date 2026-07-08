import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`9 tot 12+ maanden: richting zelfstandig bewegen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het vierde kwartaal zie je dat het kind steeds zelfstandiger wordt in voortbewegen, zitten, staan en lopen. De motoriek wordt gevarieerder en doelgerichter.`}</Inline></p>
      <SubHeading><Inline>{`Voortbewegen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het kind kan zich steeds beter verplaatsen en gebruikt daarbij verschillende houdingen en overgangen.`}</Inline></p>
      <SubHeading><Inline>{`Zitten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het kind heeft veel variatie in zithoudingen en komt makkelijk in en uit zit. Dat laat zien dat de balans en de motorische controle verder zijn ontwikkeld.`}</Inline></p>
      <SubHeading><Inline>{`Langslopen en staan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij staan zie je dat het kind nog steun kan gebruiken, vaak met een brede basis. Dat is typisch voor een pas verworven vaardigheid. Het kind zoekt soms nog balans rond het bekken, maar kan wel in positie blijven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij langslopen en staan zie je dat het kind nog niet volledig stabiel is, maar al wel duidelijk vooruitgaat in controle en coördinatie.`}</Inline></p>
      <SubHeading><Inline>{`Lopen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het eerste los lopen zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een brede basis;`}</Inline></li>
        <li><Inline>{`de armen hoog gehouden;`}</Inline></li>
        <li><Inline>{`kleine pasjes;`}</Inline></li>
        <li><Inline>{`het “op slot zetten” van gewrichten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat zijn kenmerken van vroeg los lopen. Het kind kan dan al los staan en los lopen, maar doet dat nog voorzichtig en met veel compensatie.`}</Inline></p>
      <SubHeading><Inline>{`Handfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook de handfunctie blijft zich verder ontwikkelen, passend bij de toenemende motorische zelfstandigheid.`}</Inline></p>
    </div>
  )
}
