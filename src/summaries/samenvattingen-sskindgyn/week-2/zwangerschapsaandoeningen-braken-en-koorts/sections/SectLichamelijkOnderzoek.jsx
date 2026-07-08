import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij onderzoek let je op de algemene indruk, temperatuur, buikonderzoek, foetale hartactie, tekenen van infectie, long- en hartonderzoek en klachten bij mictie of flankpijn. Een soepele, niet-pijnlijke uterus, geen vochtverlies en een normale foetale hartfrequentie maken een opstijgende infectie met chorioamnionitis minder waarschijnlijk.`}</Inline></p>
    </div>
  )
}
