import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Postrenaal`}</Inline></SubHeading>
      <PBody text={`Bij **postrenale** nierinsufficiëntie is er een obstructie in de afvloed van urine. Oorzaken zijn onder andere:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urethra-obstructie;`}</Inline></li>
        <li><Inline>{`blaasontledigingsstoornis, bijvoorbeeld door prostaathypertrofie of een neurogene blaas;`}</Inline></li>
        <li><Inline>{`bilaterale ureterstenose door stenen, retroperitoneale massa, bloeding, fibrose, tumoren of endometriose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een echo kan hierbij hydronefrose laten zien.`}</Inline></p>
      <SubHeading><Inline>{`Klinische voorbeelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel oorzaken van AKI passen in herkenbare ziektebeelden. Denk bijvoorbeeld aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tumorlysis met hyperfosfatemie of hyperurikemie bij een seminoma;`}</Inline></li>
        <li><Inline>{`postinfectieuze glomerulonefritis na een infectie;`}</Inline></li>
        <li><Inline>{`vasculitis of glomerulonefritis bij huiduitslag en gewrichtsklachten;`}</Inline></li>
        <li><Inline>{`medicatie- of hemodynamisch veroorzaakte ATN na transplantatie;`}</Inline></li>
        <li><Inline>{`NSAID-gebruik of diarree bij een patiënt met diabetes en jicht;`}</Inline></li>
        <li><Inline>{`rhabdomyolyse na insulten;`}</Inline></li>
        <li><Inline>{`urineretentie bij een oudere man met koorts en prostaatproblemen.`}</Inline></li>
      </ul>
    </div>
  )
}
