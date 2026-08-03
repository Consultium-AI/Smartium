import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Meetapparatuur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Welke apparatuur nodig is, hangt af van de patiëntengroep. Voor niertransplantatiepatiënten gaat het om een bloeddrukmeter, zuurstofmeter, thermometer en weegschaal. De bloeddrukmeter en weegschaal worden gebruikt voor de reguliere wekelijkse of maandelijkse metingen. De thermometer en zuurstofmeter zijn vooral bedoeld voor situaties waarin de patiënt ziek is, bijvoorbeeld bij infectie of benauwdheid.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze apparatuur is samengebracht in één pakket: de SeCReT-box, wat staat voor Self Care in Renal Transplantation. De apparatuur wordt in bruikleen gegeven, zodat zeker is dat er met gevalideerde apparatuur wordt gewerkt.`}</Inline></p>
    </div>
  )
}
