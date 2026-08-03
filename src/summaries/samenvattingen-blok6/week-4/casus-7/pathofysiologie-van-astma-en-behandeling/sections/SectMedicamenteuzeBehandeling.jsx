import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hoeksteen van de medicamenteuze behandeling is inhalatiemedicatie. Er zijn twee hoofdgroepen: luchtwegverwijders en ontstekingsremmers. Vaak worden deze gecombineerd voorgeschreven. De keuze hangt af van de ernst en frequentie van de klachten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Medicatie voor astma`}</Inline></SubHeading>
      <DataTable rows={[["Functie", "Duur", "Naam", "Receptor", "Voorbeeld"], ["Luchtwegverwijdend", "kortwerkend", "SABA", "B2", "salbutamol"], ["Luchtwegverwijdend", "kortwerkend", "SAMA", "M2", "ipratropium"], ["Luchtwegverwijdend", "langwerkend", "LABA", "B2", "formoterol"], ["Luchtwegverwijdend", "langwerkend", "LAMA", "M2", "tiotropium"], ["Ontstekingsremmend", "langwerkend", "ICS", "GC", "fluticason"], ["Ontstekingsremmend", "langwerkend", "LTRA", "LT", "montelukast"], ["Combinatie", "kortwerkend", "SABA/SAMA", "B2/M2", "fen-ipra"], ["Combinatie", "langwerkend", "ICS/LABA", "GC/B2", "flut-salm"], ["Combinatie", "langwerkend", "ICS/LABA/LAMA", "GC/B2/M2", "bec-for-glyc"], ["Biologicals", "langwerkend", "IgE, IL5, IL4R", "IL-R", "omalizumab"]]} />
      <p className="leading-relaxed"><Inline>{`Bij het starten van inhalatiemedicatie wordt gekeken naar de ernst en frequentie van symptomen, eventuele longaanvallen en de longfunctie. Bij lage ziektelast en normale longfunctie wordt gekozen voor zo nodig ICS/formoterol. Bij hogere ziektelast of slechtere longfunctie kan direct met een hogere dosering worden gestart als onderhoudsbehandeling en zo nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De toedieningsvorm is ook belangrijk. Er zijn poederinhalatoren en dosisaerosolen. De keuze hangt af van voorkeur en mogelijkheden van de patiënt. Voor sommige poederinhalatoren is een krachtige inhalatie nodig, wat lastig kan zijn bij zwakkere of oudere patiënten. Dosisaerosolen hebben meer impact op het milieu, vooral door broeikasgasuitstoot, waardoor poederinhalatoren waar mogelijk de voorkeur kunnen hebben.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Correct gebruik van inhalatiemedicatie is essentieel. Bij ongeveer 70% van de patiënten gaat er iets mis in het gebruik. Dat kan leiden tot minder effect of juist bijwerkingen. Bij een dosisaerosol moet altijd een voorzetkamer worden gebruikt. Na starten van inhalatiemedicatie moet op korte termijn follow-up plaatsvinden om het effect te beoordelen.`}</Inline></p>
      <SubHeading><Inline>{`Monitoring van controle`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor het beoordelen van astmacontrole kan de ACQ worden gebruikt, een gevalideerde vragenlijst met 7 items over klachten, medicatiegebruik en FEV1. Een verandering van 0,5 punt is klinisch relevant. Een score van 0,0-0,74 betekent goede controle, 0,75-1,5 matige controle en 1,5 of hoger geen controle.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast de ACQ kijk je ook naar longfunctie en het aantal exacerbaties in het afgelopen jaar. Als de controle onvoldoende is, moet je nagaan of er sprake is van een verkeerde diagnose, prikkels, therapieontrouw, inhalatieproblemen, comorbiditeit of een ander endotype.`}</Inline></p>
    </div>
  )
}
