import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trombose: wat is het en waarom is het belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Trombose is de pathologische vorming van een bloedstolsel in een bloedvat, waardoor dat vat geheel of gedeeltelijk wordt afgesloten. Bij veneuze trombose spreken we van veneuze trombo-embolie, vaak afgekort als VTE. Daaronder vallen vooral diepe veneuze trombose, ook wel een trombosebeen genoemd, en longembolie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Trombose is een belangrijke oorzaak van morbiditeit in de westerse wereld en kan levensbedreigend zijn. Daarom is het snel stellen van de juiste diagnose belangrijk. De incidentie is ongeveer 1 tot 3 per 1000 inwoners per jaar. Ongeveer 60% betreft een diepe veneuze trombose en 40% een longembolie. De kans neemt sterk toe met de leeftijd.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is trombose zo’n belangrijk onderwerp?
**Mini-antwoord:** omdat het vaak voorkomt, ernstige complicaties kan geven en snel herkend en behandeld moet worden.`} />
    </div>
  )
}
