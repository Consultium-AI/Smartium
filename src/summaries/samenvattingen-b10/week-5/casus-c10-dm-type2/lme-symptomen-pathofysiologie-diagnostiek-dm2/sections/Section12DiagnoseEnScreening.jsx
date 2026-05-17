import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Diagnose en screening`}</Inline></h3>
      <p><Inline>{`De diagnose DM2 wordt gesteld op basis van plasmaglucosewaarden. De huisarts stelt de diagnose vaak en start dan ook de behandeling. De glucosewaarden worden meestal uit veneus bloed bepaald.`}</Inline></p>
      <p><Inline>{`Tabel 5. Glucosewaarden en betekenis`}</Inline></p>
      <DataTable rows={[["Situatie", "Nuchter", "Niet nuchter"], ["Normaal", "<6,1 mmol/L", "<7,8 mmol/L"], ["Gestoorde nuchtere glucosewaarde", "≥6,1 en <7,0 mmol/L", "<7,8 mmol/L"], ["Gestoorde glucosetolerantie", "<6,1 mmol/L", "≥7,8 en <11,1 mmol/L"], ["Diabetes mellitus", "≥7,0 mmol/L", "≥11,1 mmol/L"]]} />
      <p><Inline>{`Bij de diagnostiek geldt dat een **nuchtere plasmaglucosewaarde van ≥7,0 mmol/L** op een passende manier wijst op DM2. Als er geen klassieke klachten van hyperglykemie zijn, is het belangrijk om een afwijkende meting te **herhalen**. Dat is klinisch relevant, omdat een enkele verhoogde waarde nog niet altijd voldoende is om de diagnose definitief vast te stellen.`}</Inline></p>
      <p><Inline>{`HbA1c wordt in deze context vooral gebruikt voor **monitoring**. Het is een maat voor de gemiddelde bloedglucose van de afgelopen ongeveer drie maanden. Daardoor kan iemand een normale nuchtere glucose hebben, maar toch een te hoog HbA1c, bijvoorbeeld als er over de dag flinke pieken optreden.`}</Inline></p>
    </div>
  )
}
