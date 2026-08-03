import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het medisch arbeidsongeschiktheidscriterium`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een beoordeling door het UWV moet aan drie voorwaarden worden voldaan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`er is uitval als rechtstreeks gevolg van ziekte, stoornis of handicap;`}</Inline></li>
        <li><Inline>{`daardoor zijn er beperkingen;`}</Inline></li>
        <li><Inline>{`door die beperkingen kan iemand het laatst verrichte eigen werk niet meer doen.`}</Inline></li>
      </ul>
      <PBody text={`Dit heet het **MAOC**: het medisch arbeidsongeschiktheidscriterium.`} />
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Is ziek zijn hetzelfde als arbeidsongeschikt zijn?**
Nee. Iemand kan ziek zijn zonder arbeidsongeschikt te zijn, als het eigen werk nog wel kan worden gedaan.`} />
    </div>
  )
}
