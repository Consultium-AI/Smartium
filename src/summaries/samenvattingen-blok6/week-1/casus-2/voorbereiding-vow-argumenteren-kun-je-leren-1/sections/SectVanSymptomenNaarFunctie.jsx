import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van symptomen naar functie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De geschiedenis van hartfalen laat goed zien hoe de verschillende denkkaders het medische denken over hartziekten hebben veranderd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Rond 1800 bestond cardiologie nog nauwelijks als vakgebied. Artsen spraken wel over hartziekten, maar hadden weinig middelen om die vast te stellen. Klachten als hartkloppingen, pijn op de borst en plotselinge dood werden wel met het hart verbonden, maar verschijnselen als kortademigheid en vocht in de benen werden nog niet direct als hartproblemen gezien.`}</Inline></p>
      <PBody text={`In de **bedside medicine** stond vooral het verhaal van de patiënt centraal. Ziekte werd beschreven als een verzameling symptomen. Pathologische anatomie bestond al wel, maar stond nog los van het dagelijkse medische handelen.`} />
      <PBody text={`Daarna veranderde dit door de **hospital medicine**. Artsen gingen zoeken naar laesies in het hart en gebruikten technieken als percussie, palpatie, observatie en vooral **auscultatie**. Corvisart maakte percussie bekend, en Laennec introduceerde de stethoscoop. James Hope bouwde daarop voort en zag hartruis als aanwijzing voor klepafwijkingen.`} />
      <PBody text={`Hier ontstond de gedachte dat een slecht sluitende hartklep leidde tot terugstroming van bloed en drukopbouw stroomopwaarts. Dit werd de **backpressure theory**: hartfalen als een mechanisch probleem met obstructie en druk.`} />
      <PBody text={`Later kwam daar kritiek op. James Mackenzie zag dat hartruis niet automatisch betekende dat iemand ernstig ziek was. Sommige mensen met een ruis konden juist goed functioneren. Hij keek daarom niet alleen naar de aanwezigheid van een afwijking, maar naar de **functionele capaciteit** van het hart.`} />
      <PBody text={`Mackenzie stelde dat het hart moet zorgen voor een efficiënte circulatie, vooral wanneer het lichaam meer vraagt. Als het hart dat niet meer goed kan, is er sprake van **hartfalen**. Daarbij introduceerde hij het idee van **reservekracht**: het vermogen van het hart om bij inspanning extra bloed rond te pompen. Als die reserve beperkt is, faalt het hart.`} />
      <PBody text={`Dit werd de **forward failure theory**. Het hartfalen-syndroom werd zo gekoppeld aan kortademigheid en vochtophoping, en niet langer alleen aan een hoorbare klepafwijking.`} />
    </div>
  )
}
