import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Atypische femurfractuur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een atypische femurfractuur is zeldzaam en kan spontaan of na een laag-energetische val ontstaan. Vaak zijn er vooraf al klachten van pijn in heup, lies of bovenbeen. Op röntgenfoto’s kan verdikking van de laterale cortex zichtbaar zijn. Deze fracturen verschillen van de klassieke osteoporotische heupfractuur en genezen vaak slecht. Ze kunnen bilateraal voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Kenmerkende diagnostische criteria zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`subtrochantere fractuur na geen of minimaal trauma;`}</Inline></li>
        <li><Inline>{`overwegend transversale fractuurlijn;`}</Inline></li>
        <li><Inline>{`weinig of geen comminutie;`}</Inline></li>
        <li><Inline>{`lokale periostale of endostale verdikking;`}</Inline></li>
        <li><Inline>{`bij incomplete fracturen alleen de laterale cortex aangedaan.`}</Inline></li>
      </ul>
    </div>
  )
}
