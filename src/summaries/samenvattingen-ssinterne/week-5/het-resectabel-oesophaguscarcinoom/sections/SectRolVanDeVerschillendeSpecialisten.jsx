import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rol van de verschillende specialisten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De MDL-arts speelt een belangrijke rol in de snelle diagnostiek en kan ook lokale behandeling uitvoeren bij oppervlakkige afwijkingen. De radiotherapeut is betrokken bij de bestraling en bij de afweging of definitieve chemoradiotherapie passend is. De internist-oncoloog is betrokken bij de systemische behandeling en de neoadjuvante chemoradiotherapie. De chirurg beoordeelt de operatieve mogelijkheden en voert de resectie uit. De radioloog en nucleair geneeskundige leveren beeldvorming en stadiëring. De verpleegkundig specialist en diëtist ondersteunen de patiënt in het traject.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sneldiagnostiek heeft als voordeel dat de logistiek goed op elkaar is afgestemd. Daardoor worden wachttijd en onzekerheid voor de patiënt zo klein mogelijk gehouden.`}</Inline></p>
    </div>
  )
}
