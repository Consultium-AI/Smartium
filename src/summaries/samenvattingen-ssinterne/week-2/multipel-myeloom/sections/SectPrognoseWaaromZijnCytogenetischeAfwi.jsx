import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose: waarom zijn cytogenetische afwijkingen belangrijk?`}</Inline></SubHeading>
      <PBody text={`Multipel myeloom kan gepaard gaan met verschillende cytogenetische afwijkingen. Sommige daarvan zijn geassocieerd met een **ongunstige prognose**. Dat geldt in deze module voor:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**deletie 17p13**`}</Inline></li>
        <li><Inline>{`**translocatie t(4;14)**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat betekent dat deze afwijkingen wijzen op een minder gunstig beloop van de ziekte.`}</Inline></p>
    </div>
  )
}
