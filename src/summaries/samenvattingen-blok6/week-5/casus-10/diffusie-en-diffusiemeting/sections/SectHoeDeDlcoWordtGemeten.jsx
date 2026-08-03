import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe de DLCO wordt gemeten`}</Inline></SubHeading>
      <PBody text={`De meest gebruikte methode is de **single-breathtechniek**. De patiënt ademt eerst maximaal uit tot residuaal volume. Daarna volgt een snelle diepe inademing van een gasmengsel tot aan totale longcapaciteit. Dat mengsel bevat een kleine hoeveelheid CO, een inert tracergas zoals methaan en zuurstof.`} />
      <p className="leading-relaxed"><Inline>{`Vervolgens houdt de patiënt de adem ongeveer 10 seconden vast. In die tijd diffundeert CO vanuit de alveoli naar het bloed. Daarna ademt de patiënt uit. Het eerste deel van de uitgeademde lucht, de dode ruimte, wordt weggegooid. De rest van de uitgeademde lucht wordt geanalyseerd op CO en methaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Uit deze meting worden twee belangrijke parameters bepaald:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**VA**: het alveolaire volume dat voor het testgas bereikbaar is`}</Inline></li>
        <li><Inline>{`**KCO**: de transfercoëfficiënt, dus de snelheid waarmee CO wordt opgenomen per liter alveolair volume`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daaruit volgt:`}</Inline></p>
      <PBody text={`**DLCO = VA × KCO**`} />
      <p className="leading-relaxed"><Inline>{`VA wordt berekend uit de verdunning van het inerte gas. Bij een goede techniek komt VA ongeveer overeen met de TLC, minus de anatomische dode ruimte. KCO laat zien hoe efficiënt de gaswisseling per liter longvolume verloopt.`}</Inline></p>
    </div>
  )
}
