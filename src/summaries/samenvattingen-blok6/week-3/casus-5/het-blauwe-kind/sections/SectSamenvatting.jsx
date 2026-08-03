import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyanose is een blauwverkleuring door te veel gedeoxygeneerd hemoglobine. Je onderscheidt centrale cyanose, perifere cyanose en differentiële cyanose. Centrale cyanose is altijd pathologisch en wijst op een probleem met zuurstofopname of -transport. Bij aangeboren hartafwijkingen ontstaat cyanose vooral door een rechts-links shunt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tetralogie van Fallot is de meest voorkomende cyanotische hartafwijking. De vier kenmerken zijn VSD, pulmonaalstenose, overrijdende aorta en rechterventrikelhypertrofie. De cyanose ontstaat doordat zuurstofarm bloed via het VSD in de aorta terechtkomt. Een belangrijke complicatie is de hypoxic spell, een levensbedreigende aanval met plotselinge cyanose en geen souffle. De behandeling van Tetralogie van Fallot is chirurgisch, maar kan later leiden tot pulmonalisklepinsufficiëntie.`}</Inline></p>
    </div>
  )
}
