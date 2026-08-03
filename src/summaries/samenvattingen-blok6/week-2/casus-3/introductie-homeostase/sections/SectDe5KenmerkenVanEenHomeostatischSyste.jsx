import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De 5 kenmerken van een homeostatisch systeem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Homeostatisch gereguleerde variabelen hebben 5 kenmerken:`}</Inline></p>
      <DataTable rows={[["Tabel 2. De 5 kenmerken van homeostatisch gereguleerde variabelen"], ["---"], ["1. Ze zijn geassocieerd met bloed en/of worden gevonden in het bloed"], ["2. Ze dragen bij aan het overleven van het organisme in een veranderende omgeving"], ["3. Ze zijn een continu opererend negatief feedbacksysteem"], ["4. Ze hebben een sensor"], ["5. Ze hebben een setpoint in de integrator"]]} />
      <SubHeading><Inline>{`1. Geassocieerd met bloed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel homeostatische variabelen zitten in het bloed of hebben direct met bloed te maken, zoals glucose, pH, calcium, zuurstof en koolstofdioxide.`}</Inline></p>
      <SubHeading><Inline>{`2. Belangrijk voor overleven`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze variabelen helpen het organisme te overleven. Dat doen ze door de omstandigheden voor de cellen geschikt te houden.`}</Inline></p>
      <SubHeading><Inline>{`3. Continu opererend negatief feedbacksysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het systeem werkt voortdurend. De variabele wordt steeds gemeten en bijgestuurd. Dit is niet een simpele aan-uitregeling, maar een doorlopend proces.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een cruise control in een auto is een goed beeld: de snelheid wordt continu gemeten en aangepast. Een thermostaat is minder goed vergelijkbaar, omdat die grover werkt met aan en uit.`}</Inline></p>
      <SubHeading><Inline>{`4. Sensor`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er moet een sensor zijn die de variabele waarneemt. Zonder sensor kan het systeem niet weten of er bijsturing nodig is.`}</Inline></p>
      <SubHeading><Inline>{`5. Setpoint in de integrator`}</Inline></SubHeading>
      <PBody text={`De integrator vergelijkt de gemeten waarde met een **setpoint**. Dat setpoint is de waarde waar het systeem naartoe probeert te regelen.`} />
    </div>
  )
}
