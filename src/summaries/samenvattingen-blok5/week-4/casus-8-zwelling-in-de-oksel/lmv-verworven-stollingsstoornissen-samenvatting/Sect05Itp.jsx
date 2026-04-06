export default function Sect05Itp() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">ITP: immuun trombocytopenie</h2>
        <p>
          ITP is een diagnose die je pas stelt als andere oorzaken van trombocytopenie niet worden gevonden. Het is dus
          een diagnosis per exclusionem.
        </p>
        <p>Bij ITP geldt:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>trombocytenaantal &lt; 100 x 10^9/L</li>
          <li>primaire ITP: zonder onderliggende oorzaak</li>
          <li>secundaire ITP: veroorzaakt door een andere ziekte of behandeling, ongeveer 20%</li>
        </ul>
        <p>
          Klinisch presenteert ITP zich met bloedingen, verminderde kwaliteit van leven en soms andere problemen zoals
          infectie.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hoe ziet ITP eruit?</h3>
        <p>
          Levensbedreigende of ernstige bloedingen komen niet zo vaak voor. Toch kunnen bloedingen wel duidelijk aanwezig
          zijn. Belangrijk is dat er geen direct verband is tussen de mate van trombocytopenie en de ernst van de
          bloedingen, vooral niet bij lage aantallen bloedplaatjes. De bloedingen zijn heterogeen en onvoorspelbaar en
          worden waarschijnlijk veroorzaakt door een combinatie van risicofactoren.
        </p>
        <p>Typische klachten kunnen dus sterk verschillen tussen patiënten.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">ITP en kwaliteit van leven</h3>
        <p>
          ITP heeft niet alleen invloed door bloedingen. Ook de behandeling en de bijwerkingen daarvan kunnen een grote
          invloed hebben op de health-related quality of life. In de module worden onder andere de volgende domeinen
          genoemd:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>emotionele gezondheid</li>
          <li>functionele gezondheid</li>
          <li>sociaal leven en vrije tijd</li>
          <li>reproductieve gezondheid</li>
          <li>werk</li>
        </ul>
        <p>Dat maakt duidelijk dat ITP meer is dan alleen een afwijkend trombocytenaantal.</p>
      </div>

      <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/80 dark:bg-amber-950/40 p-5 space-y-2">
        <p className="font-semibold text-amber-900 dark:text-amber-200">Aandacht-vraagje: Waarom is bij ITP niet alleen het trombocytenaantal belangrijk?</p>
        <p className="text-amber-950 dark:text-amber-100">
          Mini-antwoord: Omdat de klinische impact ook bepaald wordt door bloedingen, klachten, behandeling en kwaliteit
          van leven.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek van ITP</h3>
        <p>
          De diagnostiek is vooral gericht op het uitsluiten van andere oorzaken van trombocytopenie. Daarbij worden in
          deze module genoemd:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>laboratoriumonderzoek</li>
          <li>lever-miltscintigrafie</li>
          <li>beenmergonderzoek</li>
        </ul>
        <p>
          Beenmergonderzoek is bij een typische presentatie niet geïndiceerd. Bij twijfel of bij uitblijven van respons op
          behandeling wordt beenmergonderzoek juist laagdrempelig overwogen, inclusief biopt en cytogenetica.
        </p>
      </div>
    </div>
  )
}
