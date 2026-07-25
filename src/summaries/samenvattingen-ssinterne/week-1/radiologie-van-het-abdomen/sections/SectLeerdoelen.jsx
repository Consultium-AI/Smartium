import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`alle organen en de belangrijkste bloedvaten herkennen op een CT-abdomen;`}</Inline></li>
        <li><Inline>{`grofweg de organen en het skelet herkennen op een buikoverzichtfoto (X-BOZ);`}</Inline></li>
        <li><Inline>{`eenvoudige klinische casussen oplossen;`}</Inline></li>
        <li><Inline>{`levercirrose herkennen op een CT;`}</Inline></li>
        <li><Inline>{`vrije lucht herkennen op een X-BOZ.`}</Inline></li>
      </ul>
    </div>
  )
}
