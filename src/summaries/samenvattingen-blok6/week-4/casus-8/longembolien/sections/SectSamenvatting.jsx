import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longembolie is een ernstige aandoening waarbij een stolsel een longarterie afsluit, meestal afkomstig uit een diepe veneuze trombose. Klachten zijn vaak aspecifiek en bestaan vooral uit plotselinge kortademigheid, thoracale pijn, hoesten, beenklachten en soms duizeligheid of shock. Risicofactoren zijn onder andere immobilisatie, chirurgie, maligniteit, zwangerschap, anticonceptie en trombofilie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnostiek begint met klinische inschatting en kan worden ondersteund met scores zoals YEARS, Wells en PERC, samen met de D-dimeertest. De belangrijkste beeldvorming is CTPA. Voor de behandeling wordt gekeken naar het risico: high-risk patiënten krijgen directe reperfusietherapie, intermediate-risk patiënten worden opgenomen en behandeld met anticoagulantia, en low-risk patiënten krijgen meestal een DOAC. De Hestia-score en PESI-score helpen bepalen of thuisbehandeling veilig is. Bij zwangerschap worden heparine gebruikt en DOAC’s ontraden.`}</Inline></p>
    </div>
  )
}
