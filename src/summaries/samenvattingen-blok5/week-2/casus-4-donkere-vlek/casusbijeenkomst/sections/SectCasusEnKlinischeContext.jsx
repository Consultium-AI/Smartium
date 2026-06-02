import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De casus gaat over een jonge vrouw met een voelbare afwijking in de borst en een duidelijke familiale belasting. Bij inspectie is er aan de borst niets opvallends te zien, maar bij palpatie voelt de huisarts toch een knobbel in de rechterborst. De knobbel is niet pijnlijk en ook de rest van de borst geeft geen pijn. De oksels worden ook onderzocht.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`De kern van de casus is dat je bij zo’n presentatie niet geruststellend moet afwachten, maar verder moet denken in de richting van borstkanker en dus aanvullende diagnostiek moet inzetten.`}</Inline>
      </p>
      <SubHeading><Inline>{`Waarom is dit klinisch belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een jonge vrouw kan een borstknobbel ook goedaardig zijn, bijvoorbeeld een cyste of een fibroadenoom. Toch is de combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een palpabele afwijking;`}</Inline></li>
        <li><Inline>{`jonge leeftijd;`}</Inline></li>
        <li><Inline>{`en familiale belasting`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`voldoende reden om borstkanker serieus te overwegen en verder te onderzoeken.`}</Inline>
      </p>
    </div>
  )
}
