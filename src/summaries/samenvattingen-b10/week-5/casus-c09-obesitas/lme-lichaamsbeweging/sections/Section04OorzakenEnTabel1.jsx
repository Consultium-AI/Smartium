import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Oorzaken van obesitas`}</Inline></h3>
      <p><Inline>{`Obesitas kan door veel verschillende factoren ontstaan en in stand worden gehouden. In de stof worden veelvoorkomende en zeldzame oorzaken onderscheiden.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Tabel 1. Oorzaken en bijdragende factoren van obesitas`}</Inline></h3>
      <DataTable rows={[["Categorie", "Voorbeelden"], ["**Leefstijl**", "ongezond eetpatroon, te weinig beweging, chronisch slaaptekort, obstructief slaapapneusyndroom, nachtdiensten, timing van maaltijden, fors alcoholgebruik, stoppen met roken, culturele of sociaal-economische factoren"], ["**Sociaal-economisch**", "financiële zorgen, eenzaamheid, niet meer kunnen deelnemen aan de samenleving, verlies van werk of inkomen, armoede, moeite met lezen/schrijven/rekenen, culturele gewoonten"], ["**Psychisch**", "depressie, chronische stress, psychotrauma, kindermishandeling, seksueel misbruik, eetstoornissen zoals eetbuistoornis en boulimia nervosa"], ["**Medicatie**", "antihypertensiva zoals bètablokkers en α-blokkers, pijnmedicatie zoals pregabaline en amitriptyline, diabetesmedicatie zoals insuline en glimepiride, antidepressiva zoals mirtazapine, citalopram en paroxetine, anti-epileptica zoals carbamazepine, valproïnezuur en gabapentine, corticosteroïden bij langdurig gebruik"], ["**Hormonaal**", "hypothyreoïdie, polycysteus-ovariumsyndroom (PCOS), mannelijk hypogonadisme, behoud van extra gewicht na zwangerschap, menopauze"], ["**Hypothalamus**", "schade na chirurgie of hoofdtrauma, hypothalamustumor, craniopharyngeoom, malformatie"], ["**(Mono)genetisch**", "mutaties in MC4R, POMC, leptine, leptinereceptor, PCSK1"], ["**Syndromaal**", "Prader-Willi, Bardet-Biedl, 16p11.2-deletie, pseudohypoparathyreoïdie type 1 (PHP1a), Alström-syndroom"]]} />
    </div>
  )
}
