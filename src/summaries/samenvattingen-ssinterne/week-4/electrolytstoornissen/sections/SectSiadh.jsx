import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`SIADH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`SIADH staat voor syndroom van inadequate secretie van antidiuretisch hormoon. Dit is een belangrijke oorzaak van euvolemische hyponatriëmie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Criteria voor SIADH`}</Inline></SubHeading>
      <DataTable rows={[["Criterium", "Grens"], ["Serum-osmolaliteit", "< 275 mOsm/kg"], ["Urine-osmolaliteit", "> 100 mOsm/kg"], ["Volume-status", "euvolemie"], ["Urine-natrium", "> 40 mmol/l"], ["Schildklierfunctie", "normaal"], ["Bijnierfunctie", "normaal"], ["Diuretica", "afwezig"]]} />
      <p className="leading-relaxed"><Inline>{`Bij SIADH is het serum-urinezuur vaak verlaagd. Hypouricemie helpt vooral bij het onderscheiden van hyponatriëmie door diuretica en SIADH.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`SIADH kan worden veroorzaakt door medicatie. Belangrijke groepen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anti-epileptica;`}</Inline></li>
        <li><Inline>{`antidepressiva;`}</Inline></li>
        <li><Inline>{`antipsychotica;`}</Inline></li>
        <li><Inline>{`chemotherapie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van middelen die SIADH kunnen geven zijn onder andere SSRI’s, tricyclische antidepressiva, carbamazepine, vincristine, ifosfamide, cyclofosfamide, NSAID’s, MDMA, desmopressine, oxytocine en vasopressine.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** welke aanvullende oorzaken moet je altijd uitsluiten als SIADH wordt vermoed?
**Mini-antwoord:** bijnierinsufficiëntie en hypothyreoïdie.`} />
      <PBody text={`Daarom vraag je bij aanvullend labonderzoek naar **TSH en cortisol**. Zowel primaire als secundaire bijnierinsufficiëntie kunnen hyponatriëmie veroorzaken. Bij secundaire bijnierinsufficiëntie lijkt het beeld op SIADH, omdat hypocortisolisme de ADH-secretie verhoogt.`} />
      <PBody text={`Daarnaast kan aanvullend onderzoek zoals een **X-thorax** nodig zijn, bijvoorbeeld om een onderliggende longafwijking of tumor op te sporen.`} />
    </div>
  )
}
