export default function Sect13Preventielogica() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Samenvatting van de preventielogica
      </h2>
      <p>De kern is eigenlijk eenvoudig:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een risicofactor heeft niet alleen een individueel effect, maar ook een populatie-effect;</li>
        <li>
          dat populatie-effect wordt geschat met de <strong className="text-slate-900 dark:text-slate-100">PAF</strong>;
        </li>
        <li>
          bij <em>H. pylori</em> kan die PAF groot zijn omdat de bacterie vaak voorkomt én met belangrijke ziekten samenhangt;
        </li>
        <li>
          preventie kan via <strong className="text-slate-900 dark:text-slate-100">screen-and-treat</strong> of via{' '}
          <strong className="text-slate-900 dark:text-slate-100">endoscopische screening</strong>;
        </li>
        <li>screening is alleen zinvol als de voordelen opwegen tegen de nadelen en de kosten.</li>
      </ul>
    </div>
  )
}
