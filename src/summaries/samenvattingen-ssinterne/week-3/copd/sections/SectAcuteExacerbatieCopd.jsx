import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute exacerbatie COPD`}</Inline></SubHeading>
      <PBody text={`Een **exacerbatie** is een acute verslechtering van de luchtwegklachten waarbij extra behandeling nodig is. Meestal is er dan meer benauwdheid, meer hoest en meer sputum, of sputum dat dikker en purulenter wordt.`} />
      <PBody text={`De meest voorkomende uitlokkende factor is een **luchtweginfectie**, maar ook prikkelende stoffen, een operatie, hartfalen en stress kunnen een exacerbatie uitlokken.`} />
      <p className="leading-relaxed"><Inline>{`Exacerbaties zijn belangrijk, omdat ze:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ontsteking in de luchtwegen verergeren;`}</Inline></li>
        <li><Inline>{`zorgen voor meer mucusproductie;`}</Inline></li>
        <li><Inline>{`de luchtwegvernauwing vergroten;`}</Inline></li>
        <li><Inline>{`de zuurstofopname verminderen;`}</Inline></li>
        <li><Inline>{`samenhangen met hogere mortaliteit;`}</Inline></li>
        <li><Inline>{`de kwaliteit van leven verlagen;`}</Inline></li>
        <li><Inline>{`leiden tot sneller verlies van longfunctie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Differentiaaldiagnose bij een exacerbatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een verslechtering moet je altijd ook denken aan andere oorzaken, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cardiovasculaire events;`}</Inline></li>
        <li><Inline>{`toegenomen hartfalen;`}</Inline></li>
        <li><Inline>{`longembolie;`}</Inline></li>
        <li><Inline>{`pneumonie;`}</Inline></li>
        <li><Inline>{`pneumothorax.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Ernst en behandeling van een exacerbatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Exacerbaties worden ingedeeld in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**mild**: behandeling met kortwerkende luchtwegverwijders;`}</Inline></li>
        <li><Inline>{`**matig**: toevoeging van antibiotica en/of orale corticosteroïden;`}</Inline></li>
        <li><Inline>{`**ernstig**: opname in ziekenhuis of beoordeling op de spoedeisende hulp.`}</Inline></li>
      </ul>
      <PBody text={`Bij een ernstige exacerbatie kan zuurstof worden toegevoegd. Bij zeer ernstige benauwdheid kan **non-invasieve beademing** nodig zijn.`} />
      <PBody text={`Systemische corticosteroïden verbeteren de FEV1, de zuurstofopname en verkorten herstel en opnameduur. De gebruikelijke behandelduur is **5–7 dagen**.`} />
      <p className="leading-relaxed"><Inline>{`Antibiotica versnellen het herstel en helpen een vroeg recidief voorkomen. Bij herhaalde exacerbaties kunnen ze soms ook in onderhoudsdosering worden gegeven om opnames te voorkomen.`}</Inline></p>
    </div>
  )
}
