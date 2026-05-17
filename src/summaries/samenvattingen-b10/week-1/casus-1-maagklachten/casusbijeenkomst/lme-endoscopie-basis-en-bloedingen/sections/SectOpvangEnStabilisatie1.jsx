export default function SectOpvangEnStabilisatie1() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 text-center lg:text-left">OPVANG EN STABILISATIE (1)</h2>
      <div className="grid gap-10 lg:grid-cols-3">
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Initiele stabilisatie en monitoring</h3>
          <p>
            Bij patiënten met een verdenking op een gastro-intestinale bloeding moet de eerste beoordeling zich richten op het herkennen van hemodynamische instabiliteit en het inschatten van de ernst van de bloeding.
          </p>
          <p>
            Veel patiënten presenteren zich op de Spoedeisende Hulp met klachten zoals hematemesis, melena of hematochezie. In deze fase is het van groot belang om snel onderscheid te maken tussen een stabiele patiënt en een patiënt met tekenen van shock of dreigende circulatoire collaps.
          </p>
          <p>Belangrijke klinische parameters zijn:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>bloeddruk;</li>
            <li>hartfrequentie;</li>
            <li>bewustzijnsniveau;</li>
            <li>urineproductie.</li>
          </ul>
          <p>
            Daarnaast moet worden gelet op symptomen zoals duizeligheid, collaps of syncope, die kunnen wijzen op een significante volumedepletie. Het doel van de initiële beoordeling is het bepalen of directe resuscitatie en intensieve monitoring noodzakelijk zijn.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Infuus en volumetherapie</h3>
          <p>De eerste behandeling bestaat uit:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>aanleggen van ten minste één goedlopend infuus met grote infuusnaald;</li>
            <li>zo nodig plaatsen van een tweede infuus voor snelle vochttoediening;</li>
            <li>volume-resuscitatie met crystalloïden zoals NaCl 0,9% of Ringer-lactaat;</li>
            <li>
              continue monitoring van: bloeddruk, polsfrequentie, urineproductie (&gt;30 ml/uur).
            </li>
          </ul>
          <p>
            Patiënten met ernstige instabiliteit of belangrijke comorbiditeit dienen te worden opgenomen op een bewaakte afdeling zoals MCU of ICU. Daarnaast moet men alert zijn op aspiratie, vooral bij patiënten met hematemesis, verminderd bewustzijn of massaal bloedverlies. Bij deze groepen kan endotracheale intubatie noodzakelijk zijn.
          </p>
          <p>
            De Nederlandse richtlijn benadrukt dat aspiratie een belangrijke complicatie is bij acute bloedingen en daarom actief moet worden voorkomen.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Monitoring</h3>
          <p>Na de initiële stabilisatie is het belangrijk om het risico op complicaties te bepalen.</p>
          <p>Risicostratificatie helpt bij het bepalen van:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>de urgentie van endoscopie;</li>
            <li>de noodzaak tot opname;</li>
            <li>de kans op recidiefbloeding of mortaliteit.</li>
          </ul>
          <p>De Nederlandse richtlijn adviseert het gebruik van klinische scoresystemen zoals:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Blatchford-score</strong>
            </li>
            <li>
              <strong>Rockall-score</strong>
            </li>
          </ul>
          <p>
            Deze scores combineren klinische parameters en laboratoriumwaarden om het risico op een ernstige bloeding te voorspellen.
          </p>
          <p className="italic">
            Wil je meer weten over deze scores, bekijk dan de verdiepende informatie op de volgende pagina.
          </p>
        </section>
      </div>
    </div>
  )
}
