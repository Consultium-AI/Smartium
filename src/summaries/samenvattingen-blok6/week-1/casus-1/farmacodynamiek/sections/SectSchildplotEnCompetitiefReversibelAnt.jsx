import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Schildplot en competitief reversibel antagonisme`}</Inline></SubHeading>
      <PBody text={`Om te bepalen of er sprake is van **competitief reversibel antagonisme**, gebruik je een **Schildplot**. Daarmee kun je ook de **potentie van de antagonist** bepalen.`} />
      <p className="leading-relaxed"><Inline>{`Bij een Schildplot kijk je naar concentratie-responscurves van een agonist in afwezigheid en aanwezigheid van verschillende concentraties antagonist. Als de antagonist competitief en reversibel is, schuift de agonistcurve naar rechts, maar blijft het maximale effect gelijk.`}</Inline></p>
      <PBody text={`Voor elke curve bepaal je de **EC50**. Daarna bereken je de **dose ratio (DR)**:`} />
      <PBody text={`\\[
DR = \\frac{EC50 \\text{ met antagonist}}{EC50 \\text{ zonder antagonist}}
\\]`} />
      <PBody text={`Daarna gebruik je **log(DR - 1)**. Als je die waarden uitzet tegen de negatieve logaritme van de antagonistconcentratie, krijg je een rechte lijn met helling 1. Dat past bij competitief reversibel antagonisme.`} />
      <SubHeading><Inline>{`Voorbeeld van de berekening`}</Inline></SubHeading>
      <PBody text={`Bij een antagonistconcentratie van **10 nM**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EC50 met antagonist: **7,9 × 10^-9 M**`}</Inline></li>
        <li><Inline>{`EC50 zonder antagonist: **5,0 × 10^-10 M**`}</Inline></li>
        <li><Inline>{`DR = **15,8**`}</Inline></li>
        <li><Inline>{`log(DR - 1) = **1,17**`}</Inline></li>
      </ul>
      <PBody text={`Bij **100 nM** antagonist:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EC50 met antagonist: **1,3 × 10^-7 M**`}</Inline></li>
        <li><Inline>{`EC50 zonder antagonist: **5,0 × 10^-10 M**`}</Inline></li>
        <li><Inline>{`DR = **252**`}</Inline></li>
        <li><Inline>{`log(DR - 1) = **2,40**`}</Inline></li>
      </ul>
      <PBody text={`Bij **1 µM** antagonist:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EC50 met antagonist: **2,0 × 10^-6 M**`}</Inline></li>
        <li><Inline>{`EC50 zonder antagonist: **5,0 × 10^-10 M**`}</Inline></li>
        <li><Inline>{`DR = **4000**`}</Inline></li>
        <li><Inline>{`log(DR - 1) = **3,60**`}</Inline></li>
      </ul>
      <PBody text={`Als je deze punten in een Schildplot zet, krijg je een rechte lijn. Dat laat zien dat er sprake is van **competitief reversibel antagonisme**.`} />
      <SubHeading><Inline>{`pA2`}</Inline></SubHeading>
      <PBody text={`De **pA2** is de negatieve logaritme van de antagonistconcentratie waarbij twee keer zoveel agonist nodig is om hetzelfde effect te bereiken. Het snijpunt met de x-as van de Schildplot geeft informatie over deze potentie.`} />
      <PBody text={`In het voorbeeld ligt dat snijpunt rond **9**, dus de **pA2 is ongeveer 9,0**. Dat betekent dat bij die antagonistconcentratie twee keer zoveel agonist nodig is om hetzelfde effect te bereiken.`} />
      <PBody text={`**Aandachtsvraag:** Wat vertelt de Schildplot je?
**Mini-antwoord:** Of er competitief reversibel antagonisme is, en hoe potent de antagonist is.`} />
    </div>
  )
}
