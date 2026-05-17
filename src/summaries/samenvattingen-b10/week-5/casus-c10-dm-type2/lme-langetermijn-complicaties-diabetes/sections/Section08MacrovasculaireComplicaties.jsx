import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Macrovasculaire complicaties`}</Inline></h3>
      <p><Inline>{`Macrovasculaire complicaties betreffen vooral de grote bloedvaten. De risicofactoren zijn hyperglykemie, hoge bloeddruk, dyslipidemie, roken, familiale belasting en obesitas.`}</Inline></p>
      <p><Inline>{`De verschijnselen hangen af van het aangedane vaatbed. Bij coronairlijden kan pijn op de borst optreden. Bij perifeer vaatlijden ontstaat vermindering van de loopafstand, zoals bij claudicatio intermittens. Bij betrokkenheid van de hersenvaten kunnen neurologische uitvalverschijnselen optreden, zoals bij een CVA.`}</Inline></p>
      <p><Inline>{`De diagnostiek gebeurt op indicatie bij klachten. Voorbeelden zijn een ECG, enkel-armindex en een CTA van de hersenen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag: wat past het best bij macrovasculaire schade?**  
**Kort antwoord:** klachten van grote-vatziekten, zoals pijn op de borst, claudicatio intermittens en neurologische uitval.`} />
    </div>
  )
}
