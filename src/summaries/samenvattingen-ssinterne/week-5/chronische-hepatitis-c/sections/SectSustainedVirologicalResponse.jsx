import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sustained virological response`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk begrip bij hepatitis C-behandeling is sustained virological response, vaak afgekort als SVR. Dit betekent dat het virus na behandeling niet meer aantoonbaar is. SVR staat dus voor genezing van de infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door de jaren heen is de effectiviteit van behandeling sterk verbeterd. De behandeling ontwikkelde zich van interferon naar combinaties met ribavirine en later naar direct werkende antivirale middelen. Daardoor is de kans op genezing steeds groter geworden, ook bij patiënten met cirrose.`}</Inline></p>
    </div>
  )
}
