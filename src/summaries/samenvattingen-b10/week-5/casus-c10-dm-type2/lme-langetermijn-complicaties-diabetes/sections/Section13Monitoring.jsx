import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Monitoring op de poli of bij de huisarts`}</Inline></h3>
      <p><Inline>{`Omdat langetermijncomplicaties ernstig en beperkend kunnen zijn, worden patiënten regelmatig gezien door een arts of diabetesverpleegkundige. Daarbij worden de diabetes en andere risicofactoren goed gereguleerd en worden complicaties vroeg opgespoord.`}</Inline></p>
      <p><Inline>{`Elke 3 maanden worden HbA1c, glucose, bloeddruk en lichaamsgewicht gecontroleerd. Bij de huisarts gebeurt HbA1c vooral bij insulinegebruik.`}</Inline></p>
      <p><Inline>{`Jaarlijks wordt gekeken naar bloeddruk, voetcontrole en laboratoriumonderzoek. Dat lab omvat urine-albumine/kreatinine-ratio, plasma kreatinine, geschatte GFR en het cholesterolprofiel: totaal cholesterol, triglyceriden, LDL-cholesterol en HDL-cholesterol. Daarnaast gebeurt fundoscopie bij de huisarts eens per twee jaar.`}</Inline></p>
      <p><Inline>{`Ook is er aandacht voor hoe het met de patiënt gaat: fysieke klachten, psychische klachten, seksuele klachten en therapietrouw of medicatie-inname.`}</Inline></p>
      <p><Inline>{`**Tabel 5. Praktische follow-up bij diabetes**`}</Inline></p>
      <DataTable rows={[["Frequentie", "Controle"], ["Elke 3 maanden", "HbA1c, glucose, bloeddruk, lichaamsgewicht"], ["Jaarlijks", "Bloeddruk, voetcontrole, laboratorium"], ["Eens per 2 jaar bij huisarts", "Fundoscopie"], ["Bij klachten of op indicatie", "Verdere diagnostiek, zoals ECG, enkel-armindex of CTA"]]} />
    </div>
  )
}
