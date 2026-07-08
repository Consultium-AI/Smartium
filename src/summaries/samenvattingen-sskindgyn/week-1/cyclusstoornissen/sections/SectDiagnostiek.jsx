import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de diagnostiek van een cyclusstoornis zet je aanvullend onderzoek in op basis van de vermoedelijke oorzaak. In deze stof gaat het vooral om echo van uterus en ovaria in combinatie met hormonaal laboratoriumonderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Welke hormonen bepaal je?`}</Inline></SubHeading>
      <SubHeading><Inline>{`Tabel 3. Hormoonbepalingen bij cyclusstoornissen`}</Inline></SubHeading>
      <DataTable rows={[["Bepaling", "Waarom?"], ["FSH", "Nodig voor indeling in de WHO-classificatie"], ["LH", "Nodig voor indeling in de WHO-classificatie"], ["Oestradiol", "Nodig voor indeling in de WHO-classificatie"], ["AMH", "Geeft enig inzicht in de ovariële reserve"], ["Testosteron en SHBG", "Hiermee bereken je de vrije androgenen index (FAI): (testosteron/SHBG) × 100"], ["Prolactine", "Ook zonder galactorroe kan hyperprolactinemie een oorzaak zijn"], ["TSH en T4", "Schildklierstoornissen kunnen een cyclusstoornis veroorzaken"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is AMH nuttig?
**Mini-antwoord:** Het geeft een indruk van de ovariële reserve.`} />
    </div>
  )
}
