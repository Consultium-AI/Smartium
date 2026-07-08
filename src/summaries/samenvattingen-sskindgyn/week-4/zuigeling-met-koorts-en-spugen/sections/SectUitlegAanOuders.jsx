import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitleg aan ouders`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ouders moeten begrijpen wat hun kind heeft, waardoor het komt, wat zij zelf kunnen doen en wat de prognose is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het kind heeft een infectie van de urinewegen met nierfunctiestoornissen. De oorzaak is een aangeboren vernauwing in de plasbuis, waardoor de blaas extra sterk is geworden en het deel van de plasbuis boven de vernauwing verwijd is. Daardoor is urine teruggevloeid naar de nieren, wat het risico op urineweginfecties vergroot. De precieze oorzaak van de vernauwing is niet bekend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ouders moeten alert zijn op nieuwe urineweginfecties. Omdat klachten op jonge leeftijd vaak aspecifiek zijn, moet bij koorts zonder duidelijke focus altijd urineonderzoek worden verricht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wat de prognose betreft: als het serumcreatinine bij ontslag normaal is, betekent dat dat de nierfunctie op dat moment normaal is. Dat sluit nierschade niet uit, omdat de nieren veel reservecapaciteit hebben. Daarom blijft een DMSA-scan belangrijk. Als daar schade zichtbaar is, is er een verhoogd risico op hypertensie en moet dit poliklinisch worden gecontroleerd. Ook moet de nierfunctie blijven worden gevolgd terwijl het kind groeit. Daarnaast kunnen kinderen met kleppen blaasfunctiestoornissen ontwikkelen; daarover kun je pas later, wanneer het kind zindelijk is, een goede uitspraak doen.`}</Inline></p>
    </div>
  )
}
