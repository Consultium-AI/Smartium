import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prenatale screening: het doel en de plaats in de zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Prenatale screening en diagnostiek zijn bedoeld om tijdens de zwangerschap afwijkingen op te sporen of te bevestigen. Dat gebeurt niet alleen om ouders informatie te geven, maar ook om de zorg rond zwangerschap, bevalling en de pasgeborene zo goed mogelijk te organiseren. Als er een afwijking wordt vermoed, kan de bevalling bijvoorbeeld plaatsvinden op een plek waar de juiste verloskundige en neonatale zorg aanwezig is.`}</Inline></p>
      <PBody text={`Een belangrijk uitgangspunt binnen prenatale screening is dat de zwangere vrouw een **geïnformeerde keuze** kan maken. Dat betekent dat zij, na goede counseling, zelf kan beslissen of zij screening wil laten doen en welke vorm van onderzoek zij kiest. Dit is extra belangrijk omdat prenatale screening onder de **Wet op het Bevolkingsonderzoek (WBO)** valt. Daarom mag screening niet zomaar “automatisch” worden aangevraagd: er hoort altijd een counselingsgesprek bij met een gecertificeerd counselor.`} />
      <SubHeading><Inline>{`Waarom is counseling zo belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat de keuze voor screening gevolgen kan hebben. Een uitslag kan geruststellen, maar ook leiden tot vervolgonderzoek, onzekerheid of moeilijke keuzes. De bedoeling is dus niet alleen testen, maar vooral helpen kiezen.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** Waarom kan een zwangere niet zomaar direct een NIPT laten doen zonder gesprek?
**Mini-antwoord:** Omdat prenatale screening onder wettelijke regels valt en een geïnformeerde keuze alleen mogelijk is na counseling.`} />
    </div>
  )
}
