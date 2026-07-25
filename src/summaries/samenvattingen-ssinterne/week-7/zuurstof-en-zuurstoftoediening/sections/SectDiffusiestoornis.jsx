import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diffusiestoornis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een diffusiestoornis is de overgang van zuurstof van de alveolus naar het pulmonale vaatbed verminderd. Dat kan voorkomen bij emfyseem, interstitieel longlijden zoals idiopathische pulmonale fibrose of NSIP, ARDS, pneumonie en longoedeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een diffusiestoornis reageert goed op zuurstoftoediening.`}</Inline></p>
    </div>
  )
}
