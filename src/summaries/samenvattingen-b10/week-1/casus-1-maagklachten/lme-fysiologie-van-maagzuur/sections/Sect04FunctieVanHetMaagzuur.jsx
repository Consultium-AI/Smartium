export default function Sect04FunctieVanHetMaagzuur() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Functie van het maagzuur</h2>
      <p>Maagzuur heeft meerdere belangrijke functies.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. Eerste verdedigingslinie tegen voedselvergiftiging</h3>
      <p>
        Via voedsel en drinken komen ook bacteriën, virussen en toxines binnen. Door de{' '}
        <strong className="text-slate-900 dark:text-slate-100">zuurshock</strong> in de maag worden de meeste
        bacteriën en schimmels gedood en worden virussen en toxines onschadelijk gemaakt. Het zuur denatureert
        membraaneiwitten, waardoor de celmembraan kapot gaat. Het zuur kan de bacterie of schimmel binnendringen en
        daar ook intracellulaire eiwitten en DNA beschadigen. Daardoor verliezen veel ziekteverwekkers hun schadelijke
        werking.
      </p>
      <p>
        Sommige bacteriën zijn <strong className="text-slate-900 dark:text-slate-100">zuurtolerant</strong> en kunnen
        een korte tijd in de maag overleven. Zij kunnen het zuur intracellulair bufferen en beschadigde eiwitten en
        DNA herstellen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. Denaturatie van eiwitten</h3>
      <p>
        Door maagzuur worden eiwitten uit het voedsel{' '}
        <strong className="text-slate-900 dark:text-slate-100">gedenatureerd</strong>. Dat betekent dat de 3-dimensionale
        structuur van het eiwit verdwijnt doordat ionogene bindingen en andere structuren worden verbroken. Hierdoor
        worden de eiwitten beter toegankelijk voor verteringsenzymen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">3. Activatie van pepsine</h3>
      <p>
        Pepsine is een belangrijk eiwitsplitsend enzym dat goed werkt bij een lage pH. Het wordt in de maag niet direct
        als actief enzym gemaakt, maar als <strong className="text-slate-900 dark:text-slate-100">pepsinogeen</strong>.
        In het zure milieu van de maag wordt de remmende eiwitstaart van pepsinogeen afgesplitst, waardoor{' '}
        <strong className="text-slate-900 dark:text-slate-100">pepsine</strong> ontstaat. Pepsine activeert op zijn
        beurt weer meer pepsinogeen: zo ontstaat een kettingreactie.
      </p>
      <p>
        Pepsine heeft een{' '}
        <strong className="text-slate-900 dark:text-slate-100">pH-optimum van ongeveer 1,5 tot 3</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">4. Vertering van vetten</h3>
      <p>
        De hoofdcellen scheiden naast pepsinogeen ook <strong className="text-slate-900 dark:text-slate-100">maaglipase</strong>{' '}
        uit. Dit enzym splitst triglyceriden uit voedingsvet in een vetzuur en een diglyceride. Bij pasgeborenen is dit
        maaglipase belangrijk voor de vertering van melkvet. Bij volwassenen speelt het vooral een rol in de vorming
        van vetzuren, die een signaalfunctie hebben voor de synthese van maag-hormonen en het openen van de pylorus.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">5. Effect op vitamine B12</h3>
      <p>
        Vitamine B12, ook wel <strong className="text-slate-900 dark:text-slate-100">cobalamine</strong>, uit de voeding
        zit gebonden aan eiwit. Onder invloed van zuur en pepsine komt B12 los van dit eiwit. Daarna bindt het eerst
        aan <strong className="text-slate-900 dark:text-slate-100">haptocorrin</strong>, een eiwit dat in speeksel en maag wordt
        uitgescheiden en dat B12 beschermt tijdens de passage door de maag. In het duodenum wordt haptocorrin afgebroken
        door proteasen, waarna B12 vrijkomt en kan binden aan{' '}
        <strong className="text-slate-900 dark:text-slate-100">intrinsic factor</strong>. Dit complex wordt uiteindelijk in
        het <strong className="text-slate-900 dark:text-slate-100">ileum</strong> opgenomen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandacht-vragetje:</strong> Waarom is intrinsic factor zo belangrijk?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong>{' '}Omdat B12 pas goed in het ileum kan worden opgenomen wanneer
          het aan intrinsic factor gebonden is.
        </p>
      </div>
    </div>
  )
}
