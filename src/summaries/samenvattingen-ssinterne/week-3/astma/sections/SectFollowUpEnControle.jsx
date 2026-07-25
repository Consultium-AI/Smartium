import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Follow-up en controle`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na start van de behandeling beoordeel je het effect. Als de klachten verdwijnen en de peakflow en spirometrie verbeteren, dan zet je de inhalatiesteroïden voorlopig voort, samen met een kortwerkend beta-2-sympathicomimeticum. De patiënt blijft onder controle van de huisarts.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de klachten later goed onder controle blijven en er geen rescue-medicatie meer nodig is, kan de dosering van de inhalatiesteroïden langzaam worden afgebouwd. Dit gebeurt onder controle van klachten en peakflowmetingen. Bij volwassenen is het stoppen van inhalatiecorticosteroïden niet gewenst.`}</Inline></p>
    </div>
  )
}
