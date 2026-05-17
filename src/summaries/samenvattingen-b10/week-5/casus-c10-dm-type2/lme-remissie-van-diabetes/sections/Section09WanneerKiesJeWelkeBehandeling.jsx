import { Inline, PBody, DataTable } from './SectionShared'

const TAB3 = [
  ['Factor', 'Betekenis voor de behandeling'],
  ['BMI', 'Bij hogere BMI is de kans op remissie groter, en bariatrie komt sneller in beeld'],
  [
    'Etnische achtergrond',
    'Hindostaanse en Aziatische patiënten ontwikkelen DM2 vaak bij lager BMI en hebben hoger metabool risico',
  ],
  [
    'Ziekte duur en β-celfunctie',
    'Bij korte ziekteduur zijn β-cellen vaker nog deels herstelbaar',
  ],
  [
    'Cardiovasculair risico',
    'GLP-1-agonisten en SGLT2-remmers verlagen ook het cardiovasculaire risico',
  ],
  ['Nierfunctie', 'SGLT2-remmers vereisen voldoende nierfunctie'],
  ['Vergoeding', 'Duurdere behandelingen vragen ook aandacht voor financiële haalbaarheid'],
  [
    'Motivatie van de patiënt',
    'Succes hangt sterk samen met wat de patiënt haalbaar en wenselijk vindt',
  ],
]

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Wanneer kies je welke behandeling?`}</Inline>
      </h3>
      <p>
        <Inline>{`Bij het kiezen van een behandeling kijk je verder dan alleen de HbA1c-waarde. Belangrijke factoren zijn:`}</Inline>
      </p>
      <p className="font-medium text-slate-900 dark:text-slate-100">
        <Inline>{`Tabel 3. Factoren die de behandelkeuze bepalen`}</Inline>
      </p>
      <DataTable rows={TAB3} />
      <PBody
        text={`**Aandacht-vraagje:** Wat is vaak een praktische vuistregel?  
**Kort antwoord:** bij milder overgewicht ligt de nadruk vaker op leefstijl en medicatie; bij een hoge BMI wordt bariatrie sneller overwogen.`}
      />
    </div>
  )
}
