export default function Sect07Anergie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Anergie</h3>
      <p>Anergie betekent dat een lymfocyt functioneel inactief wordt. De cel leeft nog, maar reageert niet goed meer.</p>
      <p>
        In deze clip wordt anergie uitgelegd als: binding van (auto)antigeen aan de antigeenreceptor in afwezigheid van
        co-stimulatoire signalen. Of eenvoudiger gezegd: de lymfocyt krijgt signaal 1 zonder signaal 2.
      </p>
      <p>
        Voor een CD4+ T-lymfocyt is signaal 1 de herkenning van antigeen via TCR en MHC-klasse II. Signaal 2 is de
        co-stimulatie, bijvoorbeeld via CD28 op de T-cel en CD80/CD86 op de antigeen presenterende cel. Als die tweede stap
        ontbreekt, dan ontstaat geen volwaardige activatie maar juist anergie.
      </p>
      <p>
        Dat is een slimme veiligheidsrem. Een T-cel die een autoantigeen ziet zonder de juiste extra activerende context,
        wordt dus niet aangezet tot een afweerreactie.
      </p>
    </div>
  )
}
