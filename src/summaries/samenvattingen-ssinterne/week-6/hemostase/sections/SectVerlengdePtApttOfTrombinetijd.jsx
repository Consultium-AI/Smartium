import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verlengde PT, aPTT of trombinetijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een afwijkende stollingstest moet je nadenken over de mogelijke oorzaak. De context van de patiënt is daarbij belangrijk. Bij een patiënt op de IC met sepsis past bijvoorbeeld een diffuse intravasale stolling. Bij levercirrose past eerder leverfalen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 8. Oorzaken van verlengde stollingstesten`}</Inline></SubHeading>
      <DataTable rows={[["Verlengde test", "Mogelijke oorzaken"], ["Verlengde aPTT", "Factor VIII-, IX-, XI- of XII-deficiëntie; heparine/LMWH; lupus anticoagulans"], ["Verlengde PT", "Factor VII-deficiëntie; vitamine K-deficiëntie"], ["Verlengde trombinetijd", "Heparine/LMWH; dys-/afibrinogenemie"], ["Verlengde PT en aPTT", "Factor II-, V- of X-deficiëntie; fibrinogeendeficiëntie; dys-/afibrinogenemie; DIS; verdunningscoagulopathie; leverstoornis; vitamine K-deficiëntie; vitamine K-antagonisten"]]} />
    </div>
  )
}
