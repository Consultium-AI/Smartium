import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`RAAS en de basis van bloeddrukregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het RAAS is een belangrijk regelsysteem waarmee het lichaam de bloeddruk en de hoeveelheid circulerend volume op peil houdt. Dat is vooral van belang als de bloeddruk dreigt te dalen of als er te weinig effectief circulerend volume is. Het systeem zorgt er dan voor dat de nieren meer natrium en water vasthouden, waardoor het bloedvolume stijgt en de bloeddruk omhoog gaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een handig uitgangspunt is dat volumeregulatie vooral draait om natrium. Als het lichaam natrium vasthoudt, houdt het ook water vast en neemt het volume toe. Osmoregulatie draait juist om de natriumconcentratie, en die wordt vooral via water geregeld. Bij een hogere osmolaliteit krijg je dorst en wordt ADH uitgescheiden, zodat je meer water vasthoudt en drinkt. Zo kan de natriumconcentratie weer dalen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat gebeurt er bij uitdroging met het RAAS?
**Mini-antwoord:** Het RAAS wordt geactiveerd, zodat het lichaam vocht en natrium vasthoudt.`} />
    </div>
  )
}
