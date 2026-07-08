import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch beeld van galactosemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Galactosemie kan zich presenteren met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`icterus;`}</Inline></li>
        <li><Inline>{`braken;`}</Inline></li>
        <li><Inline>{`hepatomegalie;`}</Inline></li>
        <li><Inline>{`slecht drinken;`}</Inline></li>
        <li><Inline>{`lethargie;`}</Inline></li>
        <li><Inline>{`diarree;`}</Inline></li>
        <li><Inline>{`sepsis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Minder vaak zijn er ook:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stollingsstoornissen;`}</Inline></li>
        <li><Inline>{`ascites;`}</Inline></li>
        <li><Inline>{`convulsies.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aanvullend zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leverdysfunctie;`}</Inline></li>
        <li><Inline>{`tubulusdysfunctie;`}</Inline></li>
        <li><Inline>{`hemolytische anemie.`}</Inline></li>
      </ul>
      <PBody text={`De behandeling is een **lactosevrij dieet**, bijvoorbeeld met sojavoeding.`} />
      <p className="leading-relaxed"><Inline>{`De prognose kan restverschijnselen geven, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`enige neuropsychologische achteruitgang;`}</Inline></li>
        <li><Inline>{`ovariële dysfunctie;`}</Inline></li>
        <li><Inline>{`cataract.`}</Inline></li>
      </ul>
    </div>
  )
}
