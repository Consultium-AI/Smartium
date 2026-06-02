import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mogelijke hulpmiddelen:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`mutatieanalyse door de patholoog, bijvoorbeeld BRAF of NRAS;`}</Inline></li>
        <li><Inline>{`opnieuw stadiëring;`}</Inline></li>
        <li><Inline>{`bij een nieuwe primaire tumor opnieuw re-excisie en eventueel sentinel node-biopsie;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`bij metastase aanvullend stadiërend onderzoek, zoals FDG-PET-CT.`}</Inline></p>
    </div>
  )
}
