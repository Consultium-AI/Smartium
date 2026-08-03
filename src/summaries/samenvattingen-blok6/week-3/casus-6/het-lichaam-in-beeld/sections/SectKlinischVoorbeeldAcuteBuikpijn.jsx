import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch voorbeeld: acute buikpijn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij pijn in de rechteronderbuik kan echografie worden gebruikt om appendicitis uit te sluiten. Daarbij let men op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de diameter van de appendix;`}</Inline></li>
        <li><Inline>{`wandverdikking en ontstekingsverschijnselen;`}</Inline></li>
        <li><Inline>{`vrij vocht in de buik;`}</Inline></li>
        <li><Inline>{`andere oorzaken, zoals gal- of nierstenen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Echografie is hier nuttig omdat het snel is, geen straling gebruikt en direct aan het bed kan worden uitgevoerd. Bovendien kun je tijdens het onderzoek meteen zien wat er gebeurt, bijvoorbeeld of druk met de transducer pijn veroorzaakt.`}</Inline></p>
    </div>
  )
}
