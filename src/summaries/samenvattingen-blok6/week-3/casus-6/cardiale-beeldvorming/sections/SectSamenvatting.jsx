import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiale CT is een belangrijke, non-invasieve techniek voor de beoordeling van het hart en vooral de coronairen. De scan moet met ECG-synchronisatie gebeuren, bij voorkeur in de diastole en bij een lage hartfrequentie, om bewegingsartefacten te voorkomen. Er zijn twee hoofdtoepassingen: de CT-kalkscore zonder contrast voor risicostratificatie en de CTA coronairen met contrast om coronairlijden uit te sluiten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kalkscore geeft informatie over atherosclerose en cardiovasculair risico. Een score van 0 maakt significante stenosen zeer onwaarschijnlijk, terwijl een hoge score juist wijst op een verhoogd risico. CTA coronairen is vooral geschikt bij patiënten met atypische thoracale pijn en een laag of matig risicoprofiel. De grootste kracht van CTA is de hoge negatieve voorspellende waarde. De belangrijkste nadelen zijn straling, contrastmiddel en verminderde beoordeelbaarheid bij veel calcificatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Kort gezegd: cardiale CT is vooral een sterke test om coronairlijden betrouwbaar uit te sluiten bij de juiste patiënt.`}</Inline></p>
    </div>
  )
}
