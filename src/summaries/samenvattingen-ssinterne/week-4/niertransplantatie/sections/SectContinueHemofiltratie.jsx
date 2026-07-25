import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Continue hemofiltratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Intermitterende hemodialyse vraagt een hoge bloedflow en onttrekt in korte tijd veel vocht. Daarom moet de patiënt hemodynamisch stabiel zijn. Bij patiënten die dat niet zijn, bijvoorbeeld op de intensive care of hartbewaking, kan continue hemofiltratie worden toegepast.`}</Inline></p>
      <SubHeading><Inline>{`Verschil tussen hemodialyse en continue hemofiltratie`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 5. Verschillen tussen intermitterende hemodialyse en continue hemofiltratie"], ["Duur", "Hemodialyse: kort en intermitterend; hemofiltratie: continu"], ["Bloedflow", "Hemodialyse: 300–400 ml/min; hemofiltratie: 100–200 ml/min"], ["Verwijderingsmechanisme", "Hemodialyse: vooral diffusie met dialysaat; hemofiltratie: vooral convectie"], ["Vloeistof", "Hemodialyse gebruikt dialysaat; hemofiltratie gebruikt substitutievloeistof"]]} />
      <p className="leading-relaxed"><Inline>{`Bij continue hemofiltratie kan de substitutievloeistof vóór het filter worden toegevoegd, dat heet pre-dilutie, of na het filter, dat heet post-dilutie. Als diffusie en convectie gecombineerd worden, spreekt men van hemodiafiltratie.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer start je met continue hemofiltratie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn absolute en relatieve indicaties.`}</Inline></p>
      <DataTable rows={[["Tabel 6. Indicaties voor continue hemofiltratie"], ["Absolute indicaties", "Levensbedreigende hyperkaliëmie, overvulling, uremische pericarditis"], ["Relatieve indicaties", "Nierinsufficiëntie-gerelateerde metabole ontregelingen, ernstige overvulling ondanks optimale ondersteunende maatregelen"], ["Sommige intoxicaties", "Afhankelijk van ernst, nierfunctie en mate van verwijderbaarheid via hemofiltratie"]]} />
    </div>
  )
}
