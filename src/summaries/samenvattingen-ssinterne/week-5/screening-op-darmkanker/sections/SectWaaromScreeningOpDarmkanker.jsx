import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom screening op darmkanker?`}</Inline></SubHeading>
      <PBody text={`Darmkanker is een belangrijke ziekte voor screening, omdat het vaak voorkomt en ook veel sterfte geeft. In Nederland kregen vóór de start van het bevolkingsonderzoek bijna **13.000 mensen per jaar** de diagnose darmkanker, en overleden ruim **5000 mensen per jaar** aan deze ziekte. Daarmee stond darmkanker op de tweede plaats van meest voorkomende kankers in Nederland.`} />
      <p className="leading-relaxed"><Inline>{`Voor een bevolkingsonderzoek is niet alleen belangrijk dat een ziekte vaak voorkomt en ernstig is. Er moet ook iets te winnen zijn met vroege opsporing. Dat betekent dat screening moet leiden tot:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **daling van de incidentie**: minder nieuwe gevallen;`}</Inline></li>
        <li><Inline>{`een **daling van de mortaliteit**: minder sterfte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat is precies waarom darmkanker geschikt is voor screening. Vroege opsporing zonder gezondheidswinst zou vooral onrust geven bij mensen die zich gezond voelen. Screening is dus pas zinvol als het echt leidt tot minder ziekte en minder sterfte.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is “vroeger vinden” niet altijd genoeg?
**Mini-antwoord:** Omdat het pas zin heeft als vroeg opsporen ook leidt tot minder ziekte of minder sterfte.`} />
    </div>
  )
}
