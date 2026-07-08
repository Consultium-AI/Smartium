import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus en klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de besproken patiënte is er naast goed ingestelde diabetes mellitus geen bijzonderheden in de anamnese. Omdat zij diabetes heeft, is er een indicatie voor controle en partus in de tweede lijn bij de gynaecoloog. Daarnaast komt zij in aanmerking voor prenatale diagnostiek, omdat maternale diabetes een verhoogd risico geeft op neurale buisdefecten en cardiale defecten. De internist wordt betrokken bij de zorg. De bevalling zal à terme worden ingeleid.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook wordt besproken dat kraamzorg tijdig moet worden aangevraagd, bij voorkeur rond 20 weken. De kraamcontroles kunnen later door een verloskundige in de buurt worden gedaan.`}</Inline></p>
    </div>
  )
}
