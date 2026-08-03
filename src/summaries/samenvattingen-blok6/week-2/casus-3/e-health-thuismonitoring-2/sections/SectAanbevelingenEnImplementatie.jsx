import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanbevelingen en implementatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De aanbevelingen uit het patiëntenonderzoek laten zien dat implementatie beter kan door meer vanuit het perspectief van de gebruiker te denken. Nog beter is het om patiënten actief mee te laten denken bij de invoering van monitoring. Dat sluit aan bij het idee dat digitale zorg niet alleen technisch moet werken, maar ook goed moet passen bij het dagelijks leven van patiënten.`}</Inline></p>
    </div>
  )
}
