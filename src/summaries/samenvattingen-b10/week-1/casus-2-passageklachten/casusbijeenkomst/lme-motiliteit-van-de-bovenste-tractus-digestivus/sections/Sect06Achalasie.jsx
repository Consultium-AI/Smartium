export default function Sect06Achalasie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Achalasie</h2>
      <p>
        Bij normaal slikken ontspant de LES tegelijk met de slikactie in de farynx. De bolus wordt door peristaltiek naar
        de maag vervoerd en daarna trekt de LES weer samen.
      </p>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">achalasie</strong> is er een{' '}
        <strong className="text-slate-900 dark:text-slate-100">failure to relax</strong>: de LES ontspant onvoldoende,
        waardoor er een verhoogde rustdruk ontstaat en passage van voedsel wordt belemmerd. Tegelijk ontbreekt de normale
        slokdarmperistaltiek, of er zijn alleen gelijktijdige drukverhogingen in plaats van peristaltiek.
      </p>
      <p>
        De oorzaak is een progressieve ontsteking en degeneratie van ganglioncellen in de{' '}
        <strong className="text-slate-900 dark:text-slate-100">plexus myentericus van Auerbach</strong>. Mogelijk spelen
        virale triggers mee, maar er zijn sterke aanwijzingen dat achalasie een{' '}
        <strong className="text-slate-900 dark:text-slate-100">auto-immuunziekte</strong> is.
      </p>
      <p>Er bestaat ook <strong className="text-slate-900 dark:text-slate-100">secundaire achalasie</strong>, bijvoorbeeld door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">ziekte van Chagas</strong>;
        </li>
        <li>
          een <strong className="text-slate-900 dark:text-slate-100">maligniteit</strong> die compressie geeft ter plaatse
          van de EGJ;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">sarcoïdose</strong>.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Symptomen van achalasie</h3>
      <p>De belangrijkste klachten zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">dysfagie voor vast en vloeibaar voedsel</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">regurgitatie</strong>, vaak refractair voor PPI;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">retrosternale pijn</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gewichtsverlies</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hoesten</strong>, vooral {'\u2019'}s nachts, en soms aspiratie.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 3. Symptoomscore bij verdenking achalasie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Klacht</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100 text-center">0 punten</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100 text-center">1 punt</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100 text-center">2 punten</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100 text-center">3 punten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-2 align-top font-medium text-slate-900 dark:text-slate-100">Gewichtsverlies</td>
              <td className="p-2 align-top text-center">geen</td>
              <td className="p-2 align-top text-center">≤ 4 kg</td>
              <td className="p-2 align-top text-center">5–10 kg</td>
              <td className="p-2 align-top text-center">≥ 11 kg</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-medium text-slate-900 dark:text-slate-100">Dysfagie</td>
              <td className="p-2 align-top text-center">geen</td>
              <td className="p-2 align-top text-center">incidenteel</td>
              <td className="p-2 align-top text-center">dagelijks</td>
              <td className="p-2 align-top text-center">elke maaltijd</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-medium text-slate-900 dark:text-slate-100">Retrosternale pijn</td>
              <td className="p-2 align-top text-center">geen</td>
              <td className="p-2 align-top text-center">incidenteel</td>
              <td className="p-2 align-top text-center">dagelijks</td>
              <td className="p-2 align-top text-center">elke maaltijd</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-medium text-slate-900 dark:text-slate-100">Regurgitatie</td>
              <td className="p-2 align-top text-center">geen</td>
              <td className="p-2 align-top text-center">incidenteel</td>
              <td className="p-2 align-top text-center">dagelijks</td>
              <td className="p-2 align-top text-center">elke maaltijd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">Eckardt score van 4 of hoger</strong> wijst op mogelijk actieve achalasie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Diagnostiek</h3>
      <p>
        Bij verdenking op achalasie moet altijd een <strong className="text-slate-900 dark:text-slate-100">gastroscopie</strong>{' '}
        worden verricht om een mechanische obstructie en <strong className="text-slate-900 dark:text-slate-100">pseudo-achalasie</strong>{' '}
        door maligniteit uit te sluiten. De gouden standaard voor diagnose is echter{' '}
        <strong className="text-slate-900 dark:text-slate-100">HRM</strong> (
        <strong className="text-slate-900 dark:text-slate-100">high resolution manometrie</strong>).
      </p>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">bariumslikfoto</strong> kan ondersteunend zijn. Typische
        bevindingen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          het <strong className="text-slate-900 dark:text-slate-100">bird-beak fenomeen</strong>;
        </li>
        <li>dilatatie van de oesofagus;</li>
        <li>aperistaltiek;</li>
        <li>vertraagde passage van barium.</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Kleine aandachtvraag:</strong> wat is de gouden standaard
          voor achalasie?
        </p>
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> high resolution manometrie.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">HRM en Chicago-classificatie</h3>
      <p>
        Met HRM wordt de druk in de slokdarm en sfhincters in relatie tot tijd gemeten. Er zijn enkele belangrijke
        begrippen:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">IRP</strong> (<em>integrated relaxation pressure</em>): gemiddelde druk op de overgang slokdarm-maag tijdens slikken; <strong>{'> 15 mmHg'}</strong>{' '}wijst op een{' '}
          <strong className="text-slate-900 dark:text-slate-100">EGJ outflow obstruction</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">DCI</strong> (<em>distal contractile integral</em>): maat
          voor de kracht van de peristaltiek.
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>{'> 8000 mmHg'}</strong>: hypercontractiliteit;
            </li>
            <li>
              <strong>{'< 450 mmHg'}</strong>: zwakke peristaltiek;
            </li>
            <li>
              <strong>{'< 100 mmHg'}</strong>: failed peristaltiek.
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">DL</strong> (<em>distal latency</em>): tijd van
          slik-geïnduceerde opening van de UES tot het contractiele deceleratiepunt;{' '}
          <strong className="text-slate-900 dark:text-slate-100">{'< 4,5 s'}</strong> past bij prematuur/spastisch.
        </li>
      </ul>
      <p>De achalasietypen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Type I</strong>: klassieke achalasie,{' '}
          <strong className="text-slate-900 dark:text-slate-100">atone slokdarm</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Type II</strong>:{' '}
          <strong className="text-slate-900 dark:text-slate-100">hypertone slokdarm</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Type III</strong>:{' '}
          <strong className="text-slate-900 dark:text-slate-100">spastische achalasie</strong> met distale
          slokdarmspasmen.
        </li>
      </ul>
      <p>
        Naast achalasie zijn er bij normale IRP ook andere motiliteitsstoornissen, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">afwezige peristaltiek</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">distale oesophagusspasme</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hypercontractiele slokdarm</strong> (
          <em>jackhammer</em>).
        </li>
      </ul>
      <p>Kleinere afwijkingen in de peristaltiek zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ineffectieve slokdarmmotiliteit</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gefragmenteerde peristaltiek</strong>.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Behandeling van achalasie</h3>
      <p>
        De behandeling is gericht op <strong className="text-slate-900 dark:text-slate-100">symptoomverlichting</strong>.
        Genezing is niet mogelijk. Doelen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>klachten verminderen;</li>
        <li>oesofaguslediging verbeteren;</li>
        <li>verdere dilatatie voorkomen.</li>
      </ul>
      <p>
        Medicatie met calciumantagonisten en nitraten is doorgaans onvoldoende effectief. Mogelijke behandelingen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">pneumodilatatie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">POEM</strong> (<em>per-orale endoscopische myotomie</em>);
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Heller-myotomie</strong>;
        </li>
        <li>soms <strong className="text-slate-900 dark:text-slate-100">botox</strong>.</li>
      </ul>
      <p>
        Bij secundaire achalasie en alarmsymptomen moet laagdrempelig aan{' '}
        <strong className="text-slate-900 dark:text-slate-100">CT-scan</strong> worden gedacht om maligniteit uit te
        sluiten.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Pneumodilatatie</strong> gebeurt stapgewijs met een ballon
        van de LES:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          eerst tot <strong className="text-slate-900 dark:text-slate-100">30 mm</strong>;
        </li>
        <li>
          na 2 weken eventueel tot <strong className="text-slate-900 dark:text-slate-100">35 mm</strong>;
        </li>
        <li>
          bij persisterende Eckardt score ≥ 4 eventueel tot <strong className="text-slate-900 dark:text-slate-100">40 mm</strong>.
        </li>
      </ul>
      <p>
        De effectiviteit is <strong className="text-slate-900 dark:text-slate-100">60–85%</strong>, maar recidief komt vaak voor. Complicaties zijn perforatie, bloeding, aspiratie en GERD.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">POEM</strong> is een endoscopische myotomie via de
        submucosale ruimte. De techniek lijkt op POEM bij achalasie, maar dan ter hoogte van de pylorus of LES afhankelijk van
        de indicatie. Bij achalasie is de effectiviteit hoog.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Heller-myotomie</strong> is een chirurgische behandeling
        waarbij de spierlaag van de distale slokdarm en EGJ wordt gekliefd. Deze ingreep wordt meestal laparoscopisch of
        robot-geassisteerd uitgevoerd, vaak in combinatie met een fundoplicatie. De effectiviteit op korte termijn is hoog.
      </p>
    </div>
  )
}
