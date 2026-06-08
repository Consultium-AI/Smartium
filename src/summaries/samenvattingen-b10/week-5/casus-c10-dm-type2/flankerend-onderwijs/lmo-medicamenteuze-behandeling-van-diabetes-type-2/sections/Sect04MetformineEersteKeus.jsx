export default function Sect04MetformineEersteKeus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Metformine: eerste keus</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Metformine</strong> is een voorbeeld van een <strong className="text-slate-900 dark:text-slate-100">biguanide</strong> en is de <strong className="text-slate-900 dark:text-slate-100">eerste keus</strong> bij diabetes type 2. Dit middel werkt op meerdere manieren tegelijk. Het:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          verhoogt de <strong className="text-slate-900 dark:text-slate-100">insulinegevoeligheid</strong>;
        </li>
        <li>
          verhoogt de <strong className="text-slate-900 dark:text-slate-100">glucoseopname in weefsels</strong>;
        </li>
        <li>
          vermindert de <strong className="text-slate-900 dark:text-slate-100">glycogenolyse</strong>.
        </li>
      </ul>
      <p>
        Glycogenolyse betekent de afbraak van <strong className="text-slate-900 dark:text-slate-100">glycogeen</strong> naar glucose. Glycogeen is de opslagvorm van glucose, vooral in de lever. Als glycogenolyse wordt geremd, komt er minder glucose vrij in het bloed. Daardoor daalt de bloedglucose.
      </p>
      <p>
        Metformine helpt dus om de bloedglucose te verlagen door de werking van insuline te versterken en door minder glucose uit de lever in de circulatie te laten komen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bijwerkingen en contra-indicaties van metformine</h3>
      <p>De belangrijkste bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gastro-intestinale klachten</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">anorexie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">lactaatacidose</strong>.
        </li>
      </ul>
      <p>
        Lactaatacidose is een belangrijke en ernstige bijwerking. Metformine is gecontra-indiceerd bij <strong className="text-slate-900 dark:text-slate-100">leverfunctiestoornissen</strong> en <strong className="text-slate-900 dark:text-slate-100">nierfunctiestoornissen</strong>. Bij deze patiënten moet je dus voorzichtig zijn of het middel niet gebruiken.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waarom moet je bij metformine letten op lever en nieren?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> Omdat lever- en nierfunctiestoornissen een contra-indicatie zijn en het risico op lactaatacidose belangrijk is.
        </p>
      </div>
    </div>
  )
}
