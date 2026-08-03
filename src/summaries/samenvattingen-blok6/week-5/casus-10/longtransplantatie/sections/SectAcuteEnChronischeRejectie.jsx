import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute en chronische rejectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Afstoting kan ook optreden ondanks goede therapietrouw, bijvoorbeeld na een virale luchtweginfectie of bij refluxziekte. Als acute rejectie snel wordt herkend en behandeld, kan de longfunctie herstellen.`}</Inline></p>
      <PBody text={`Herhaalde acute rejecties kunnen leiden tot chronische schade. Dan ontstaat **chronische rejectie**, ook wel chronische afstoting of CLAD genoemd. Dit is een versneld verouderingsproces van de long met een slechte prognose. De overleving na het ontstaan van chronische rejectie is gemiddeld minder dan 2 jaar.`} />
      <PBody text={`**Aandacht-vraagje:** Waarom is therapietrouw zo belangrijk?
**Mini-antwoord:** Omdat de afweerremmende medicijnen levenslang nodig zijn om afstoting te voorkomen.`} />
    </div>
  )
}
