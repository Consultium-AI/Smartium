import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vitamine K-antagonisten`}</Inline></SubHeading>
      <PBody text={`De twee bekende vitamine K-antagonisten zijn **fenprocoumon** en **acenocoumarol**. Het belangrijkste verschil is de halfwaardetijd:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`fenprocoumon: ongeveer 150 uur;`}</Inline></li>
        <li><Inline>{`acenocoumarol: ongeveer 14 uur.`}</Inline></li>
      </ul>
      <PBody text={`Vitamine K-antagonisten werken pas na enkele dagen en moeten daarom bij de start gecombineerd worden met LMWH. Ook na stoppen werken ze nog enkele dagen door. Het effect is variabel en wordt gecontroleerd met de **INR**.`} />
      <p className="leading-relaxed"><Inline>{`De INR is een maat voor de antistolling. Meestal streef je naar een INR tussen 2,0 en 3,0. Veel medicijnen kunnen de werking beïnvloeden, zoals antibiotica, hormonen, antimycotica, anti-epileptica en antidepressiva.`}</Inline></p>
    </div>
  )
}
