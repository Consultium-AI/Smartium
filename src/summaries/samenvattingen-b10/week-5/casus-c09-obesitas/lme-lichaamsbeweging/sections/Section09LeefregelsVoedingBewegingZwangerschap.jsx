import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leefregels na bariatrische chirurgie`}</Inline></h3>
      <p><Inline>{`Na de operatie horen duidelijke leefstijlaanpassingen. Die hebben betrekking op voeding, beweging en zwangerschap.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Voeding`}</Inline></h3>
      <p><Inline>{`Na bariatrische chirurgie is het belangrijk om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`maaltijden te verdelen over de dag, meestal in 6–9 eetmomenten;`}</Inline></li>
        <li><Inline>{`te letten op productkeuze en eettechniek;`}</Inline></li>
        <li><Inline>{`honger en verzadiging goed te leren herkennen;`}</Inline></li>
        <li><Inline>{`voldoende te drinken;`}</Inline></li>
        <li><Inline>{`gevarieerd te eten;`}</Inline></li>
        <li><Inline>{`niet tegelijk te eten en te drinken;`}</Inline></li>
        <li><Inline>{`kleine porties te nemen;`}</Inline></li>
        <li><Inline>{`goed te kauwen, omdat de maag minder goed maalt;`}</Inline></li>
        <li><Inline>{`levenslang gebruik te maken van gespecialiseerde multivitaminen en calcium/vitamine D.`}</Inline></li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Beweging`}</Inline></h3>
      <p><Inline>{`Voldoende beweging blijft belangrijk, en er is extra nadruk op krachttraining. Daarmee wordt spiermassaverlies beperkt. Dat spierverlies kan namelijk oplopen tot een aanzienlijk deel van de vetvrije massa.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Zwangerschap`}</Inline></h3>
      <p><Inline>{`Een zwangerschap wordt afgeraden binnen 1 jaar na een bariatrische ingreep. De reden is dat het snelle gewichtsverlies in het eerste jaar kan leiden tot ondervoeding. Ondervoeding tijdens de zwangerschap kan samenhangen met lager geboortegewicht en vroeggeboorte.`}</Inline></p>
    </div>
  )
}
