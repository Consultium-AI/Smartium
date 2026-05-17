import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Pathofysiologie: hoe ontstaan deze complicaties?`}</Inline></h3>
      <p><Inline>{`Bij alle langetermijncomplicaties van diabetes spelen verschillende pathways een rol. Een belangrijk mechanisme is de invloed van hoge bloedglucose op de vaatwand. Daardoor ontstaan onder andere meer oxidatieve stress, meer inflammatie en meer stollingsactivatie. Daarnaast spelen ook andere risicofactoren mee die vaak bij diabetes voorkomen, zoals hoge bloeddruk en dyslipidemie.`}</Inline></p>
      <p><Inline>{`Kort samengevat: langdurige hyperglykemie beschadigt samen met andere cardiovasculaire risicofactoren de bloedvaten en de organen die van die bloedvaten afhankelijk zijn.`}</Inline></p>
      <PBody text={`**Aandachtsvraag: wat is de kern van de schade bij diabetes?**  
**Kort antwoord:** hoge glucose beschadigt de vaatwand en werkt samen met andere risicofactoren, waardoor micro- en macrovasculaire complicaties ontstaan.`} />
    </div>
  )
}
