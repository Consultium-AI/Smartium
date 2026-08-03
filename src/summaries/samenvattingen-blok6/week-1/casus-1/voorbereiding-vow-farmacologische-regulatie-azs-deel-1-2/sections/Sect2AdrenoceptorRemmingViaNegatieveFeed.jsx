import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`α2-adrenoceptor: remming via negatieve feedback`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Stimulatie van de α2-receptor leidt ook tot vasoconstrictie, maar dit effect is over het algemeen minder sterk dan bij α1. Belangrijker is dat de α2-receptor presynaptisch werkt en invloed heeft op de hoeveelheid noradrenaline die wordt afgegeven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De logische uitkomst van presynaptische stimulatie van de α2-receptor is een verlaging van de noradrenaline-afgifte. Dat past bij negatieve feedback: als er al veel noradrenaline aanwezig is, wordt de verdere afgifte afgeremd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`α2-adrenoceptoragonisten veroorzaken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlaagde transmitterafgifte;`}</Inline></li>
        <li><Inline>{`vasoconstrictie;`}</Inline></li>
        <li><Inline>{`verlaagde insuline-afgifte.`}</Inline></li>
      </ul>
    </div>
  )
}
