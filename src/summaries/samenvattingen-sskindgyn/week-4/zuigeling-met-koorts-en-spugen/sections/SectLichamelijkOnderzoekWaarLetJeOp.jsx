import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek: waar let je op?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichamelijk onderzoek helpt om de differentiaaldiagnose verder te verfijnen. Je kijkt niet alleen naar het zieke kind in het algemeen, maar ook gericht naar organen en alarmsignalen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Bevindingen bij lichamelijk onderzoek per diagnose`}</Inline></SubHeading>
      <DataTable rows={[["Diagnose", "Bevindingen die helpen"], ["Urineweginfectie", "Blaasgrootte, palpabele nieren, anatomische afwijkingen van het urogenitale gebied, lumbosacrale afwijkingen zoals een dimple"], ["Pneumonie", "Tachypneu, dyspneu, cyanose, kreunen, afwijkingen bij auscultatie van de longen"], ["Gastro-enteritis", "Buikonderzoek, hydratietoestand"], ["Bovenste luchtweginfectie", "Inspectie van KNO-gebied, bijvoorbeeld rood trommelvlies, tonsillitis, rhinitis, lymfadenopathie"], ["Meningitis", "Bomberende fontanel, apathie, prikkelbaarheid, convulsies, meningeale prikkeling, kreunen"], ["Sepsis", "Kreunen, sufheid, prikkelbaarheid, verlengde capillary refill time, koude acra"]]} />
    </div>
  )
}
