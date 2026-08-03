import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vlakken en richtingen in de radiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij beeldvorming is het heel belangrijk dat je goed kunt oriënteren. Beelden van het lichaam worden namelijk in verschillende vlakken bekeken. Als je weet welk vlak je ziet, kun je anatomische structuren en afwijkingen veel makkelijker plaatsen.`}</Inline></p>
    </div>
  )
}
