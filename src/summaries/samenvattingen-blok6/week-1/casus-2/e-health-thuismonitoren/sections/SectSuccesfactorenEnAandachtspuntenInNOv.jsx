import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Succesfactoren en aandachtspunten in één overzicht`}</Inline></SubHeading>
      <DataTable rows={[["Succesfactor", "Waarom belangrijk?"], ["Startkapitaal", "Zonder geld kun je niet beginnen."], ["Klein kernteam", "Maakt starten overzichtelijk en haalbaar."], ["Zelf regelen in de beginfase", "Helpt om snel te testen en te leren."], ["Stapsgewijs professionaliseren", "Zorgt voor groei en kwaliteit."], ["“Ja, tenzij bewezen niet lukt”", "Vergroot de deelname van patiënten."], ["Vroege betrokkenheid verpleegkundigen", "Maakt gebruik in de praktijk makkelijker."], ["Ziekenhuisbrede samenwerking", "Nodig voor brede invoering."], ["Juridische afstemming", "Zorgt dat je binnen de regels werkt."]]} />
    </div>
  )
}
