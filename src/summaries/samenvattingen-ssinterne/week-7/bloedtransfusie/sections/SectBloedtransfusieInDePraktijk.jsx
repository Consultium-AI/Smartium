import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedtransfusie in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bloedtransfusie kan levensreddend zijn, bijvoorbeeld bij groot trauma met massaal bloedverlies. Maar transfusie wordt ook gebruikt als ondersteunende behandeling, bijvoorbeeld bij beenmergfalen door een beenmerg- of bloedziekte, of door medicatie zoals chemotherapie. Het is dus een behandeling die in veel specialismen voorkomt en die zorgvuldig moet worden ingezet. Voor een veilige transfusie zijn voorbereiding, juiste bloedproductkeuze en kennis van risico’s essentieel.`}</Inline></p>
    </div>
  )
}
