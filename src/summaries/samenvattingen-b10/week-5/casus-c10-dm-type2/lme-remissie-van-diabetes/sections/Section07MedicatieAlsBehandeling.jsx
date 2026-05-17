import { Inline, DataTable } from './SectionShared'

const TAB2 = [
  ['Behandeling', 'Belangrijkste werking', 'Effect op gewicht', 'Effect op remissie'],
  [
    'Leefstijl',
    'Minder metabole belasting, minder vetstapeling',
    'Vaak gewichtsverlies',
    'Kan remissie geven en helpt remissie behouden',
  ],
  [
    'GLP-1-agonisten',
    '↑ glucose-afhankelijke insuline, ↓ glucagon, ↑ verzadiging, tragere maaglediging',
    'Gewichtsverlies',
    'Kan sterke verbetering geven, maar vaak niet blijvend zonder medicatie',
  ],
  [
    'SGLT2-remmers',
    'Minder glucose-opname in nier, glucose via urine',
    'Verlies van glucose/calorieën',
    'Ondersteunt glucosecontrole',
  ],
  [
    'Bariatrische chirurgie',
    'Snelle metabole veranderingen, o.a. incretine-effect en gewichtsverlies',
    'Sterk gewichtsverlies',
    'Grootste kans op remissie',
  ],
]

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Medicatie als behandeling`}</Inline>
      </h3>
      <p>
        <Inline>{`Naast leefstijl kan **gewichtsreducerende medicatie** helpen bij het bereiken van remissie of sterke verbetering van de glucoseregulatie. In deze stof gaat het vooral om **GLP-1-agonisten** en **SGLT2-remmers**.`}</Inline>
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`GLP-1-agonisten`}</Inline>
      </h4>
      <p>
        <Inline>{`GLP-1-agonisten werken via stimulatie van de **GLP-1-receptor**. Ze hebben meerdere effecten:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`ze verhogen de **glucose-afhankelijke insulinesecretie** door de β-cellen;`}</Inline>
        </li>
        <li>
          <Inline>{`ze remmen de **glucagonafgifte**;`}</Inline>
        </li>
        <li>
          <Inline>{`ze vertragen de **maaglediging**;`}</Inline>
        </li>
        <li>
          <Inline>{`en ze zorgen voor **centrale verzadiging**.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`Door deze combinatie eet iemand vaak minder, wat leidt tot **gewichtsverlies** en minder energie-inname. Het effect op glucose en gewicht is dus gunstig. In de stof komt naar voren dat semaglutide bijvoorbeeld duidelijk meer gewichtsverlies geeft dan placebo, en dat veel patiënten de streefwaarde voor HbA1c bereiken tijdens voortgezet gebruik.`}</Inline>
      </p>
      <p>
        <Inline>{`Belangrijk is wel dat dit geen garantie geeft op blijvende remissie. Als de medicatie wordt gestopt, verdwijnen de effecten vaak weer. Dat betekent dat medicatie meestal wel helpt bij goede glucoseregulatie, maar dat **duurzame medicatievrije remissie** minder vaak voorkomt dan bij sommige andere strategieën.`}</Inline>
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`SGLT2-remmers`}</Inline>
      </h4>
      <p>
        <Inline>{`SGLT2-remmers werken op een ander niveau. Ze blokkeren de **natrium-glucose-cotransporter 2** in de **proximale tubulus van de nier**. Daardoor wordt glucose minder goed teruggeresorbeerd en verlaat glucose het lichaam via de urine: **glucosurie**. Dit gaat samen met een **osmotische diurese** en dus met verlies van glucose én calorieën.`}</Inline>
      </p>
      <p className="font-medium text-slate-900 dark:text-slate-100">
        <Inline>{`Tabel 2. Belangrijkste behandelingen en hun werking`}</Inline>
      </p>
      <DataTable rows={TAB2} />
    </div>
  )
}
