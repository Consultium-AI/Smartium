import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is vasculitis?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vasculitis betekent ontsteking van de bloedvatwand. Daardoor raakt het vat beschadigd en kan het bloed minder goed doorstromen. Het gevolg kan zijn dat weefsel in het verzorgingsgebied van dat vat zuurstof tekortkomt of zelfs afsterft. Dat maakt vasculitis klinisch belangrijk: snelle herkenning en behandeling zijn nodig om blijvende schade te voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vasculitis kan op zichzelf bestaan, maar ook voorkomen in het kader van een andere aandoening, bijvoorbeeld een systeemziekte. In deze samenvatting staan twee hoofdgroepen centraal: vasculitis van de kleine vaten en vasculitis van de grote vaten.`}</Inline></p>
    </div>
  )
}
