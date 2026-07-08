import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Farmacodynamiek: wat doet het geneesmiddel met het lichaam?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Farmacodynamiek kan bij kinderen anders zijn dan bij volwassenen. Daardoor kunnen ook bijwerkingen anders optreden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij kinderen geven benzodiazepinen vaker paradoxale reacties, zoals excitatie in plaats van sedatie. Promethazine geeft een verhoogde kans op wiegendood en is daarom gecontra-indiceerd bij kinderen jonger dan 2 jaar. Verapamil intraveneus is gecontra-indiceerd bij kinderen jonger dan 1 jaar vanwege kans op hartstilstand.`}</Inline></p>
    </div>
  )
}
