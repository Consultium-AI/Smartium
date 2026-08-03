import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek en behandeling van ILD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose van ILD berust op een combinatie van kliniek, beeldvorming, longfunctie, bloedonderzoek en soms een longbiopt. HRCT is daarbij cruciaal. Multidisciplinair overleg is essentieel voor zowel diagnose als behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het diagnostisch proces begint met een goede anamnese en lichamelijk onderzoek. Daarna volgen zo nodig bloedonderzoek, radiologie en longfunctieonderzoek. Als er dan nog geen duidelijke diagnose is, kunnen aanvullende onderzoeken nodig zijn, zoals BAL, transbronchiale cryobiopsie of een chirurgisch longbiopt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na de diagnose beoordeel je de ernst van de ziekte. Daarbij let je op kernuitkomsten zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`forced vital capacity`}</Inline></li>
        <li><Inline>{`DLCOc`}</Inline></li>
        <li><Inline>{`HRCT`}</Inline></li>
        <li><Inline>{`symptomen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna bepaal je of behandelen of observeren het beste is. Ook complicaties en comorbiditeit moeten actief worden opgespoord en behandeld.`}</Inline></p>
    </div>
  )
}
