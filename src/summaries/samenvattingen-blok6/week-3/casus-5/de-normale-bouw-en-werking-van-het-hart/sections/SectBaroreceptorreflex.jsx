import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Baroreceptorreflex`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De baroreceptorreflex is een snel, neuraal mechanisme. Baroreceptoren zitten in de sinus caroticus en de aortaboog. Zij meten rek van de vaatwand en geven informatie door aan de medulla oblongata.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een bloeddrukdaling:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neemt de sympathische activiteit toe`}</Inline></li>
        <li><Inline>{`neemt de parasympathische activiteit af`}</Inline></li>
        <li><Inline>{`stijgen hartfrequentie en contractiliteit`}</Inline></li>
        <li><Inline>{`vernauwen arteriolen`}</Inline></li>
        <li><Inline>{`stijgt de bloeddruk weer`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een bloeddrukstijging gebeurt het omgekeerde.`}</Inline></p>
    </div>
  )
}
