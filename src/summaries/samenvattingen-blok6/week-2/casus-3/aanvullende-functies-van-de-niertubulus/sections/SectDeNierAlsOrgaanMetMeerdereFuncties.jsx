import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De nier als orgaan met meerdere functies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier is niet alleen belangrijk voor water- en zoutbalans, maar heeft ook aanvullende functies die klinisch heel relevant zijn. In deze module staan drie van die functies centraal: EPO-productie, calciumfosfaathuishouding en magnesiumhuishouding. Deze processen lijken op het eerste gezicht los van elkaar te staan, maar ze hebben allemaal te maken met de manier waarop de nier reageert op veranderingen in de samenstelling van het bloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nier krijgt veel bloed aangevoerd en verbruikt zelf ook veel zuurstof. Daardoor is de zuurstofspanning in delen van de nier laag. Juist dat maakt de nier geschikt als sensor voor zuurstoftekort. Daarnaast werkt de nier samen met andere organen, zoals het beenmerg, de longen, de darmen, de botten en de bijschildklieren.`}</Inline></p>
    </div>
  )
}
