import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beleid bij een oudere met vallen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De aanpak is multifactorieel. Eerst probeer je de medicatie te saneren, vooral middelen die orthostase kunnen geven, zoals furosemide, sertraline en timolol. Ook kijk je kritisch naar middelen zonder duidelijke indicatie maar met mogelijk valrisico, zoals temazepam, tramadol en betahistine.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast geef je leefstijladviezen en praktische adviezen, bijvoorbeeld zittend scheren bij sinus caroticus-overgevoeligheid. Fysiotherapie of ergotherapie kan hierbij helpen.`}</Inline></p>
    </div>
  )
}
