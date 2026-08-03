import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen waarom het belangrijk is om de zuur-base balans strak te handhaven;`}</Inline></li>
        <li><Inline>{`de rol van longen en nieren afzonderlijk én samen beschrijven bij het bewaren van die balans;`}</Inline></li>
        <li><Inline>{`respiratoire en metabole oorzaken van zuur-base stoornissen van elkaar onderscheiden op basis van arteriële pH, pCO₂ en bicarbonaat;`}</Inline></li>
        <li><Inline>{`een arteriële bloedgasanalyse interpreteren en daaruit de primaire oorzaak en de mate van compensatie afleiden;`}</Inline></li>
        <li><Inline>{`met behulp van nomogrammen de meest waarschijnlijke zuur-base stoornis bepalen en het base excess kwantificeren;`}</Inline></li>
        <li><Inline>{`het begrip anion gap gebruiken bij de diagnostiek van metabole acidose;`}</Inline></li>
        <li><Inline>{`bij een enkelvoudige zuur-base stoornis een passende behandelrichting bedenken.`}</Inline></li>
      </ul>
    </div>
  )
}
