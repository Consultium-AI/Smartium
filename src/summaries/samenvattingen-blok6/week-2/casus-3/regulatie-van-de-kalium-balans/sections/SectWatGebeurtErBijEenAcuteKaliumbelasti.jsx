import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat gebeurt er bij een acute kaliumbelasting?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichaam kan een kaliumbelasting opvangen via twee hoofdmechanismen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Cellulaire opname van kalium**`}</Inline></li>
        <li><Inline>{`**Renale uitscheiding van kalium**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De eerste stap is dus tijdelijk: kalium verschuift de cel in. Daarna moet de nier het overtollige kalium definitief uitscheiden.`}</Inline></p>
      <SubHeading><Inline>{`Welke situatie geeft de meeste moeite om de serumkaliumwaarde normaal te houden?`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Effect op kaliumverplaatsing"], ["Astma-aanval", "Adrenaline en salbutamol stimuleren opname van kalium in de cel"], ["Toediening van insuline", "Insuline stimuleert de Na-K-ATPase en bevordert kaliumopname in de cel"], ["Gebruik van spironolacton", "Minder stimulatie van de Na-K-ATPase door blokkade van de mineralocorticoïdreceptor"], ["Metabole alkalose", "Kalium gaat de cel in doordat H+ uit de cel naar het plasma verschuift"]]} />
      <PBody text={`De situatie waarbij het lichaam de meeste moeite heeft om de serumkaliumwaarde normaal te houden is dus **gebruik van spironolacton**. Spironolacton is een **mineralocorticoïdreceptorantagonist**, waardoor aldosteron minder effect heeft op de Na-K-ATPase.`} />
      <PBody text={`**Aandachtsvraag:** waarom helpt insuline bij hyperkaliëmie?
**Mini-antwoord:** omdat insuline de Na-K-ATPase stimuleert, waardoor kalium de cel in gaat.`} />
    </div>
  )
}
