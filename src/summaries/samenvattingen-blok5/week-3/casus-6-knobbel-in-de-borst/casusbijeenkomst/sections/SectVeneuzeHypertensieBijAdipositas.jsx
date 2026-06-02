import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Veneuze hypertensie bij adipositas`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Een belangrijk terugkerend thema is dat **adipositas** kan leiden tot **veneuze hypertensie**. Bij een vrouw met een BMI van 54, gezwollen kuiten, slanke enkels en recidiverende wonden rond de enkels past dit beeld goed. De combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstig overgewicht;`}</Inline></li>
        <li><Inline>{`beperkte mobiliteit;`}</Inline></li>
        <li><Inline>{`onvoldoende gebruik van de kuitspierpomp;`}</Inline></li>
        <li><Inline>{`chronische veneuze druk`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`leidt tot veneuze problematiek, wondjes en soms ook lymfoedeem.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Aanvullende diagnostiek kan bestaan uit:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anamnese naar eerdere DVT, orthopneu en dyspneu;`}</Inline></li>
        <li><Inline>{`lichamelijk onderzoek naar veneuze insufficiëntie, overvulling en teken van Stemmer;`}</Inline></li>
        <li><Inline>{`labonderzoek om hart- of leverafwijkingen uit te sluiten;`}</Inline></li>
        <li><Inline>{`ECG;`}</Inline></li>
        <li><Inline>{`duplexonderzoek naar varices, klepinsufficiëntie en posttrombotische resten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**leefstijlinterventie** en gewichtsreductie;`}</Inline></li>
        <li><Inline>{`**ambulante compressietherapie**;`}</Inline></li>
        <li><Inline>{`wondbehandeling;`}</Inline></li>
        <li><Inline>{`oefeningen met een **fysiotherapeut** om de voet- en kuitspierpomp beter te gebruiken;`}</Inline></li>
        <li><Inline>{`zo nodig verdere verwijzing voor de onderliggende heupklachten.`}</Inline></li>
      </ul>
    </div>
  )
}
