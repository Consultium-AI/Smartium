import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De homeostase van natrium, kalium en zuur-base hangt nauw met elkaar samen. De nieren, ADH, aldosteron en de ademhaling spelen hierin de hoofdrol. Bij nierfunctiestoornissen kan kalium opstapelen en kan acidose ontstaan. Diuretica kunnen juist leiden tot volumeverlies, hyponatriëmie, hypokaliëmie en metabole alkalose. Bij insulinetekort ontstaat hyperglykemie met osmotische diurese, hypernatriëmie, ketoacidose en hyperkaliëmie. Het belangrijkste leerpunt is steeds dat je niet één afwijking los bekijkt, maar steeds nadenkt over de samenhang tussen water, elektrolyten en zuur-base.`}</Inline></p>
    </div>
  )
}
