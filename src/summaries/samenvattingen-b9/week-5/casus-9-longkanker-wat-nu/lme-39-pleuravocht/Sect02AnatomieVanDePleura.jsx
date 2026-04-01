export default function Sect02AnatomieVanDePleura() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anatomie van de pleura</h2>
      <p>
        De <span className="font-semibold">pleura</span> is een dun vlies rond de longen. Het bestaat uit twee bladen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <span className="font-semibold">viscerale pleura</span>: dit blad ligt direct op het longoppervlak;
        </li>
        <li>
          de <span className="font-semibold">pariëtale pleura</span>: dit blad bekleedt de binnenkant van de thoraxwand, de thoracale zijde van het mediastinum en het diafragma.
        </li>
      </ul>
      <p>
        Tussen deze twee bladen ligt de <span className="font-semibold">pleuraholte</span>. In de normale situatie liggen de pleurabladen vrijwel tegen elkaar aan en zit er maar een heel dun laagje pleuravocht tussen. Er is dus eigenlijk niet echt sprake van een{' '}
        {'\u201C'}echte holte{'\u201D'} zolang er geen extra lucht of vocht aanwezig is. Pas als er zich lucht of vocht ophoopt, wordt duidelijk waarom deze ruimte toch als holte wordt aangeduid.
      </p>
      <p>
        De pleura heeft een groot oppervlak, ongeveer <span className="font-semibold">4000 cm²</span> bij een gezonde volwassene. Toch zit er in de pleuraholte maar{' '}
        <span className="font-semibold">enkele milliliters pleuravocht</span>. Dat is een belangrijk gegeven: er is normaal dus heel weinig vocht aanwezig, maar dat kleine beetje is wel functioneel.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Mesotheel, bindweefsel en stomata</h3>
      <p>
        De oppervlakte van de pleura bestaat uit <span className="font-semibold">mesotheelcellen</span>. Onder deze cellen ligt een dunne laag bindweefsel. Door dit bindweefsel lopen bloedvaten en lymfebanen. Die zijn belangrijk voor de productie en de afvoer van pleuravocht.
      </p>
      <p>
        De <span className="font-semibold">pariëtale pleura</span> bevat zogenaamde <span className="font-semibold">stomata</span>: openingen tussen mesotheelcellen die uitmonden in lymfebanen. Hierdoor kan vocht uit de pleuraholte worden afgevoerd. De <span className="font-semibold">viscerale pleura</span> heeft geen stomata. Daardoor verschilt de afvoer van vocht tussen beide pleurabladen.
      </p>
      <p>
        {'>'}{' '}
        <span className="font-semibold">Aandacht vraag:</span> Waarom is dat onderscheid belangrijjk?{' '}
        <br />
        {'>'}{' '}
        <span className="font-semibold">Mini-antwoord:</span> Omdat de pariëtale pleura vocht veel makkelijker kan afvoeren via lymfe, terwijl de viscerale pleura juist geen stomata heeft.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Bloedvoorziening van de pleura</h3>
      <p>De bloedvoorziening verschilt ook tussen beide bladen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Pariëtale pleura</span>: krijgt zuurstofrijk bloed uit de <span className="font-semibold">systemische arteriële circulatie</span>, vooral via de intercostale arteriën. De veneuze afvoer loopt via de systemische veneuze circulatie. De capillairen liggen relatief dicht bij de pleuraholte, ongeveer{' '}
          <span className="font-semibold">10–12 micrometer</span> ervan vandaan.
        </li>
        <li>
          <span className="font-semibold">Viscerale pleura</span>: krijgt zuurstofrijk bloed ook uit de systemische arteriële circulatie, maar dan via takken van de <span className="font-semibold">a. bronchialis</span>. De veneuze afvoer loopt via de <span className="font-semibold">pulmonaal veneuze circulatie</span>. De capillairen liggen hier verder van de pleuraholte, ongeveer{' '}
          <span className="font-semibold">20–50 micrometer</span> ervan vandaan.
        </li>
      </ul>
      <p>Dat verschil in ligging en afvoer is belangrijk, omdat het meespeelt in de productie van pleuravocht.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste anatomische kenmerken van de pleura</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Structuur</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerken</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klinisch belang</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Viscerale pleura</td>
              <td className="px-4 py-3 align-top">Bekleedt de long en de longkwabben; geen stomata</td>
              <td className="px-4 py-3 align-top">Minder directe lymfatische afvoer van pleuravocht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Pariëtale pleura</td>
              <td className="px-4 py-3 align-top">Bekleedt thoraxwand, mediastinum en diafragma; wel stomata</td>
              <td className="px-4 py-3 align-top">Belangrijke plek voor afvoer van pleuravocht</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pleuraholte</td>
              <td className="px-4 py-3 align-top">Ruimte tussen beide pleurabladen</td>
              <td className="px-4 py-3 align-top">Normaal slechts enkele milliliters vocht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Mesotheel</td>
              <td className="px-4 py-3 align-top">Buitenkant van de pleura</td>
              <td className="px-4 py-3 align-top">Speelt een rol bij vochttransport</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Lymfebanen/stomata</td>
              <td className="px-4 py-3 align-top">Vooral in de pariëtale pleura</td>
              <td className="px-4 py-3 align-top">Belangrijk voor reabsorptie van pleuravocht</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
