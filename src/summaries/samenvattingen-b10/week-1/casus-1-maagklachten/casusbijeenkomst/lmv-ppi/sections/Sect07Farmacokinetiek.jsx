export default function Sect07Farmacokinetiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Farmacokinetiek en doseerfrequentie
      </h2>
      <p>Bij protonpompremmers is een paar praktische punten belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de werking heeft een <strong className="text-slate-900 dark:text-slate-100">vertraagde start</strong>;
        </li>
        <li>
          de werking is sterk, maar <strong className="text-slate-900 dark:text-slate-100">niet precies 24 uur</strong>;
        </li>
        <li>
          de standaard is vaak <strong className="text-slate-900 dark:text-slate-100">1 keer per dag doseren</strong>;
        </li>
        <li>
          als dit onvoldoende is, kan de{' '}
          <strong className="text-slate-900 dark:text-slate-100">doseerfrequentie worden verhoogd</strong>.
        </li>
      </ul>
      <p>
        Dat betekent dat je niet alleen moet denken aan “wel of geen medicijn”, maar ook aan de{' '}
        <strong className="text-slate-900 dark:text-slate-100">juiste doseringsfrequentie</strong> om voldoende zuurreductie te krijgen.
      </p>
      <p>
        Een hogere dosisfrequentie kan dus leiden tot een betere onderdrukking van de maagzuurproductie dan eenmaal daags.
      </p>
    </div>
  )
}
