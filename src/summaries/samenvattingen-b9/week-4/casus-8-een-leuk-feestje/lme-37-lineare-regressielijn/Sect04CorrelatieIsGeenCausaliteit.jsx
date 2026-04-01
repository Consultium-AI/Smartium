export default function Sect04CorrelatieIsGeenCausaliteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Correlatie is geen causaliteit</h2>
      <p>
        Een regressie- of correlatieverband betekent niet automatisch dat X ook echt oorzaak is van Y. Er kunnen ook andere factoren meespelen, zoals confounding. Een confounder is een variabele die samenhangt met zowel de blootstelling als de uitkomst en daardoor het geschatte verband kan vertekenen.
      </p>
      <p>
        Daarom blijft het belangrijk om kritisch te kijken naar de onderzoeksopzet. Een Randomized Controlled Trial (RCT) wordt vaak gezien als een betrouwbaardere manier om causaliteit te onderzoeken, omdat randomisatie confounding vermindert.
      </p>
    </div>
  )
}
