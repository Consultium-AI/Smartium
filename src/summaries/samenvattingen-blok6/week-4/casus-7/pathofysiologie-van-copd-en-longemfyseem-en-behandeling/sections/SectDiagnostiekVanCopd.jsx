import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van COPD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD moet worden overwogen bij patiënten met kortademigheid, chronisch hoesten met of zonder sputum, en/of blootstelling aan risicofactoren. De klachten passen vaak bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`progressieve dyspneu;`}</Inline></li>
        <li><Inline>{`dyspneu die erger wordt bij inspanning;`}</Inline></li>
        <li><Inline>{`persisterende klachten;`}</Inline></li>
        <li><Inline>{`recidiverende wheezing;`}</Inline></li>
        <li><Inline>{`chronische hoest, al dan niet productief;`}</Inline></li>
        <li><Inline>{`recidiverende luchtweginfecties;`}</Inline></li>
        <li><Inline>{`een voorgeschiedenis van blootstelling aan tabaksrook, kook- of verwarmingsrook, beroepsmatige dampen of genetische/ontwikkelingsfactoren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De diagnose wordt gesteld met spirometrie. Daarvoor zijn passende symptomen én risicofactoren nodig, gevolgd door longfunctieonderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Spirometrie en interpretatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij spirometrie bepaal je FVC, FEV1 en de flow-volumecurve. De verhouding FEV1/FVC is belangrijk om obstructie vast te stellen. Voor de diagnose COPD wordt de post-bronchodilator FEV1/FVC gebruikt. De uitslag wordt vergeleken met referentiewaarden die afhangen van lengte, leeftijd en geslacht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor obstructie wordt de LLN gebruikt: de *lower limit of normal*, overeenkomend met het 5e percentiel. Dit wordt weergegeven als een Z-score. Een Z-score van -1,64 of lager past bij obstructie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij obstructie zie je vaak een concave curve. De FEV1/FVC-ratio blijft na bronchusverwijding onder de afkapwaarde.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Belangrijke spirometrische begrippen`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["FEV1", "Geforceerd uitgeademd volume in 1 seconde"], ["FVC", "Geforceerde vitale capaciteit"], ["FEV1/FVC", "Verhouding voor het vaststellen van obstructie"], ["LLN", "Ondergrens van normaal, 5e percentiel"], ["Z-score -1,64 of lager", "Past bij obstructie"]]} />
      <SubHeading><Inline>{`Reversibiliteitsmeting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De reversibiliteitsmeting wordt vooral gebruikt omdat de post-bronchodilator FEV1/FVC nodig is voor de diagnose. De respons op bronchodilatatie helpt weinig om astma en COPD goed van elkaar te onderscheiden. COPD kan reversibel zijn en onbehandeld astma kan juist een gefixeerde obstructie geven.`}</Inline></p>
      <SubHeading><Inline>{`GOLD-classificatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als COPD is vastgesteld, wordt de ernst van de obstructie ingedeeld op basis van de FEV1. Hoe lager de FEV1, hoe ernstiger de obstructie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. GOLD-classificatie op basis van post-bronchodilator FEV1`}</Inline></SubHeading>
      <DataTable rows={[["GOLD", "Ernst", "FEV1 (% voorspeld)"], ["1", "Mild", "≥ 80%"], ["2", "Matig", "50-79%"], ["3", "Ernstig", "30-49%"], ["4", "Zeer ernstig", "< 30%"]]} />
      <p className="leading-relaxed"><Inline>{`Naast de FEV1 is ook de ervaren ziektelast belangrijk. Er is namelijk maar een beperkte correlatie tussen de ernst van de obstructie en hoe ziek de patiënt zich voelt. Daarom worden vragenlijsten gebruikt zoals de CAT en de mMRC.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De CAT is een vragenlijst over hoesten, slijm, benauwdheid, beperking in activiteiten, vertrouwen buitenshuis, slaap en energie. De mMRC meet dyspneu van graad 0 tot 4, van alleen benauwd bij zware inspanning tot te benauwd om het huis te verlaten of zich aan te kleden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook het aantal exacerbaties per jaar moet worden uitgevraagd. Een exacerbatie is een verslechtering binnen enkele dagen met toename van dyspneu en/of hoesten, al dan niet met slijm, groter dan de normale dag-tot-dag variatie, waarvoor behandeling moet worden aangepast. Exacerbaties verslechteren de kwaliteit van leven, versnellen longfunctieverlies, verslechteren de prognose en geven hoge zorgkosten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De GOLD ABE-indeling combineert klachten en exacerbatierisico:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`A: weinig klachten, weinig exacerbaties;`}</Inline></li>
        <li><Inline>{`B: veel klachten, weinig exacerbaties;`}</Inline></li>
        <li><Inline>{`E: verhoogd exacerbatierisico.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 6. GOLD ABE-indeling`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Symptomen", "Exacerbaties"], ["A", "mMRC 0-1 of CAT < 10", "0 of 1 matige exacerbatie"], ["B", "mMRC ≥ 2 of CAT ≥ 10", "0 of 1 matige exacerbatie"], ["E", "maakt niet uit", "≥2 matige exacerbaties of ≥1 opname"]]} />
    </div>
  )
}
