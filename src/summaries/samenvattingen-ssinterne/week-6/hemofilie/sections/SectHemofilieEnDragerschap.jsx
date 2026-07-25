import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemofilie en dragerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemofilie A ontstaat door een tekort aan stollingsfactor VIII. Hemofilie B ontstaat door een tekort aan stollingsfactor IX. Beide aandoeningen zijn X-gebonden. Dat betekent dat mannen meestal aangedaan zijn en vrouwen meestal draagster zijn.`}</Inline></p>
      <SubHeading><Inline>{`X-gebonden overerving`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat het afwijkende gen op het X-chromosoom ligt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hebben mannen met het afwijkende X-chromosoom hemofilie;`}</Inline></li>
        <li><Inline>{`worden vrouwen vaak draagster genoemd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In Nederland zijn naar schatting meer dan 1000 vrouwen draagster van hemofilie.`}</Inline></p>
      <PBody text={`**Aandachtspunt:**
Als een man met hemofilie een zoon krijgt, hoe groot is dan de kans dat die zoon hemofilie heeft?
**Kort antwoord:** 0%, want een zoon krijgt het Y-chromosoom van zijn vader.`} />
      <p className="leading-relaxed"><Inline>{`Als diezelfde man een dochter krijgt, is de kans dat zij draagster is 100%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als een draagster zwanger is, is de kans op een zoon met hemofilie 25%.`}</Inline></p>
      <SubHeading><Inline>{`Draagsters kunnen ook klachten hebben`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Draagsters hebben niet altijd alleen een “stille” genetische status. Door lyonisatie, ook wel X-inactivatie genoemd, kan de ene X in meer cellen actief blijven dan de andere. Daardoor kunnen draagsters een verlaagde factor VIII- of factor IX-activiteit hebben en dus zelf bloedingsklachten krijgen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij draagsters van hemofilie A kan factor VIII verlaagd zijn, bij draagsters van hemofilie B factor IX.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Binnen één familie is de ernst van hemofilie bij mannen meestal vergelijkbaar. Bij vrouwen is het niveau van factor VIII of IX echter niet voorspelbaar. Daarom moet bij alle mogelijke draagsters een factor VIII- of IX-bepaling worden gedaan.`}</Inline></p>
      <SubHeading><Inline>{`Hemofilie in de familie is niet altijd aanwezig`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ongeveer 30% van de kinderen met hemofilie is er geen bekende familiegeschiedenis. Dat komt door een spontane mutatie. Ook dan kan de moeder of grootmoeder draagster zijn.`}</Inline></p>
    </div>
  )
}
