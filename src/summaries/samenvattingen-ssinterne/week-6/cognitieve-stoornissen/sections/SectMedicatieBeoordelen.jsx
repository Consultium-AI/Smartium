import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie beoordelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij cognitieve klachten moet je altijd de medicatie nalopen. In deze casus zijn de meeste middelen niet waarschijnlijk van invloed op het cognitief functioneren. Temazepam valt wel op, omdat dit een benzodiazepine is en dus cognitieve invloed kan hebben.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Medicatie en mogelijke invloed op cognitie`}</Inline></SubHeading>
      <DataTable rows={[["Medicament", "Groep", "Indicatie", "Invloed op cognitie"], ["Bisoprolol", "Bètablokker", "Myocardinfarct", "Nee"], ["Enalapril", "ACE-remmer", "Myocardinfarct / hypertensie", "Nee"], ["Clopidogrel", "Trombocytenaggregatieremmer", "Myocardinfarct", "Nee"], ["Esomeprazol", "Protonpompremmer", "Gebruik bij clopidogrel", "Nee"], ["Temazepam", "Benzodiazepine", "Onbekend", "Ja"], ["Tamsulosine", "Alfablokker", "Mictieklachten", "Nee"]]} />
    </div>
  )
}
