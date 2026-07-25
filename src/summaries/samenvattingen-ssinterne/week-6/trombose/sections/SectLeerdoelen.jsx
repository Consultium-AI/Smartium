import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beschrijven wat de oorzaken van trombose zijn;`}</Inline></li>
        <li><Inline>{`een casus met verdenking op trombose beoordelen en aangeven welke diagnostiek nodig is om de diagnose te stellen;`}</Inline></li>
        <li><Inline>{`uitleggen hoe trombose behandeld wordt en welke keuzes daarin gemaakt worden;`}</Inline></li>
        <li><Inline>{`beschrijven welke klachten kunnen passen bij het posttrombotisch syndroom en hoe dit wordt gescoord;`}</Inline></li>
        <li><Inline>{`beschrijven waaruit de behandeling van het posttrombotisch syndroom bestaat.`}</Inline></li>
      </ul>
    </div>
  )
}
