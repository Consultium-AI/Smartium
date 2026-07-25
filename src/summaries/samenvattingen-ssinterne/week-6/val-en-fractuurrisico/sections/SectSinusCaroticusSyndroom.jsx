import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sinus caroticus syndroom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Duizeligheid bij scheren kan passen bij het hypersensitieve sinus caroticus syndroom. Hierbij geeft stimulatie van de sinus caroticus in de hals een sterke cardiovasculaire reactie, waardoor tijdelijk minder bloed naar de hersenen stroomt. Er zijn drie vormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cardiodepressief;`}</Inline></li>
        <li><Inline>{`vasodepressief;`}</Inline></li>
        <li><Inline>{`gecombineerd.`}</Inline></li>
      </ul>
    </div>
  )
}
