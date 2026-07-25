import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose en systemische effecten`}</Inline></SubHeading>
      <PBody text={`COPD is niet alleen een longziekte. Er zijn vaak ook **systemische effecten** en **comorbiditeiten**. Dat zijn bijkomende aandoeningen die het beloop en de prognose beïnvloeden.`} />
      <p className="leading-relaxed"><Inline>{`Veelvoorkomende comorbiditeiten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cardiovasculaire ziekten;`}</Inline></li>
        <li><Inline>{`osteoporose;`}</Inline></li>
        <li><Inline>{`obstructief slaapapneusyndroom;`}</Inline></li>
        <li><Inline>{`depressie;`}</Inline></li>
        <li><Inline>{`longkanker.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze aandoeningen worden soms laat herkend, maar zijn belangrijk omdat ze samenhangen met een slechtere gezondheidstoestand en een slechtere prognose.`}</Inline></p>
      <SubHeading><Inline>{`BODE-index`}</Inline></SubHeading>
      <PBody text={`De **BODE-index** is een prognostische score voor de komende jaren. Deze bestaat uit:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**B**ody-mass index;`}</Inline></li>
        <li><Inline>{`**O**bstruction: FEV1;`}</Inline></li>
        <li><Inline>{`**D**yspnea: mMRC;`}</Inline></li>
        <li><Inline>{`**E**xercise capacity: loopafstand in 6 minuten.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 7. BODE-index**`} />
      <DataTable rows={[["Variabele", "0 punten", "1 punt", "2 punten", "3 punten"], ["FEV1 (% voorspeld)", "≥ 65", "50–64", "36–49", "≤ 35"], ["Afstand in 6 min (m)", "≥ 350", "250–349", "150–249", "≤ 149"], ["mMRC", "0–1", "2", "3", "4"], ["BMI", "> 21", "≤ 21", "", ""]]} />
      <p className="leading-relaxed"><Inline>{`De totaalscore wordt ingedeeld in kwartielen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kwartiel 1: 0–2;`}</Inline></li>
        <li><Inline>{`kwartiel 2: 3–4;`}</Inline></li>
        <li><Inline>{`kwartiel 3: 5–6;`}</Inline></li>
        <li><Inline>{`kwartiel 4: 7–10.`}</Inline></li>
      </ul>
    </div>
  )
}
