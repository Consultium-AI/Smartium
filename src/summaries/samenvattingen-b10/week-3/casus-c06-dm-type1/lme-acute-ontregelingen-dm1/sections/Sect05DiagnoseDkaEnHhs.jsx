export default function Sect05DiagnoseDkaEnHhs () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnose van DKA en HHS</h2>
      <p>
        De diagnose wordt gesteld op basis van klachten, lichamelijk onderzoek en laboratoriumwaarden.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">DKA: kerncriteria</h3>
      <p>
        DKA is <strong className="text-slate-900 dark:text-slate-100">ketonenvorming bij absoluut insulinetekort</strong>.
        Meestal gaat het om DM1. Het beeld kan ook zelden voorkomen bij DM2 en bij gebruik van een{' '}
        <strong className="text-slate-900 dark:text-slate-100">SGLT2-remmer</strong>; dan kan de ontregeling zelfs{' '}
        <strong className="text-slate-900 dark:text-slate-100">normoglykemisch</strong> zijn.
      </p>
      <p>Voor DKA gelden de volgende kenmerken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          glucose <strong className="text-slate-900 dark:text-slate-100">&gt; 11 mmol/L</strong> of bekende diabetes;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">serum β-hydroxyboterzuur ≥ 3,0 mmol/L</strong> of{' '}
          <strong className="text-slate-900 dark:text-slate-100">urineketonen ≥ 2+</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">bicarbonaat &lt; 18 mmol/L</strong>;
        </li>
        <li>
          geen DKA als de <strong className="text-slate-900 dark:text-slate-100">pH &gt; 7,3</strong> en het{' '}
          <strong className="text-slate-900 dark:text-slate-100">bicarbonaat &gt; 18 mmol/L</strong> is.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Ernst van DKA</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ernst</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">β-hydroxyboterzuur</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">pH</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Bicarbonaat</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Bewustzijn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Mild</td>
              <td className="p-3 align-top">&lt; 6,0 mmol/L</td>
              <td className="p-3 align-top">&gt; 7,25</td>
              <td className="p-3 align-top">&gt; 15 mmol/L</td>
              <td className="p-3 align-top">Alert</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Matig</td>
              <td className="p-3 align-top">&lt; 6,0 mmol/L</td>
              <td className="p-3 align-top">7,0–7,25</td>
              <td className="p-3 align-top">10–15 mmol/L</td>
              <td className="p-3 align-top">Alert / slaperig</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ernstig</td>
              <td className="p-3 align-top">&gt; 6,0 mmol/L</td>
              <td className="p-3 align-top">&lt; 7,0</td>
              <td className="p-3 align-top">&lt; 10 mmol/L</td>
              <td className="p-3 align-top">Stupor / coma</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij DKA horen dus vooral <strong className="text-slate-900 dark:text-slate-100">ketonen, acidose en dehydratie</strong>. Gastro-intestinale klachten kunnen op de voorgrond staan, zoals misselijkheid, braken en buikpijn.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">HHS: kerncriteria</h3>
      <p>
        HHS is een{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          ernstige hyperglykemie met dehydratie zonder noemenswaardige ketonenproductie
        </strong>. Het komt vooral voor bij DM2.
      </p>
      <p>Kenmerken van HHS zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          glucose <strong className="text-slate-900 dark:text-slate-100">&gt; 30 mmol/L</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">effectieve serumosmolariteit &gt; 300 mOsmol/L</strong>;
        </li>
        <li>er wordt niet voldaan aan de criteria voor DKA.</li>
      </ul>
      <p>HHS is voorbij als:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          glucose <strong className="text-slate-900 dark:text-slate-100">&lt; 14 mmol/L</strong>,
        </li>
        <li>
          de osmolariteit <strong className="text-slate-900 dark:text-slate-100">&lt; 300 mOsmol/kg</strong> is,
        </li>
        <li>
          en de urineproductie <strong className="text-slate-900 dark:text-slate-100">&gt; 0,5 mL/kg/uur</strong> is.
        </li>
      </ul>
      <p>De effectieve serumosmolariteit kan worden berekend met:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">2 × Na + glucose</p>
      <p>
        Bij een hoge osmolaliteit horen vaak <strong className="text-slate-900 dark:text-slate-100">neurologische symptomen</strong>, zoals sufheid of verminderd bewustzijn.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Aandachtspunten in de labdiagnostiek</h3>
      <p>
        Soms helpt de <strong className="text-slate-900 dark:text-slate-100">anion gap</strong> om een metabole acidose te begrijpen. Die bereken je als:
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Na – (Cl + bicarbonaat)</p>
      <p>
        Een verhoogde anion gap past bij een metabole acidose. Dat kan door ketonen komen, maar ook door <strong className="text-slate-900 dark:text-slate-100">lactaat</strong>. Wanneer er geen ketonen zijn, moet je dus ook aan andere oorzaken van een verhoogde anion gap denken, zoals lactaat.
      </p>
    </div>
  )
}
