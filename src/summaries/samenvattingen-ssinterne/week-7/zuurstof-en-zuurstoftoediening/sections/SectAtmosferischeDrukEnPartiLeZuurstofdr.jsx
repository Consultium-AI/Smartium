import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Atmosferische druk en partiële zuurstofdruk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De totale atmosferische druk is op zeeniveau 760 mmHg, oftewel 101 kPa. De partiële zuurstofdruk in droge lucht is 21% van 760 mmHg, dus ongeveer 160 mmHg. Op grotere hoogte is de atmosferische druk lager, en daardoor is ook de partiële zuurstofdruk lager. In Bolivia is die druk dus lager dan in Nederland.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is zuurstof op grote hoogte minder beschikbaar?
**Mini-antwoord:** omdat de totale luchtdruk lager is, en daardoor ook de partiële zuurstofdruk daalt.`} />
      <p className="leading-relaxed"><Inline>{`In de alveoli is de totale druk nog steeds gelijk aan de atmosferische druk, maar de partiële drukken van de gassen worden verlaagd door waterdamp. De lucht in de longen is bij lichaamstemperatuur volledig bevochtigd. Daarnaast is de alveolaire zuurstofdruk lager dan in de buitenlucht, omdat zuurstof voortdurend vanuit de alveoli naar het bloed diffundeert en in de weefsels wordt verbruikt.`}</Inline></p>
    </div>
  )
}
