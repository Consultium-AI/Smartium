import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HP komt niet extreem vaak voor, maar is wel een belangrijke interstitiële longziekte. De incidentie verschilt per populatie. In sommige gebieden ligt die rond 1–3 per 100.000 per jaar, terwijl hogere cijfers zijn beschreven in andere regio’s.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Binnen de interstitiële longziekten is HP een van de meest voorkomende vormen, na idiopathische pulmonale fibrose en ILD bij bindweefselziekten. De aandoening komt duidelijk vaker voor in risicogroepen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`boeren;`}</Inline></li>
        <li><Inline>{`vogelhouders;`}</Inline></li>
        <li><Inline>{`paddenstoelenwerkers.`}</Inline></li>
      </ul>
    </div>
  )
}
