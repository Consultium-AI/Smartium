import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt een normaal hart?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om hartfalen te begrijpen, moet je eerst weten hoe een normaal hart functioneert. Het hart pompt bloed rond zodat organen voldoende zuurstof en voedingsstoffen krijgen. Daarbij is het belangrijk dat het hart zich goed kan vullen en daarna krachtig kan samentrekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hartfalen ontstaat wanneer het hart dit niet meer goed kan doen. Dan kan het lichaam niet meer voldoende bloed rondpompen om aan de behoefte van het lichaam te voldoen. Het gevolg is dat iemand klachten krijgt, zoals moeheid en kortademigheid, en dat er vaak vocht vasthouden ontstaat.`}</Inline></p>
    </div>
  )
}
