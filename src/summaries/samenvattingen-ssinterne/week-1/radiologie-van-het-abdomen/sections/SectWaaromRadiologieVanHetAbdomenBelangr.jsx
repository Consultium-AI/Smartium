import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom radiologie van het abdomen belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ernstiger ziektebeelden wordt de diagnose vaak gesteld met beeldvorming. Als arts moet je daarom weten welke beeldvorming je wanneer aanvraagt, maar ook hoe je de beelden zelf een beetje kunt begrijpen. Daarvoor is het eerst nodig dat je de normale anatomie herkent. Pas daarna kun je afwijkingen goed plaatsen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij beeldvorming van het abdomen gaat het vooral om een paar vaste vragen: zie je de organen normaal terug, zijn de bloedvaten herkenbaar, is er vrije lucht, is er vocht of een abces, en klopt het beeld met de klachten van de patiënt?`}</Inline></p>
    </div>
  )
}
