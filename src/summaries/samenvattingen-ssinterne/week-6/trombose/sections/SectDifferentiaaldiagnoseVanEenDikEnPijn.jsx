import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose van een dik en pijnlijk been`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mogelijke oorzaken zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`oppervlakkige tromboflebitis;`}</Inline></li>
        <li><Inline>{`posttrombotisch syndroom;`}</Inline></li>
        <li><Inline>{`chronische veneuze insufficiëntie;`}</Inline></li>
        <li><Inline>{`veneuze obstructie;`}</Inline></li>
        <li><Inline>{`cellulitis;`}</Inline></li>
        <li><Inline>{`Bakerse cyste;`}</Inline></li>
        <li><Inline>{`ruptuur van de m. gastrocnemius;`}</Inline></li>
        <li><Inline>{`fractuur;`}</Inline></li>
        <li><Inline>{`hematoom;`}</Inline></li>
        <li><Inline>{`acute arteriële occlusie;`}</Inline></li>
        <li><Inline>{`lymfoedeem;`}</Inline></li>
        <li><Inline>{`hypoproteïnemie;`}</Inline></li>
        <li><Inline>{`neuropathie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom is een goede anamnese belangrijk. Je vraagt onder andere naar het begin en beloop van de klachten, trauma, medicatie zoals orale anticonceptie, zwangerschap, recente opname of operatie, immobiliteit, koorts, dyspneu, hoesten, pijn op de borst, eerdere trombose, kanker en familieanamnese.`}</Inline></p>
    </div>
  )
}
