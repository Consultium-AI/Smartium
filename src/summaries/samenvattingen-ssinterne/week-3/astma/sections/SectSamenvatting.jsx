import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma is een wisselende, chronische aandoening van de luchtwegen met klachten zoals piepen, hoesten, kortademigheid en een drukkend gevoel op de borst. De diagnose stel je met klachten, anamnese en aanvullend onderzoek zoals spirometrie, peakflowmeting en zo nodig allergieonderzoek. Belangrijk is dat de obstructie reversibel is en dat je ook denkt aan andere oorzaken van dyspnoe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit een inhalatiecorticosteroïd en een beta-2-sympathicomimeticum, aangevuld met goede voorlichting, inhalatie-instructie en follow-up. Als klachten aanhouden, controleer je eerst therapietrouw, inhalatietechniek en uitlokkende factoren. Daarna kun je de behandeling opschalen of verwijzen.`}</Inline></p>
    </div>
  )
}
