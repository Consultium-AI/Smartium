import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is een pneumothorax?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een pneumothorax betekent dat er lucht in de pleuraholte terechtkomt: de ruimte tussen de long en de borstwand. Normaal ligt de long mooi tegen de borstwand aan, maar als daar lucht tussen komt, ontstaat er druk op de long. Daardoor kan de long niet meer goed uitzetten en klapt hij gedeeltelijk of volledig samen. Dit wordt ook wel een “collapsed lung” genoemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De gevolgen zijn logisch: als de long minder goed open kan gaan, komt er minder lucht in de long en kan de zuurstofopname dalen. Dat geeft benauwdheid en vaak ook pijn op de borst. Bij een spanningspneumothorax kan de druk in de borstkas zo hoog worden dat ook de trachea en andere structuren naar de andere kant worden gedrukt.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er precies?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Er lekt lucht uit de long of vanuit de borstkas in de pleuraholte.`}</Inline></li>
        <li><Inline>{`Die lucht hoopt zich op en verhoogt de druk.`}</Inline></li>
        <li><Inline>{`De long kan minder goed uitzetten.`}</Inline></li>
        <li><Inline>{`De ademhaling wordt moeilijker.`}</Inline></li>
        <li><Inline>{`Bij een spanningspneumothorax kan de druk ook de grote vaten en de trachea verplaatsen.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** waarom geeft een pneumothorax benauwdheid?
**Mini-antwoord:** omdat de long door de lucht in de pleuraholte niet meer goed kan uitzetten, waardoor minder lucht wordt verplaatst.`} />
    </div>
  )
}
