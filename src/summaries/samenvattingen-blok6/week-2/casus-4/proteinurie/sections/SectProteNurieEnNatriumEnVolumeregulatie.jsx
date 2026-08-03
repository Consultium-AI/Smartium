import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Proteïnurie en natrium- en volumeregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier reguleert niet alleen eiwitverlies, maar ook de balans van natrium en water. Dat is belangrijk voor de volumestatus van het lichaam.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Volumeregulatie** hangt vooral samen met **natriumregulatie**`}</Inline></li>
        <li><Inline>{`**Osmoregulatie** hangt vooral samen met **waterregulatie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de osmolaliteit stijgt, reageren osmoreceptoren. Dat leidt tot:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`afgifte van **ADH**, waardoor de nier water vasthoudt;`}</Inline></li>
        <li><Inline>{`**dorst**, waardoor je meer water drinkt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij nierinsufficiëntie kan de nier natrium minder goed uitscheiden. Daardoor neemt het totale natrium in het lichaam toe. Het lichaam houdt vervolgens ook meer water vast, waardoor het extracellulaire volume stijgt. De natriumconcentratie blijft daarbij relatief gelijk, omdat dorst en waterinname de osmolaliteit helpen corrigeren.`}</Inline></p>
    </div>
  )
}
