import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van proteïnurie`}</Inline></SubHeading>
      <PBody text={`Een urine-stick is een **screeningstest**. Die kan proteïnurie aanwijzen, maar is niet perfect en kan ook fout-negatief zijn. Als je de hoeveelheid eiwit echt wilt kwantificeren, gebruik je een:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**eiwit-creatinine-ratio**`}</Inline></li>
        <li><Inline>{`**albumine-creatinine-ratio**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een 24-uurs urineverzameling kan ook, maar is lastig in de praktijk. Daarom wordt vaak met een eenmalig urinemonster gewerkt en dan terug gerekend met creatinine.`}</Inline></p>
      <SubHeading><Inline>{`Waarom creatinine?`}</Inline></SubHeading>
      <PBody text={`Creatinine-uitscheiding is in een steady state redelijk constant. Daarom kun je met de creatinineconcentratie in urine een schatting maken van de totale daguitscheiding. Een handige vuistregel is ongeveer **10 mmol creatinine per dag**. Zo kun je een concentratie in gram per liter omrekenen naar gram per dag.`} />
      <SubHeading><Inline>{`Tabel 3. Methoden om proteïnurie te meten`}</Inline></SubHeading>
      <DataTable rows={[["Methode", "Voordeel", "Nadeel"], ["Urine-stick", "Snel en eenvoudig", "Alleen screening, kan fout-negatief zijn"], ["24-uurs urine", "Directe daguitscheiding", "Lastig en foutgevoelig"], ["Eiwit-creatinine-ratio", "Praktisch en bruikbaar voor kwantificatie", "Vereist interpretatie"], ["Albumine-creatinine-ratio", "Goed voor albuminurie", "Ook interpretatie nodig"]]} />
      <SubHeading><Inline>{`Tijdelijke proteïnurie en bloed in de urine`}</Inline></SubHeading>
      <PBody text={`Niet elke positieve eiwitstick betekent blijvende nierschade. Een **urineweginfectie** kan tijdelijke, voorbijgaande proteïnurie geven. Dat komt doordat er vaak ook hematurie, leukocyten en blaasslijmvliesreactie zijn. Als de infectie over is en de proteïnurie blijft bestaan, dan is verder onderzoek nodig.`} />
      <p className="leading-relaxed"><Inline>{`Menstruatie kan ook wat bloed in de urine geven, maar dat is vaak niet genoeg om een duidelijke positieve eiwitstick te veroorzaken, tenzij er veel bloed in het monster zit.`}</Inline></p>
      <PBody text={`Bij **evidente macroscopische hematurie** kan de eiwitstick of de eiwit-creatinine-ratio sterk verhoogd zijn zonder dat er per se een glomerulaire of tubulaire nierziekte is. Denk dan ook aan een urologische oorzaak.`} />
    </div>
  )
}
