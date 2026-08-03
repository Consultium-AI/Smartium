import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuur-base balans is klinisch belangrijk omdat stoornissen snel gevolgen hebben voor de pH van het bloed. De longen kunnen snel reageren, maar hebben een beperkte capaciteit. De nieren reageren langzamer, maar zijn onmisbaar voor langdurige compensatie. Bij chronische longziekten kan een respiratoire acidose ontstaan. Bij nierproblemen kan bicarbonaatverlies of verminderde zuur-excretie juist tot acidose leiden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook de samenhang met de kaliumbalans is belangrijk. In deze stof is al zichtbaar dat processen in de verzamelbuis niet alleen invloed hebben op H+, maar ook op andere ionenhuishoudingen. Dat maakt de zuur-base regulatie direct relevant voor de kliniek.`}</Inline></p>
    </div>
  )
}
