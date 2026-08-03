import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Parasympathisch systeem: acetylcholine en muscarine-receptoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het parasympathische systeem wordt acetylcholine afgegeven in het ganglion. Daar bindt het aan nicotine-receptoren. In het eindorgaan wordt opnieuw acetylcholine afgegeven, maar daar bindt het aan muscarine-receptoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De muscarine-receptor is betrokken bij de reactie in de eindorganen van het parasympathische zenuwstelsel. Deze receptor komt vooral voor in het parasympathische systeem, maar speelt ook een rol in de zweetklieren, die juist bij het sympathische systeem horen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De parasympathische effecten die hierbij horen zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`minder contracties van de hartspier;`}</Inline></li>
        <li><Inline>{`verwijding van de arteriën;`}</Inline></li>
        <li><Inline>{`contractie van gladde spieren in de ogen, bronchiën, maag-darmkanaal en blaas;`}</Inline></li>
        <li><Inline>{`toename van afgifte uit traanklieren;`}</Inline></li>
        <li><Inline>{`toename van afgifte uit speekselklieren;`}</Inline></li>
        <li><Inline>{`toename van afgifte uit bronchiale klieren;`}</Inline></li>
        <li><Inline>{`toename van afgifte uit zweetklieren.`}</Inline></li>
      </ul>
    </div>
  )
}
