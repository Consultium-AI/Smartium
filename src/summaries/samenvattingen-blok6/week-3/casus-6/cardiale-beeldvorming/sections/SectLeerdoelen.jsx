import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat de belangrijkste anatomische vlakken en richtingstermen zijn en waarom die nodig zijn voor oriëntatie in radiologische beelden;`}</Inline></li>
        <li><Inline>{`hoe röntgen, CT, MRI en echografie in grote lijnen werken;`}</Inline></li>
        <li><Inline>{`wat de belangrijkste klinische toepassingen, voordelen en nadelen van deze beeldvormende technieken zijn;`}</Inline></li>
        <li><Inline>{`waarom een cor-thorax-ratio niet betrouwbaar is op een AP-thoraxfoto;`}</Inline></li>
        <li><Inline>{`waarom verschillende contrastfasen bij CT belangrijk zijn;`}</Inline></li>
        <li><Inline>{`hoe je een T1-gewogen en T2-gewogen MRI-opname herkent;`}</Inline></li>
        <li><Inline>{`wat cardiale CT is en waarom ECG-synchronisatie nodig is;`}</Inline></li>
        <li><Inline>{`wanneer cardiale CT wel en niet gebruikt wordt;`}</Inline></li>
        <li><Inline>{`wat het verschil is tussen een CT-kalkscore en CT-coronairen;`}</Inline></li>
        <li><Inline>{`wat de betekenis is van een hoge of lage kalkscore;`}</Inline></li>
        <li><Inline>{`wat de belangrijkste voor- en nadelen van cardiale CT zijn.`}</Inline></li>
      </ul>
    </div>
  )
}
