import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek: beeldvorming`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose pneumothorax is vooral een radiologische diagnose. De meest gebruikte methode is de X-thorax. Daarmee kun je de rand van de pneumothorax zien en beoordelen hoe groot deze is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast wordt echografie steeds vaker gebruikt, vooral bij instabiele patiënten op de SEH of IC. De sensitiviteit is hoog en de specificiteit is zeer hoog. Belangrijke echografische kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het ontbreken van het barcode sign`}</Inline></li>
        <li><Inline>{`het zien van een lung point, dat zeer specifiek is`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms is een CT-scan nodig, bijvoorbeeld als de diagnose onzeker is, bij bullae of bij trauma. Een CT kan ook helpen om de onderliggende oorzaak beter te beoordelen, zoals emfyseem of bullae.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Beeldvorming bij pneumothorax`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Rol", "Opmerking"], ["X-thorax", "meest gebruikt", "laat de rand van de pneumothorax zien"], ["Echografie", "steeds vaker gebruikt", "handig bij instabiele patiënten; barcode sign en lung point"], ["CT-thorax", "aanvullend bij twijfel", "geeft ook informatie over onderliggende longafwijkingen"]]} />
      <p className="leading-relaxed"><Inline>{`Een eenvoudige pneumothorax is een pneumothorax zonder mediastinale verplaatsing naar de andere kant. Bij een spanningspneumothorax ontstaat er een eenrichtingsklepmechanisme: lucht komt de pleuraholte in tijdens inademing, maar kan er niet goed meer uit tijdens uitademing. Daardoor neemt de druk steeds verder toe. Dit kan leiden tot hypotensie, tachycardie en ernstige dyspneu. Een spanningspneumothorax komt voor bij een klein deel van de patiënten met een pneumothorax, maar is wel een spoedsituatie.`}</Inline></p>
    </div>
  )
}
