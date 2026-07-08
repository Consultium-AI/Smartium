import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 3: gesprek met de ouders of cliënt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als het mogelijk is, ga je in gesprek met de ouders. Dat heeft voordelen: zij zijn dan beter op de hoogte en voelen zich later minder overvallen. Bespreek de waargenomen signalen voordat je een melding doet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het gesprek:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`deel je je zorgen;`}</Inline></li>
        <li><Inline>{`leg je het doel van het gesprek uit;`}</Inline></li>
        <li><Inline>{`bespreek je de signalen die je hebt vastgesteld;`}</Inline></li>
        <li><Inline>{`moet je oppassen voor bagatelliseren;`}</Inline></li>
        <li><Inline>{`nodig je ouders uit om te reageren;`}</Inline></li>
        <li><Inline>{`maak je duidelijke afspraken over vervolgstappen.`}</Inline></li>
      </ul>
    </div>
  )
}
