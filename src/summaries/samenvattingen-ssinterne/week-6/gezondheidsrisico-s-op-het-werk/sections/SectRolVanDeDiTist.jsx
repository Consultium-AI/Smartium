import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rol van de diëtist`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diëtist werkt planmatig en systematisch. Dat betekent:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`diëtistisch onderzoek;`}</Inline></li>
        <li><Inline>{`diëtistische diagnose;`}</Inline></li>
        <li><Inline>{`behandelplan opstellen en uitvoeren;`}</Inline></li>
        <li><Inline>{`evaluatie;`}</Inline></li>
        <li><Inline>{`afsluiting van de behandeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij mevrouw De Vries wordt een voedingsanamnese afgenomen. Daaruit blijkt dat haar energie- en eiwitinname onvoldoende zijn.`}</Inline></p>
      <SubHeading><Inline>{`Energie- en eiwitbehoefte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De berekende energiebehoefte is 1896 kcal per dag. De inname ligt daaronder. Voor de ruststofwisseling wordt bij een BMI < 30 kg/m² de WHO-formule gebruikt. Daarbovenop komen toeslagen voor activiteit en ziekte/stress. Voor veel klinische patiënten is een toeslag van 30% voldoende.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor eiwit geldt dat bij ouderen die in het ziekenhuis zijn opgenomen meestal 1,0–1,2 g/kg/dag wordt geadviseerd. Dat hangt samen met een hogere eiwitbehoefte en factoren zoals anabole resistentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij mevrouw De Vries is de actuele BMI 26,2, dus haar actuele gewicht kan worden gebruikt. Omdat zij 10 kg onbedoeld is afgevallen, wordt een eiwitinname van 1,0–1,2 g/kg/dag geadviseerd. Dat komt neer op ongeveer 70–85 gram eiwit per dag.`}</Inline></p>
    </div>
  )
}
