import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leefstijlinterventie bij type 2 diabetes: wat levert het op?`}</Inline></h3>
      <p><Inline>{`Een intensieve leefstijlinterventie kan bij mensen met diabetes type 2 verschillende gunstige effecten hebben. In de studie met gewichtsverlies, energierestrictie en 150 minuten beweging per week werden onder andere positieve effecten gezien op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewicht;`}</Inline></li>
        <li><Inline>{`HbA1c;`}</Inline></li>
        <li><Inline>{`LDL-cholesterol;`}</Inline></li>
        <li><Inline>{`medicatiegebruik;`}</Inline></li>
        <li><Inline>{`nefropathie;`}</Inline></li>
        <li><Inline>{`perifere neuropathie;`}</Inline></li>
        <li><Inline>{`slaapapneu;`}</Inline></li>
        <li><Inline>{`kwaliteit van leven.`}</Inline></li>
      </ul>
      <p><Inline>{`Niet alle harde cardiovasculaire uitkomsten verbeterden in die studie even duidelijk. Toch is de algemene les dat leefstijlbehandeling veel winst kan geven, vooral op gewicht, glykemische controle en andere risicofactoren.`}</Inline></p>
      <p><Inline>{`Een belangrijk detail is dat bij grotere gewichtsafname de kans op diabetesremissie toeneemt. Bij meer dan 10% gewichtsverlies werd op lange termijn een gunstiger cardiovasculair effect gezien. Daaruit volgt dat **veel gewichtsverlies én langdurige begeleiding** belangrijk zijn. Ook voorzichtigheid bij het afbouwen van cardioprotectieve medicatie wordt benadrukt.`}</Inline></p>
    </div>
  )
}
