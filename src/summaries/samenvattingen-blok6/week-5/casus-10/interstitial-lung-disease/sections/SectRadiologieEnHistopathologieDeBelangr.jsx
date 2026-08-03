import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Radiologie en histopathologie: de belangrijkste patronen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ILD zijn vier patronen belangrijk om te herkennen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`UIP: vooral fibrose`}</Inline></li>
        <li><Inline>{`NSIP: combinatie van ontsteking en fibrose`}</Inline></li>
        <li><Inline>{`BIP: betrokkenheid van bronchioli en interstitium/alveoli`}</Inline></li>
        <li><Inline>{`OP: vooral ontsteking`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Belangrijke radiologische en histologische patronen`}</Inline></SubHeading>
      <DataTable rows={[["Patroon", "Beeldvorming", "Histologie", "Komt vaak voor bij"], ["UIP", "Honeycombing, traction bronchiectasis, subpleuraal en basaal", "Markante fibrose, architectuurverstoring, fibroblastfoci", "IPF, reumatoïde artritis-ILD"], ["NSIP", "Ground-glass opaciteiten, traction bronchiectasis, vaak peribronchovasculair", "Uniforme fibrose met milde ontsteking", "CTD-ILD, exposure-related ILD"], ["OP", "Perifere consolidaties, air bronchograms, reversed halo sign", "Fibromyxoïde plugs in distale luchtwegen en alveoli", "Cryptogenic OP, CTD-ILD"], ["BIP", "Betrokkenheid van bronchioli en interstitium", "Ontsteking rond bronchioli en alveoli", "Aspiratie, CTD-gerelateerd"]]} />
      <p className="leading-relaxed"><Inline>{`UIP is het patroon dat je vooral moet koppelen aan fibrose. NSIP past meer bij een gelijkmatig verdeeld ontstekings- en fibrosebeeld. Organising pneumonia is vooral een ontstekingspatroon met opvulling van kleine luchtwegen en omliggende alveoli.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat betekent honeycombing?
**Kort antwoord:** Dat is een typisch fibrotisch beeld op HRCT, passend bij vergevorderde structurele longschade.`} />
    </div>
  )
}
