import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek en aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek let je op verhoogde ademarbeid, gebruik van hulpademhalingsspieren en *pursed lip breathing*. Ook de voedingstoestand is belangrijk: cachexie of juist overgewicht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een perifere saturatie van 92% of lager moet een arteriële bloedgasanalyse worden verricht. Die geeft nauwkeuriger informatie over zuurstof, maar ook over pH en CO2.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij ernstig COPD kan cor pulmonale ontstaan. Chronische hypoxemie veroorzaakt vasoconstrictie van de longvaten, waardoor de weerstand stijgt en het rechter ventrikel harder moet werken. Daardoor kan rechtszijdig hartfalen ontstaan met enkeloedeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek kan nuttig zijn als de klachten en de obstructie niet goed overeenkomen, of om een nieuwe diagnose beter in kaart te brengen. Bloedonderzoek is niet standaard nodig, maar nt-proBNP kan helpen bij verdenking op hartfalen. Eosinofielen in het bloed kunnen de keuze voor inhalatiecorticosteroïden sturen: hoe hoger de eosinofielen, hoe groter de kans op respons.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Longfunctieonderzoek kan worden uitgebreid met bodyplethysmografie en DLCO-meting. Bij COPD zie je vaak air trapping met verhoogd residuaal volume en daardoor ook verhoogde totale longcapaciteit. De DLCO is vaak verlaagd bij emfyseem door verlies van alveolair oppervlak. Een lage DLCO is geassocieerd met meer ziektelast, minder inspanningscapaciteit en hogere mortaliteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Beeldvorming is niet nodig voor de diagnose, maar kan wel helpen bij de differentiaaldiagnose. Een X-thorax kan normaal zijn, maar soms zie je afplatting van het diafragma of een vergrote retrosternale ruimte. Een CT-thorax kan de uitgebreidheid en verdeling van emfyseem laten zien.`}</Inline></p>
    </div>
  )
}
