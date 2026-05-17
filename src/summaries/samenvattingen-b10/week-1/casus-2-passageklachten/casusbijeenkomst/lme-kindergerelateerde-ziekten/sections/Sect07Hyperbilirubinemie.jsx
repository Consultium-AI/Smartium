export default function Sect07Hyperbilirubinemie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Hyperbilirubinemie: altijd onderscheid maken tussen fysiologisch en pathologisch
      </h2>
      <p>
        Hyperbilirubinemie, oftewel icterus, komt heel vaak voor in de neonatale periode. Meestal is het fysiologisch: er
        is tijdelijk meer bilirubineproductie en de lever heeft nog een beperkte conjugatiecapaciteit. Toch is het
        belangrijk om fysiologie en pathologie van elkaar te onderscheiden, omdat dezelfde gele verkleuring het eerste
        teken kan zijn van een ernstige onderliggende ziekte.
      </p>
      <p>
        De conjugatie van bilirubine gebeurt in de lever. Bij een probleem in de afvoer van gal ontstaat{' '}
        <strong className="text-slate-900 dark:text-slate-100">geconjugeerde hyperbilirubinemie</strong>. Een belangrijk
        praktisch verschil is daarom: <strong className="text-slate-900 dark:text-slate-100">ongeconjugeerd</strong> of{' '}
        <strong className="text-slate-900 dark:text-slate-100">geconjugeerd</strong>, en daarnaast de{' '}
        <strong className="text-slate-900 dark:text-slate-100">leeftijd van het kind op het moment van geelzien</strong>.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Hyperbilirubinemie: indeling naar leeftijd en mogelijke oorzaken
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Leeftijd bij icterus
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Mogelijke oorzaken
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">{'< 24 uur'}</td>
                <td className="px-4 py-3 align-top">hemolyse, congenitale infectie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">{'24 uur \u2013 2 weken'}</td>
                <td className="px-4 py-3 align-top">
                  fysiologisch, borstvoeding, infectie, hemolyse, geboorte-trauma met resorptie van blauwe plek,
                  polycytemie, Crigler-Najjar-syndroom
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">{'>'} 2 weken</td>
                <td className="px-4 py-3 align-top">
                  ongeconjugeerd: fysiologisch, borstvoeding, infectie, hypothyreoïdie, hemolyse; geconjugeerd: neonatale
                  hepatitis, galgangobstructie
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Bij een persisterende icterus na 2 weken, in combinatie met{' '}
        <strong className="text-slate-900 dark:text-slate-100">geconjugeerde hyperbilirubinemie</strong>, moet het kind direct
        worden verwezen naar een gespecialiseerd centrum. Zeker als de totale bilirubine hoger is dan 25 micromol/L en de
        icterus blijft bestaan, is verder onderzoek noodzakelijk.
      </p>
      <p>Belangrijke oorzaken van persisterende geconjugeerde icterus zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>galgangobstructie, bijvoorbeeld galgangatresie of een choledochuscyste;</li>
        <li>neonataal hepatitis-syndroom;</li>
        <li>congenitale infectie;</li>
        <li>metabole ziekten zoals galactosemie en tyrosinemie;</li>
        <li>alf-1-antitrypsinedeficiëntie;</li>
        <li>progressieve familiale intrahepatische cholestase;</li>
        <li>cystische fibrose;</li>
        <li>intrahepatische galganghypoplasie, zoals syndroom van Alagille.</li>
      </ul>
      <p>
        Een belangrijk teken van galstuwing is dat de ontlasting zijn normale kleur verliest.{' '}
        <strong className="text-slate-900 dark:text-slate-100">Ontkleurde ontlasting</strong> is dus een heel belangrijk
        diagnostisch gegeven. Vaak hoort daar ook donkere urine bij.
      </p>
    </div>
  )
}
