import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lithium en nierfunctiestoornissen`}</Inline></SubHeading>
      <PBody text={`Lithiumgebruik kan leiden tot een **chronische tubulo-interstitiële nefritis**. Dat is een langdurige ontsteking van het interstitium, het steunweefsel tussen de nierbuisjes. Door die chronische ontsteking ontstaat fibrose, dus littekenvorming. Daardoor raakt de architectuur van het nierparenchym beschadigd en ontstaat irreversibele schade. Uiteindelijk kan dit leiden tot chronische nierinsufficiëntie. Dit proces duurt meestal jaren.`} />
      <p className="leading-relaxed"><Inline>{`Bij deze vorm van nierziekte kunnen in de urine microscopische hematurie en leukocyturie voorkomen, zonder dat er sprake is van een infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Andere oorzaken van chronische tubulo-interstitiële nefritis zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geneesmiddelen zoals ciclosporine, cisplatine en lithium;`}</Inline></li>
        <li><Inline>{`refluxnefropathie;`}</Inline></li>
        <li><Inline>{`auto-immuunziekten, bijvoorbeeld de ziekte van Sjögren;`}</Inline></li>
        <li><Inline>{`langdurige blootstelling aan zware metalen zoals lood en cadmium.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Histologie van de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een nierbiopt past bij deze aandoening een uitgebreide interstitiële nefritis, vaak met een gemengd celinfiltraat en meer eosinofiele granulocyten. Ook kan focale segmentale glomerulosclerose worden gezien. Dat betekent dat niet alleen het interstitium, maar ook delen van de glomeruli beschadigd kunnen zijn.`}</Inline></p>
    </div>
  )
}
