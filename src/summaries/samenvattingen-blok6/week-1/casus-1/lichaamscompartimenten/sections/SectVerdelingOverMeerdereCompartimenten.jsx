import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verdeling over meerdere compartimenten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elk geneesmiddel blijft netjes in één compartiment. Sommige middelen verdelen zich over meerdere compartimenten. Dat zie je aan de vorm van de plasmaconcentratiecurve.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij fenytoïne is er eerst een snelle daling van de plasmaconcentratie. Dat laat zien dat het middel vanuit het bloed naar de weefsels verdwijnt. Daarna volgt een scherpere knik en daarna verloopt de klaring logaritmisch volgens eerste-orde kinetiek.`}</Inline></p>
      <PBody text={`Dat betekent dus dat fenytoïne zich over **ten minste twee compartimenten** verdeelt:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst het bloed;`}</Inline></li>
        <li><Inline>{`daarna de weefsels.`}</Inline></li>
      </ul>
    </div>
  )
}
