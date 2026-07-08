import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie en evaluatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Medicatie wordt bij voorkeur centraal toegediend. Door perifere vasoconstrictie komt medicatie die perifeer wordt gegeven nauwelijks op de plaats van werking. Centrale toegang betekent bij een pasgeborene een navelvenlijn of een botnaald.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De medicatie die tijdens de reanimatie gebruikt kan worden, is:`}</Inline></p>
      <DataTable rows={[["Tabel 4. Medicatie tijdens neonatale reanimatie"], ["Adrenaline", "10-30 microgram/kg = 0,1-0,3 ml van de 1:10000-oplossing"], ["Glucose 10%", "2 ml/kg bolus, gevolgd door onderhoudsinfuus"], ["Vaatvulling", "10 ml/kg NaCl 0,9%"]]} />
      <p className="leading-relaxed"><Inline>{`Na de reanimatie volgt opnieuw elke 30 seconden evaluatie. Daarnaast horen laboratoriumonderzoek, overleg met een academisch centrum als dat nog niet is gebeurd, verslaglegging en een oudergesprek bij de post-reanimatiezorg. Overleg met een academisch centrum is vooral van belang als er mogelijk therapeutische hypothermie nodig is bij asfyxie.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer mag je stoppen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Volgens de richtlijn mag je de reanimatie na 20 minuten staken. Dat is een teambeslissing en gebeurt in samenspraak met de meest ervaren arts.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom geef je medicatie bij een pasgeborene bij voorkeur centraal?
**Mini-antwoord:** Omdat perifere vasoconstrictie ervoor zorgt dat medicatie perifeer nauwelijks het hart bereikt.`} />
    </div>
  )
}
