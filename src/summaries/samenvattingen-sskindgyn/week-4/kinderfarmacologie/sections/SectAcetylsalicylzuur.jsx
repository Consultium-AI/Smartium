import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acetylsalicylzuur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acetylsalicylzuur kan worden gebruikt bij trombocytenaggregatieremming en bij de ziekte van Kawasaki. Voor koorts en pijn wordt het bij kinderen niet meer gebruikt, omdat het bij acute virale infecties het syndroom van Reye kan veroorzaken. Daarom is paracetamol de eerste keus als koortsverlager bij kinderen.`}</Inline></p>
    </div>
  )
}
