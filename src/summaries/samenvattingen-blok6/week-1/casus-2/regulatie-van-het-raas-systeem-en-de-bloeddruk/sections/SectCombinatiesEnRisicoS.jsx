import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Combinaties en risico’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat meerdere middelen op het RAAS kunnen aangrijpen, is het belangrijk om te weten dat combinatietherapie risico’s kan geven. In de module wordt vooral gewezen op hyperkaliëmie en hypotensie als belangrijke risico’s. Dat past bij het feit dat het RAAS normaal juist natrium vasthoudt en kalium uitscheidt. Als je dat systeem remt, kan kalium stijgen.`}</Inline></p>
    </div>
  )
}
