import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interferenties: storende factoren bij laboratoriumonderzoek`}</Inline></SubHeading>
      <PBody text={`Een **interferentie** is een factor die de meting verstoort en daardoor een foutieve uitslag kan geven. De uitslag kan dan vals verhoogd of vals verlaagd zijn.`} />
      <SubHeading><Inline>{`Hemolyse`}</Inline></SubHeading>
      <PBody text={`**Hemolyse** betekent dat rode bloedcellen kapotgaan en hun inhoud vrijkomt in het bloedmonster. Dit kan bijvoorbeeld ontstaan tijdens of na de bloedafname, of door onjuiste behandeling van het monster.`} />
      <p className="leading-relaxed"><Inline>{`Hemolyse kan de uitslag verstoren omdat stoffen uit de bloedcellen in het monster terechtkomen. Daardoor kan een bepaling onbetrouwbaar worden.`}</Inline></p>
      <SubHeading><Inline>{`Andere interferenties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Twee andere voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Lipemie**: een troebel monster door veel vetdeeltjes in het bloed. Dit kan metingen verstoren.`}</Inline></li>
        <li><Inline>{`**Icterus**: een verhoogde hoeveelheid bilirubine in het bloed, waardoor sommige metingen beïnvloed kunnen worden.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** wat is het probleem van een interferentie?
**Mini-antwoord:** de uitslag lijkt dan betrouwbaar, maar geeft eigenlijk een vertekend beeld.`} />
    </div>
  )
}
