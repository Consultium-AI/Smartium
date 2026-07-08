import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is een extra-uteriene graviditeit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Normaal nestelt de bevruchte eicel zich in de baarmoederholte. Bij een EUG gebeurt dat ergens anders. In meer dan 95% van de gevallen zit de zwangerschap in de tuba. Andere mogelijke locaties zijn onder andere de fimbriae, isthmus, interstitieel, abdomen, ovarium, cervix uteri en een litteken in de uterus.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Mogelijke locaties van een EUG`}</Inline></SubHeading>
      <DataTable rows={[["Locatie", "Uitleg"], ["Tubair", "Meest voorkomend, in de eileider"], ["Interstitieel", "In het deel van de tuba dat door de baarmoederwand loopt"], ["Isthmus", "Smal deel van de eileider"], ["Ovarium", "In of op het ovarium"], ["Peritoneum/abdomen", "In de buikholte"], ["Cervix uteri", "In de baarmoederhals"], ["Littekens in de uterus", "In een litteken van de baarmoeder"]]} />
      <p className="leading-relaxed"><Inline>{`Een EUG kan behandeld worden met een expectatief beleid, medicatie of chirurgie. Als de diagnose te laat wordt gesteld, kan veel bloedverlies optreden. Daarom is een EUG een van de belangrijkste zwangerschapgerelateerde doodsoorzaken.`}</Inline></p>
    </div>
  )
}
