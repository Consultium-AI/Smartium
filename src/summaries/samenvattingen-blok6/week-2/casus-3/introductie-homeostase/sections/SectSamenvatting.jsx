import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Homeostase is het in stand houden van een stabiele interne toestand. Het lichaam doet dit via continu werkende negatieve feedbacksystemen. Homeostatisch gereguleerde variabelen zijn onder andere lichaamstemperatuur, bloedglucose, pH, PaO2, PaCO2, bloeddruk en bloedvolume.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze variabelen hebben 5 kenmerken: ze zijn geassocieerd met bloed, helpen het organisme overleven, werken via negatieve feedback, hebben een sensor en hebben een setpoint in de integrator. Niet-homeostatische variabelen, zoals hartminuutvolume en perifere weerstand, worden juist gebruikt om homeostatische variabelen stabiel te houden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke voorbeelden zijn thermoregulatie en bloedglucosehomeostase. Daarnaast kunnen setpoints veranderen, zoals bij koorts. Tot slot bestaat er een hiërarchie tussen homeostatische variabelen: bloed pH krijgt bijvoorbeeld voorrang boven PaCO2.`}</Inline></p>
    </div>
  )
}
