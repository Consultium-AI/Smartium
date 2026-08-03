import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Statische longvolumes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Statische longvolumes worden gemeten in rust, zonder actieve geforceerde ademhaling. Ze geven inzicht in de totale inhoud en reservecapaciteit van de longen. Belangrijke statische parameters zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`TLC: totale longcapaciteit;`}</Inline></li>
        <li><Inline>{`VC: vitale capaciteit;`}</Inline></li>
        <li><Inline>{`FRC: functionele residuele capaciteit;`}</Inline></li>
        <li><Inline>{`RV: residueel volume.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze metingen zijn belangrijk als je wilt weten of er lucht “vastzit” in de longen, ook wel air trapping genoemd. Sommige aandoeningen zie je namelijk niet goed met alleen dynamische spirometrie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De longvolumes hangen af van leeftijd, geslacht en lengte. Als iemand langer is, is de TLC groter. Met toenemende leeftijd neemt het residuele volume toe door verlies van elasticiteit van het longweefsel.`}</Inline></p>
      <SubHeading><Inline>{`Hoe meet je statische longvolumes?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Met gewone spirometrie kun je VT, ERV, IC en VC meten. De VC wordt ook wel slow VC genoemd. Bij gezonde mensen zijn VC en FVC gelijk, maar bij obstructieve longziekten kan de VC groter zijn dan de FVC door collaps van de luchtwegen tijdens geforceerde uitademing.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Om TLC te bepalen heb je ook RV nodig, en dat kun je niet met gewone spirometrie meten. Daarvoor zijn aanvullende technieken nodig die eerst FRC bepalen. Daarna kun je rekenen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`RV = FRC - ERV`}</Inline></li>
        <li><Inline>{`TLC = RV + VC`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aanvullende technieken voor FRC`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie belangrijke manieren om FRC te meten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bodyplethysmografie: de patiënt zit in een luchtdichte kamer en drukveranderingen worden gemeten;`}</Inline></li>
        <li><Inline>{`heliumverdunningsmethode: de verdunning van helium wordt gebruikt om het longvolume te berekenen;`}</Inline></li>
        <li><Inline>{`stikstofuitwasmethode: de patiënt ademt zuurstof in en de uitwas van stikstof wordt gemeten.`}</Inline></li>
      </ul>
    </div>
  )
}
