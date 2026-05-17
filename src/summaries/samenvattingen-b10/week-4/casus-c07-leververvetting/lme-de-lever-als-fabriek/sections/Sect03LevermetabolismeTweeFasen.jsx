export default function Sect03LevermetabolismeTweeFasen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Levermetabolisme in twee fasen</h2>
      <p>
        Het levermetabolisme verloopt grofweg in <strong className="text-slate-900 dark:text-slate-100">twee fasen</strong>.
        Deze indeling is heel belangrijk om te begrijpen hoe geneesmiddelen worden afgebroken.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Fase 1 en fase 2 van het levermetabolisme
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Fase</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Wat gebeurt er?</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijke kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Fase 1</td>
              <td className="p-3 align-top">De chemische structuur van een stof wordt aangepast</td>
              <td className="p-3 align-top">
                Vooral oxidatie, reductie of hydrolyse; vooral cytochroom P450-enzymen; kan actieve, niet-actieve of
                toxische metabolieten geven
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Fase 2</td>
              <td className="p-3 align-top">De stof of metaboliet wordt gekoppeld aan een andere stof</td>
              <td className="p-3 align-top">
                Conjugatie; maakt de stof meestal inactief en wateroplosbaar; uitscheiding via urine of gal wordt
                makkelijker
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fase 1-reacties</h3>
      <p>
        In fase 1 wordt de chemische structuur van een geneesmiddel aangepast. Dat gebeurt vaak door{' '}
        <strong className="text-slate-900 dark:text-slate-100">oxidatie</strong>, maar ook reductie of hydrolyse kan
        optreden. De belangrijkste enzymen hierbij zijn de{' '}
        <strong className="text-slate-900 dark:text-slate-100">cytochroom P450-enzymen</strong>, ook wel{' '}
        <strong className="text-slate-900 dark:text-slate-100">CYP-enzymen</strong> genoemd.
      </p>
      <p>Bij fase 1 kunnen verschillende soorten metabolieten ontstaan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">actieve metabolieten</strong>: deze kunnen even sterk of
          zelfs sterker werken dan het oorspronkelijke geneesmiddel;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">niet-actieve metabolieten</strong>: deze hebben geen
          farmacologische werking meer;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">toxische metabolieten</strong>: deze kunnen schade geven
          aan weefsels of organen.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fase 2-reacties</h3>
      <p>
        In fase 2 wordt de stof gekoppeld aan een andere stof, zoals{' '}
        <strong className="text-slate-900 dark:text-slate-100">glucuronzuur</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">sulfaat</strong> of een{' '}
        <strong className="text-slate-900 dark:text-slate-100">aminozuur</strong>. Dit heet{' '}
        <strong className="text-slate-900 dark:text-slate-100">conjugatie</strong>. Hierdoor wordt de stof meestal
        inactief en wateroplosbaar. Daardoor kan het lichaam de stof makkelijker uitscheiden via urine of gal.
      </p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Wat is het
          uiteindelijke doel van fase 2?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> De stof inactief
          en wateroplosbaar maken, zodat uitscheiding makkelijker wordt.
        </p>
      </div>
    </div>
  )
}
