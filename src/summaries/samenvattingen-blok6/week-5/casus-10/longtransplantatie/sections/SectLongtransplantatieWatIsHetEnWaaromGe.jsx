import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longtransplantatie: wat is het en waarom gebeurt het?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longtransplantatie is een levensverlengende behandeling voor patiënten met een ernstige, progressieve longziekte die ondanks maximale behandeling verder achteruitgaat. Het gaat dus niet om een standaardbehandeling, maar om een hoog-risico ingreep voor patiënten bij wie de ziekte in het eindstadium is gekomen.`}</Inline></p>
      <PBody text={`De belangrijkste reden om een longtransplantatie te doen is **levensverlenging**. Kwaliteit van leven is ook belangrijk, maar staat hier op de tweede plaats, omdat donorlongen schaars zijn. Er moet daarom steeds goed worden afgewogen of een transplantatie echt voldoende winst oplevert.`} />
      <p className="leading-relaxed"><Inline>{`Longtransplantatie is een breed en complex vakgebied. Het vraagt samenwerking tussen verschillende specialisten, zoals longartsen, chirurgen, intensivisten, infectiologen, nefrologen, fysiotherapeuten en andere experts. Dat komt doordat er niet alleen chirurgische problemen zijn, maar ook problemen met infecties, nierfunctie, afstoting en cardiovasculaire risico’s.`}</Inline></p>
    </div>
  )
}
