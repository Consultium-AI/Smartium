import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Groep penicillines: piperacilline-tazobactam`}</Inline></SubHeading>
      <PBody text={`Binnen de penicillines zijn al verschillende middelen bekend. Daar komt **piperacilline-tazobactam** bij. Dit middel hoort bij de **veel bredere spectrum penicillines**.`} />
      <p className="leading-relaxed"><Inline>{`De penicillines kun je grofweg zo zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Smal spectrum**: penicilline, flucloxacilline`}</Inline></li>
        <li><Inline>{`**Breed spectrum**: amoxicilline, Augmentin`}</Inline></li>
        <li><Inline>{`**Veel breder spectrum**: piperacilline-tazobactam`}</Inline></li>
      </ul>
      <PBody text={`Piperacilline-tazobactam dekt in Nederland normaal gesproken een groot aantal verwekkers. Denk aan **pneumokokken**, **Enterococcus faecalis**, **Enterobacterales zonder AmpC of ESBL**, **Pseudomonas**, **S. aureus** en **anaeroben**. Dat maakt het een breed middel dat vaak wordt ingezet wanneer je meerdere mogelijke verwekkers tegelijk wilt afdekken.`} />
      <PBody text={`**Aandacht-vraagje:** waarom is dit middel zo breed?
**Mini-antwoord:** omdat het veel grampositieve en gramnegatieve bacteriën dekt, inclusief Pseudomonas en anaeroben.`} />
    </div>
  )
}
