import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diabetes gravidarum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes gravidarum is hyperglykemie die tijdens de zwangerschap wordt vastgesteld. Het komt voor bij 3-5% van de zwangerschappen en de incidentie neemt toe. De aandoening lijkt qua pathofysiologie op type 2: er is sprake van insulineresistentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vrouwen die diabetes gravidarum hebben gehad, hebben later meer kans op diabetes type 2.`}</Inline></p>
      <SubHeading><Inline>{`Risicofactoren`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerdere diabetes gravidarum`}</Inline></li>
        <li><Inline>{`BMI > 30 kg/m² bij eerste prenatale controle`}</Inline></li>
        <li><Inline>{`eerder kind met geboortegewicht > P95 of > 4500 gram`}</Inline></li>
        <li><Inline>{`eerstegraads familielid met diabetes`}</Inline></li>
        <li><Inline>{`bepaalde etnische groepen, zoals Zuid-Aziaten, Afro-Caribiërs, vrouwen uit het Midden-Oosten, Marokko en Egypte`}</Inline></li>
        <li><Inline>{`onverklaarde intra-uteriene vruchtdood`}</Inline></li>
        <li><Inline>{`polycysteus-ovariumsyndroom`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste behandeling is dieetadvies, met spreiding van koolhydraten over de dag. Bewust afvallen tijdens de zwangerschap wordt niet geadviseerd. De zwangere moet regelmatig glucose meten. Als de glucosewaarden herhaald verhoogd blijven, wordt insuline gestart.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Orale therapie staat niet standaard in de richtlijn, maar metformine wordt soms overwogen, onder andere omdat er veel ervaring mee is en het niet als teratogeen bekendstaat.`}</Inline></p>
      <SubHeading><Inline>{`Complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes gravidarum verhoogt de kans op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`preëclampsie`}</Inline></li>
        <li><Inline>{`macrosomie / large for gestational age`}</Inline></li>
        <li><Inline>{`geboortetrauma`}</Inline></li>
        <li><Inline>{`vacuümextractie of sectio caesarea`}</Inline></li>
        <li><Inline>{`neonatale hypoglykemie`}</Inline></li>
        <li><Inline>{`hyperbilirubinemie`}</Inline></li>
      </ul>
    </div>
  )
}
