import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: wat is een resectabel oesophaguscarcinoom?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een resectabel oesophaguscarcinoom is een tumor van de slokdarm waarvoor in principe nog een curatieve behandeling mogelijk is. Dat betekent dus dat genezing nog het doel kan zijn. Tegelijkertijd is de prognose ondanks alle vooruitgang nog steeds slecht: de vijfjaars overleving blijft beperkt. De behandeling is daarom sterk afhankelijk van een zorgvuldige diagnostiek en van een multidisciplinaire aanpak, waarbij meerdere specialisten samen het beste behandelplan bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De incidentie van het oesophaguscarcinoom neemt toe. Dat staat in contrast met het maagcarcinoom, waarvan de incidentie juist is afgenomen. De toename van het oesophaguscarcinoom hangt vooral samen met Barrett-oesofagus en daarmee vooral met een toename van het adenocarcinoom.`}</Inline></p>
    </div>
  )
}
