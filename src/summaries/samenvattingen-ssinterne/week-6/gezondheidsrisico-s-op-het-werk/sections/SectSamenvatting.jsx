import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ondervoeding komt vaak voor bij oudere opgenomen patiënten en heeft belangrijke gevolgen voor herstel, functioneren en overleving. Een normale BMI sluit ondervoeding niet uit; onbedoeld gewichtsverlies is minstens zo belangrijk. Screening met bijvoorbeeld MUST of SNAQ helpt om risico’s vroeg te herkennen. Albumine is wel prognostisch, maar niet geschikt om de voedingstoestand zelf te beoordelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sarcopenie is verlies van spiermassa en spierkracht en hangt nauw samen met ondervoeding, inactiviteit en ziekte. De behandeling is multidisciplinair en richt zich op voeding, beweging en aanpak van onderliggende oorzaken. Bij mevrouw De Vries speelt naast ondervoeding ook chronische nierinsufficiëntie, waardoor dieetbegeleiding zorgvuldig moet worden afgestemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast laat de module zien dat werk zowel gezondmakend als belastend kan zijn. In de zorg en in andere beroepen zijn veiligheid, preventie en bewustzijn van risico’s essentieel. Als coassistent moet je ook letten op je eigen belastbaarheid, kernkwaliteiten en valkuilen.`}</Inline></p>
    </div>
  )
}
