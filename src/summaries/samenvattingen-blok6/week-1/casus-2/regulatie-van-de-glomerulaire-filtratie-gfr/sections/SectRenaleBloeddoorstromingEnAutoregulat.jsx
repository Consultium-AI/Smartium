import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Renale bloeddoorstroming en autoregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier heeft een eigen systeem om de renale bloeddoorstroming en de GFR zo stabiel mogelijk te houden. Dat heet autoregulatie. Dit is belangrijk, omdat de nier zo ondanks schommelingen in de bloeddruk toch min of meer dezelfde filtratie kan behouden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Twee mechanismen zijn hierbij centraal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het myogene mechanisme`}</Inline></li>
        <li><Inline>{`tubuloglomerulaire feedback`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Het myogene mechanisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een stijging van de bloeddruk worden de afferente arteriolen uitgerekt. De vaatwand reageert daarop met reflexmatige vasoconstrictie. Daardoor stroomt er minder bloed de glomerulus in en blijft de GFR zo veel mogelijk constant.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit is een directe, lokale reactie van het bloedvat zelf. Het doel is eenvoudig: als de druk stijgt, knijpt het vat samen om de toegenomen druk te compenseren.`}</Inline></p>
      <SubHeading><Inline>{`Tubuloglomerulaire feedback`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tubuloglomerulaire feedback is een tweede belangrijk autoregulatiemechanisme. Hierbij speelt de macula densa een centrale rol. Dit zijn gespecialiseerde cellen in de distale tubulus die de samenstelling van de tubulusvloeistof “bewaken”, vooral de hoeveelheid NaCl.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de NaCl-concentratie in de distale tubulus stijgt, betekent dit dat er relatief veel filtratie is geweest. De macula densa geeft dan adenosine af. Adenosine veroorzaakt vasoconstrictie van de afferente arteriole. Daardoor daalt de bloedtoevoer naar de glomerulus en neemt de GFR weer af.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De volgorde is dus:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verhoogde NaCl-concentratie in de distale tubulus`}</Inline></li>
        <li><Inline>{`afgifte van adenosine door de macula densa`}</Inline></li>
        <li><Inline>{`vasoconstrictie van de afferente arteriole`}</Inline></li>
        <li><Inline>{`verminderde GFR`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Omgekeerd werkt het systeem ook. Als de GFR daalt, komt er minder NaCl in de distale tubulus terecht. Dan wordt er minder adenosine afgegeven, waardoor de afferente arteriole juist verwijdt. Zo kan de GFR weer toenemen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is de macula densa zo belangrijk?
**Mini-antwoord:** omdat deze cellen de nier helpen inschatten of er te veel of te weinig filtratie plaatsvindt.`} />
      <SubHeading><Inline>{`Klinische relevantie van autoregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit autoregulatiemechanisme werkt minder goed bij oudere mensen en ook bij patiënten met een verminderde nierfunctie, vooral bij chronische nierschade. Ook langdurige hypertensie kan het systeem verstoren, doordat de regulatie zich als het ware aanpast aan een hoger drukniveau. Als de bloeddruk dan plots “genormaliseerd” wordt, kan de autoregulatie tekortschieten en kan de GFR sterk dalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij diabetes mellitus komt vaak glomerulaire hyperfiltratie voor. Dat is schadelijk en hangt samen met verhoogde albuminurie. Een belangrijk mechanisme hierbij is dat SGLT2-remmers de glucose-opname in de nier remmen, maar tegelijk ook de natriumresorptie verminderen. Daardoor ontstaat in het juxtaglomerulaire apparaat een signaal dat de afferente arteriole laat samenknijpen. De hyperfiltratie neemt dan af. Hoewel de GFR daardoor daalt, wordt dit gezien als een waarschijnlijk nefroprotectief effect.`}</Inline></p>
    </div>
  )
}
