import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De centrale klacht in deze casus is een rood, gezwollen en pijnlijk gebied in de oksel, soms met uitbreiding naar de arm. Dat lijkt op het eerste gezicht een lokale huidafwijking, maar de onderliggende oorzaak kan heel verschillend zijn. De casus laat zien dat je altijd moet nadenken vanuit de anatomie: gaat het om een probleem van de huid, de lymfeafvoer, de bloedvaten of mogelijk om een tumorproces?`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Er worden verschillende varianten van dezelfde presentatie besproken. Daardoor wordt duidelijk dat dezelfde klacht in de oksel of lies meerdere verklaringen kan hebben. Soms is het een duidelijke huidinfectie, soms een ontstoken lymfeklier, soms een chronisch lymfoedeem met een secundaire infectie, en soms een recidief van een maligniteit.`}</Inline>
      </p>
    </div>
  )
}
