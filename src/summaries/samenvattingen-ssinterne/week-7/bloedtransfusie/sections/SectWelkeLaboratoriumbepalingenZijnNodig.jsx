import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke laboratoriumbepalingen zijn nodig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor transfusie zijn verschillende laboratoriumbepalingen nodig. De belangrijkste zijn bloedgroepbepaling en antistofscreening. Daarnaast zijn Hb en vaak ook Ht nodig om te beoordelen hoeveel erytrocyten nodig zijn. Verder zijn trombocytenaantal en stollingsonderzoek belangrijk, zeker bij bloedverlies.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Belangrijke laboratoriumbepalingen bij transfusie"], ["Bloedgroep", "nodig voor compatibele erytrocyten- en plasmatoediening"], ["Antistofscreening", "opsporen van irregulaire antistoffen"], ["Hb / Ht", "inschatting van erytrocytenbehoefte"], ["Trombocytenaantal", "beoordeling van trombocytentransfusie"], ["APTT, PT, fibrinogeen", "screening van stolling bij plasmatoediening"], ["Natrium, creatinine, leukocyten", "aanvullende klinische informatie"]]} />
      <p className="leading-relaxed"><Inline>{`Bij stollingscorrectie worden APTT, PT en fibrinogeen gebruikt als screenende testen. De APTT en PT mogen niet langer dan 1,5 keer verlengd zijn, en fibrinogeen moet minimaal boven 1,0 g/L liggen voor goede hemostase. Functionele beoordeling kan ook met ROTEM gebeuren.`}</Inline></p>
    </div>
  )
}
