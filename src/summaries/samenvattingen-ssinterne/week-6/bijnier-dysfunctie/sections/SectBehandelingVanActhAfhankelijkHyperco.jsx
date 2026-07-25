import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van ACTH-afhankelijk hypercortisolisme`}</Inline></SubHeading>
      <PBody text={`Bij deze patiënte wordt gekozen voor **medicamenteuze remming van de cortisolproductie in de bijnier**. Dit pakt de oorzaak niet weg, maar verlaagt wel de cortisolspiegel en vermindert de klachten. De meest gebruikte middelen zijn **ketoconazol** en **metopiron**.`} />
      <p className="leading-relaxed"><Inline>{`De patiënte krijgt ketoconazol. Daarbij worden de leverwaarden gecontroleerd, omdat dit middel hepatotoxisch kan zijn. De klachten nemen af en de glucosewaarden verbeteren.`}</Inline></p>
      <PBody text={`Later blijkt dat de ziekte toch weer actief wordt. Op een nieuwe MRI wordt nu wel een microadenoom gezien. Uiteindelijk volgt een **transsfenoïdale adenomectomie**: via de neus en sinus sphenoidalis wordt de hypofyse bereikt en selectief het adenoom verwijderd.`} />
      <PBody text={`Na de operatie verdwijnen de tekenen van hypercortisolisme. De overige hypofyseassen blijven intact. Er is sprake van **complete remissie**.`} />
    </div>
  )
}
