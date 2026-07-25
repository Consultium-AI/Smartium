import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Infectieuze oorzaken`}</Inline></SubHeading>
      <PBody text={`De meest voorkomende infectieuze oorzaken van coma zijn **meningitis**, **encefalitis**, **sepsis**, **hersenabces** en **hersenempyeem**.`} />
      <PBody text={`Bij **meningitis** is vooral de meningen ontstoken. Bij **encefalitis** is het hersenparenchym zelf ontstoken. Een afgekapselde ontsteking in het hersenparenchym heet een **hersenabces**. Een etterige ontsteking in een bestaand compartiment heet een **empyeem**.`} />
      <p className="leading-relaxed"><Inline>{`Infecties van het centrale zenuwstelsel kunnen worden veroorzaakt door bacteriën, virussen en in mindere mate schimmels, gisten en parasieten. Het beloop kan acuut zijn, zoals bij meningokokkenmeningitis, subacuut zoals bij TBC, of chronisch zoals bij syfilis.`}</Inline></p>
      <PBody text={`Bij meningitis staan **hoofdpijn**, **nekstijfheid** en vaak **koorts** op de voorgrond. Verwardheid of veranderd bewustzijn kan ook voorkomen. Sommige vormen geven een karakteristieke huiduitslag. Bij lichamelijk onderzoek let je op meningeale prikkeling, zoals het teken van **Kernig** en **Brudzinski**. De gevoeligheid van deze tekenen is beperkt.`} />
    </div>
  )
}
