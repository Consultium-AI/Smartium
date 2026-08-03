import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie en diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose HP vraagt om een zorgvuldige aanpak. Net als bij andere interstitiële longziekten is een multidisciplinaire beoordeling belangrijk, met betrokkenheid van longarts, radioloog en patholoog.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern van de diagnostiek is een goede anamnese. Je moet heel gericht vragen naar mogelijke blootstellingen. Daarbij denk je niet alleen aan werk, maar ook aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vogels als hobby;`}</Inline></li>
        <li><Inline>{`dons in kussens, dekbedden of winterjassen;`}</Inline></li>
        <li><Inline>{`schimmel in huis, vooral in badkamer of kelder;`}</Inline></li>
        <li><Inline>{`blaasinstrumenten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms kan het nuttig zijn om de woonomgeving te laten beoordelen. Daarvoor kan, met toestemming van de patiënt, ook iemand van de GGD worden gevraagd om mee te kijken.`}</Inline></p>
    </div>
  )
}
