import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Valkuilen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de interpretatie moet je rekening houden met stoorfactoren zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vermoeidheid;`}</Inline></li>
        <li><Inline>{`pijn;`}</Inline></li>
        <li><Inline>{`depressie;`}</Inline></li>
        <li><Inline>{`faalangst;`}</Inline></li>
        <li><Inline>{`delier;`}</Inline></li>
        <li><Inline>{`intoxicatie;`}</Inline></li>
        <li><Inline>{`medicatie;`}</Inline></li>
        <li><Inline>{`zintuiglijke beperkingen;`}</Inline></li>
        <li><Inline>{`uitval na herseninfarct;`}</Inline></li>
        <li><Inline>{`bewust onderpresteren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Na een delier of alcoholabusus moet je bovendien voldoende tijd laten voordat je een NPO uitvoert.`}</Inline></p>
    </div>
  )
}
