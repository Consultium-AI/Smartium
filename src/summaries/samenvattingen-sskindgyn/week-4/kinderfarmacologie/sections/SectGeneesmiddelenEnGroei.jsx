import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geneesmiddelen en groei`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige geneesmiddelen kunnen de groei of ontwikkeling van kinderen beïnvloeden. Daarom moeten ze bij kinderen niet of met terughoudendheid worden gebruikt.`}</Inline></p>
    </div>
  )
}
