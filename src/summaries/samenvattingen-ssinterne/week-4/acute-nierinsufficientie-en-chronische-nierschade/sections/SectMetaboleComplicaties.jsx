import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metabole complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nierfunctiestoornissen geven problemen op meerdere terreinen, omdat de nier normaal betrokken is bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitscheiding van afvalstoffen;`}</Inline></li>
        <li><Inline>{`volumeregulatie;`}</Inline></li>
        <li><Inline>{`osmoregulatie;`}</Inline></li>
        <li><Inline>{`zuur-base-evenwicht;`}</Inline></li>
        <li><Inline>{`hormonale functies.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Uitscheiding van afvalstoffen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als afvalstoffen minder goed worden uitgescheiden, ontstaan onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uremie;`}</Inline></li>
        <li><Inline>{`jicht;`}</Inline></li>
        <li><Inline>{`hyperkaliëmie;`}</Inline></li>
        <li><Inline>{`hyperfosfatemie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Volumeregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier helpt om een goede weefselperfusie te behouden. Daarbij spelen het RAAS-systeem en baroreceptoren een rol. Als dit verstoord raakt, kan overvulling ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Osmoregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier houdt normaal de hoeveelheid opgeloste deeltjes in het extracellulaire compartiment constant. Daarbij zijn ADH en aquaporines belangrijk. Verstoring hiervan leidt tot elektrolytstoornissen. In het nefrotisch syndroom speelt osmoregulatie ook een rol bij het tegengaan van proteïnurie.`}</Inline></p>
      <SubHeading><Inline>{`Zuur-base-evenwicht`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier draagt bij aan de zuur-basebalans door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`reabsorptie van bicarbonaat via koolzuuranhydrase in de proximale tubulus;`}</Inline></li>
        <li><Inline>{`secretie van H+ via intercalaire cellen in de verzamelbuis.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Hormonale functies van de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier maakt verschillende hormonen aan:`}</Inline></p>
      <DataTable rows={[["Tabel 4. Hormonen van de nier en gevolgen bij verstoring"], ["Erytropoëtine → renale anemie"], ["Renine → invloed op bloeddruk"], ["Vitamine D → hypocalciëmie en hyperparathyreoïdie, met renale osteomalacie"], ["Prostaglandines → verstoring van de autoregulatie van de perfusiedruk van de nier"]]} />
    </div>
  )
}
