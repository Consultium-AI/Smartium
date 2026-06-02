import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Omgevingsfactoren die de huid beschadigen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De casus noemt verschillende factoren die de huidbarrière kunnen aantasten.`}</Inline></p>
      <DataTable rows={[["Factor", "Effect op de huid"], ["---", "---"], ["UV-straling", "Huidveroudering, afbraak van elastine en collageen"], ["Verstoffen", "Huidirritatie, ontsteking, beschadiging van de epidermis"], ["Veel handen wassen", "Uitdroging en irritatie door zeep"], ["Wind", "Vochtverlies, invloed op micro-organismen en temperatuur"], ["Verbranding door zon of kou", "Minder talgproductie, minder doorbloeding, langzamer herstel"], ["Onderliggende huidaandoening", "Maakt de huid kwetsbaarder"], ["Leefstijl", "Kan de huidconditie beïnvloeden"]]} />
    </div>
  )
}
