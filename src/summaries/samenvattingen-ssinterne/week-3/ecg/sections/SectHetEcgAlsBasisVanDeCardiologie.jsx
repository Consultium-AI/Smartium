import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het ECG als basis van de cardiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het elektrocardiogram, kortweg ECG, is een van de belangrijkste diagnostische middelen binnen de cardiologie. Het laat de elektrische activiteit van het hart zien. Je meet dus niet rechtstreeks de spiercontractie, maar de elektrische prikkel die door het hart loopt. Het ECG is daarmee eigenlijk een grafiek van spanning tegen de tijd, geregistreerd via elektroden op de huid.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Om het ECG goed te begrijpen, heb je een basis nodig van de bouw en functie van het hart. Het hart bestaat uit twee boezems, de atria, en twee kamers, de ventrikels. Eerst trekken de atria samen, daarna de ventrikels. Zo helpen de atria bij het vullen van de ventrikels, waarna de ventrikels bloed naar de longcirculatie en de lichaamscirculatie pompen.`}</Inline></p>
    </div>
  )
}
