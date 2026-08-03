import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een jonge vrouw met kortademigheid en thoracale pijn na een lange vliegreis en met gebruik van orale anticonceptiva heeft een verhoogd risico op longembolie. Als er bij de YEARS-benadering een criterium aanwezig is en de D-dimeer boven de afkapwaarde ligt, volgt CTPA. Als de CT-angio een longembolie laat zien en de patiënt hemodynamisch stabiel is, valt zij in de low-risk categorie. Dan heeft een DOAC de voorkeur en kan zij, als de Hestia-criteria dat toelaten, thuis worden behandeld.`}</Inline></p>
    </div>
  )
}
