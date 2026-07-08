import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek en alarmsignalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een EUG of tubaruptuur kunnen tekenen van peritoneale prikkeling aanwezig zijn, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`drukpijn;`}</Inline></li>
        <li><Inline>{`loslaatpijn;`}</Inline></li>
        <li><Inline>{`spierverzet;`}</Inline></li>
        <li><Inline>{`opgezette buik;`}</Inline></li>
        <li><Inline>{`tekenen van bloedverlies.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook tachycardie en anemie kunnen passen. Koorts is niet typisch voor een EUG, maar sluit andere oorzaken zoals infectie niet volledig uit.`}</Inline></p>
    </div>
  )
}
