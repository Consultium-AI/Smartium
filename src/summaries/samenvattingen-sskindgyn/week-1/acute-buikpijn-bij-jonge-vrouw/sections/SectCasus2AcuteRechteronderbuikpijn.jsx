import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 2: acute rechteronderbuikpijn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een jonge vrouw met acute verergering van al twee weken bestaande rechteronderbuikpijn, misselijkheid en een positieve zwangerschapstest vraagt om een brede differentiaaldiagnose. Ook hier moet je direct aan een EUG denken, maar andere oorzaken horen er ook bij.`}</Inline></p>
      <SubHeading><Inline>{`Mogelijke diagnosen`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EUG`}</Inline></li>
        <li><Inline>{`torsio ovariae`}</Inline></li>
        <li><Inline>{`ovulatiebloeding`}</Inline></li>
        <li><Inline>{`appendicitis`}</Inline></li>
        <li><Inline>{`PID`}</Inline></li>
        <li><Inline>{`urineweginfectie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Minder passend zijn onder andere endometriose, niersteen en miskraam, afhankelijk van het totale beeld.`}</Inline></p>
    </div>
  )
}
