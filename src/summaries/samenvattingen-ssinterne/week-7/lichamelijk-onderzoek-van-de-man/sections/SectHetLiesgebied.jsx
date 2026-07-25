import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het liesgebied`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het liesgebied is klinisch belangrijk omdat hier afwijkingen kunnen ontstaan die samenhangen met een open verbinding tussen buikholte en scrotum. Normaal sluit het lieskanaal na de indaling van de testis. Als dat niet goed gebeurt, kan er een scrotaalbreuk ontstaan: een darmlis komt dan via het lieskanaal in het scrotum terecht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een scrotaalbreuk kan gevaarlijk worden als de darmlis beklemd raakt bij de breukpoort. Dan ontstaat ischemie van de darmlis. Daardoor kunnen darmbacteriën buiten de lis terechtkomen en een ontsteking van de vrije buikholte veroorzaken, een peritonitis. Ook kan er een ischaemische testis ontstaan door afknelling van de funiculus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een andere afwijking die past bij een open verbinding tussen buikholte en scrotum is een hydrocele communicans. Hierbij is het lieskanaal na de testisindaling niet volledig gesloten. Vloeistof uit de vrije buikholte kan dan in het scrotum terechtkomen. Bij kinderen kan het scrotum bijvoorbeeld opzwellen als ze huilen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Verschil tussen scrotaalbreuk en hydrocele communicans`}</Inline></SubHeading>
      <DataTable rows={[["Afwijking", "Wat gebeurt er?", "Klinische betekenis"], ["Scrotaalbreuk", "Darmlis komt via het lieskanaal in het scrotum", "Kan beklemd raken en leiden tot ischemie en peritonitis"], ["Hydrocele communicans", "Vrije buikholte staat in verbinding met het scrotum via het lieskanaal", "Vocht kan in het scrotum lopen, vooral zichtbaar bij kinderen"]]} />
      <PBody text={`**Aandachtsvraag:** Wat is het gevaar van een beklemde scrotaalbreuk?
**Mini-antwoord:** De darmlis kan ischemisch worden en er kan peritonitis ontstaan.`} />
    </div>
  )
}
