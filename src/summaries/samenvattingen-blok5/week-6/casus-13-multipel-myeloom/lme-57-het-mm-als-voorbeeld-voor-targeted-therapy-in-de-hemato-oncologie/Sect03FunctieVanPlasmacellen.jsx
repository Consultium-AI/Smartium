export default function Sect03FunctieVanPlasmacellen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Functie van plasmacellen</h2>
      <p>
        Normale plasmacellen helpen bij de bestrijding van infectieziekten door antistoffen te produceren. Antistoffen,
        ook immunoglobulines genoemd, bestaan uit een zware keten en een lichte keten. De zware keten is van het type
        IgA, IgG of IgM; de lichte keten is ofwel kappa of lambda. Daardoor ontstaan combinaties zoals IgG-kappa,
        IgA-kappa, IgG-lambda of IgA-lambda.
      </p>
      <p>
        Bij multipel myeloom produceert een kwaadaardige plasmacel in overmaat één bepaald type antistof.
        Tegelijkertijd zijn de overige immunoglobulines vaak juist verlaagd. Daardoor is de afweer minder breed en neemt
        het risico op infecties toe.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> Waarom krijgt iemand met
          veel M-proteïne toch vaker infecties?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Omdat juist de andere,
          normale immunoglobulines verlaagd zijn.
        </p>
      </div>
    </div>
  )
}
