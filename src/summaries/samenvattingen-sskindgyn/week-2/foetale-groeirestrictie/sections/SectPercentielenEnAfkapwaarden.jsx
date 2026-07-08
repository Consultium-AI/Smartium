import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Percentielen en afkapwaarden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om groei te beoordelen, gebruik je groeicurven. Daarmee probeer je fysiologische groei te onderscheiden van pathologische groei. Dat is niet exact mogelijk op basis van alleen gewicht of percentiel, omdat je niet precies weet hoe groot de foetus onder optimale omstandigheden zou moeten zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom gebruikt men afkapwaarden zoals p3, p5 of p10. Hoe lager de afkapwaarde, hoe groter de kans dat de geselecteerde foetussen echt pathologie hebben. Maar dan mis je ook meer kinderen met risico op complicaties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In deze stof wordt p10 het meest gebruikt als afkapwaarde voor de definitie van FGR. Voor de definitie kun je zowel EFW als AC gebruiken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Gebruikte criteria voor FGR`}</Inline></SubHeading>
      <DataTable rows={[["Criteria", "Betekenis"], ["EFW < p10", "geschat foetaal gewicht onder de 10e percentiel"], ["AC < p10", "buikomtrek onder de 10e percentiel"], ["Afbuigende groei", "daling van minimaal 20 percentielen met een interval van minstens 2 weken"]]} />
      <p className="leading-relaxed"><Inline>{`EFW betekent estimated fetal weight, dus het echoscopisch geschatte foetale gewicht.`}</Inline></p>
    </div>
  )
}
