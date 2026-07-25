import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beeldvorming: echo en CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij echografie zie je typische kenmerken van cirrose en portale hypertensie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nodulaire leverrand;`}</Inline></li>
        <li><Inline>{`heterogeen leverparenchym;`}</Inline></li>
        <li><Inline>{`vergrote lever;`}</Inline></li>
        <li><Inline>{`matige steatose;`}</Inline></li>
        <li><Inline>{`ascites;`}</Inline></li>
        <li><Inline>{`vergrote milt;`}</Inline></li>
        <li><Inline>{`open vena umbilicalis;`}</Inline></li>
        <li><Inline>{`afwijkende flow in de vena porta.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook op CT zie je een hobbelige levercontour en ascites. De vena porta en levervenen kunnen nog open zijn, terwijl de open vena umbilicalis wijst op portale hypertensie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Beeldvormende kenmerken die passen bij cirrose`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Typische bevindingen"], ["Echo", "nodulaire leverrand, heterogeen parenchym, ascites, splenomegalie, open vena umbilicalis"], ["CT", "hobbelige contour, afgestompte leverpunten, ascites, tekenen van portale hypertensie"]]} />
      <p className="leading-relaxed"><Inline>{`Een CT-beeld is niet specifiek voor één oorzaak. Het laat vooral zien dát er cirrose is, niet waardoor die is ontstaan.`}</Inline></p>
    </div>
  )
}
