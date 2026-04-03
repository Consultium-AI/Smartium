export default function Sect06Cd8PlusTCellenInDeHuid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CD8+ T-cellen in de huid</h2>
      <p>
        CD8+ T-cellen zijn vooral belangrijk voor het doden van geïnfecteerde cellen. In de huid zijn ook geheugen-CD8+
        T-cellen aanwezig. Deze blijven lang in de epidermis en zijn meestal losgekoppeld van de circulatie. Ze bieden
        bescherming bij toekomstige infecties met bijvoorbeeld virussen waarmee eerder contact is geweest.
      </p>
      <p>
        Als een virus de huid binnendringt en keratinocyten infecteert, ontstaan lokale cytokinen zoals interferonen, IL-1
        en TNF. Daardoor worden Langerhanscellen geactiveerd en komt een immuuncascade op gang:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geïnfecteerde keratinocyten maken ontstekingsmediatoren;</li>
        <li>Langerhanscellen raken geactiveerd en migreren naar de lymfeklier;</li>
        <li>daar presenteren zij antigeen aan naïeve T-cellen;</li>
        <li>deze T-cellen differentiëren tot effector-T-cellen;</li>
        <li>effectorcellen gaan terug naar de huid;</li>
        <li>daar worden ze lokaal opnieuw geactiveerd;</li>
        <li>ze doden geïnfecteerde keratinocyten;</li>
        <li>na het verdwijnen van het virus blijven geheugen-T-cellen achter.</li>
      </ul>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {` Wat is de belangrijkste functie van CD8+ T-cellen in de huid?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Het doden van geïnfecteerde cellen, vooral virusgeïnfecteerde cellen.`}
      </p>
    </div>
  )
}
