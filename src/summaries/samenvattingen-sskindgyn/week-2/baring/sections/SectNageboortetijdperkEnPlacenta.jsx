import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nageboortetijdperk en placenta`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de geboorte van het kind volgt het nageboortetijdperk. Dan moet de placenta geboren worden. Oxytocine wordt gegeven om dit tijdperk te bevorderen. Het vermindert het vaginaal bloedverlies en zorgt ervoor dat de placenta vlot geboren wordt.`}</Inline></p>
      <PBody text={`Daarna voel je of de placenta los ligt. De handgreep waarmee je beoordeelt of de placenta los ligt van de uteruswand is de **handgreep van Küstner**. Daarbij houd je de navelstreng op spanning en geef je met de andere hand druk op de grens tussen corpus uteri en onderste uterussegment. Trek de navelstreng naar binnen, dan is Küstner negatief en ligt de placenta nog niet los. Gebeurt er niets of komt de navelstreng iets naar buiten, dan is Küstner positief en kan de placenta ontwikkeld worden.`} />
      <p className="leading-relaxed"><Inline>{`Na de geboorte van de placenta bepaal je de hoogte van de fundus, inspecteer je het baringskanaal op rupturen en hecht je zo nodig een ruptuur of episiotomie.`}</Inline></p>
    </div>
  )
}
