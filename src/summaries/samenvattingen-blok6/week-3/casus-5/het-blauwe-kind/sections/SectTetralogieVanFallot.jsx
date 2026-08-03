import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tetralogie van Fallot`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tetralogie van Fallot is de meest voorkomende cyanotische hartafwijking. Het komt voor bij ongeveer 4% van alle aangeboren hartafwijkingen, dus bij ongeveer 1 op 3600 pasgeborenen. De afwijking werd voor het eerst beschreven door Etienne Fallot.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De vier klassieke kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ventrikelseptumdefect;`}</Inline></li>
        <li><Inline>{`pulmonaalstenose;`}</Inline></li>
        <li><Inline>{`overrijdende aorta;`}</Inline></li>
        <li><Inline>{`rechterventrikelhypertrofie.`}</Inline></li>
      </ul>
      <DataTable rows={[["Tabel 3. De vier kenmerken van Tetralogie van Fallot"], ["VSD", "Opening in het tussenschot tussen de kamers"], ["Pulmonaalstenose", "Vernauwing van de uitstroom naar de longen"], ["Overrijdende aorta", "De aorta ligt deels boven het VSD"], ["Rechterventrikelhypertrofie", "Verdikking van de rechterkamer door verhoogde belasting"]]} />
      <SubHeading><Inline>{`Waarom geeft Tetralogie van Fallot cyanose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij Tetralogie van Fallot is er een vernauwing richting de longslagader. Daardoor kan bloed moeilijk naar de longen stromen. Het zuurstofarme bloed uit de rechterkamer gaat dan deels via het VSD naar de aorta. Daar mengt het zich met het zuurstofrijke bloed uit de linker kamer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het gevolg is dat de zuurstofsaturatie in de aorta lager is dan normaal. In plaats van ongeveer 99% kan die bijvoorbeeld rond 85% liggen. Hoe ernstiger de pulmonaalstenose, hoe meer cyanose.`}</Inline></p>
    </div>
  )
}
