import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`6. Maligniteit met afvloedbelemmering`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een vrouw van 48 jaar met al langer een dikker linkerbeen, nieuw vaginaal bloedverlies en zeurende onderbuikpijn moet je denken aan een **maligne proces in het kleine bekken** met lymfatische of veneuze afvloedbelemmering.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Mogelijke tumoren zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`blaas;`}</Inline></li>
        <li><Inline>{`rectum;`}</Inline></li>
        <li><Inline>{`cervix;`}</Inline></li>
        <li><Inline>{`endometrium;`}</Inline></li>
        <li><Inline>{`ovarium.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Omdat er vaginaal bloedverlies is, staan **cervixcarcinoom** en **endometriumcarcinoom** hoog op de lijst.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Diagnostiek:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anamnese en lichamelijk onderzoek;`}</Inline></li>
        <li><Inline>{`echo van het been en de liesregio om een **proximale DVT** uit te sluiten;`}</Inline></li>
        <li><Inline>{`verwijzing naar de **gynaecoloog**;`}</Inline></li>
        <li><Inline>{`**CT-abdomen/bekken** om de anatomie en eventuele maligniteit in beeld te brengen;`}</Inline></li>
        <li><Inline>{`bij aanwijzingen voor maligniteit: **biopt** voor histologische diagnose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling hangt af van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **stadiëring**;`}</Inline></li>
        <li><Inline>{`het **histologische type**;`}</Inline></li>
        <li><Inline>{`de uitgebreidheid van de ziekte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Mogelijke behandelingen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chirurgie;`}</Inline></li>
        <li><Inline>{`radiotherapie;`}</Inline></li>
        <li><Inline>{`systemische therapie;`}</Inline></li>
        <li><Inline>{`combinaties daarvan.`}</Inline></li>
      </ul>
    </div>
  )
}
