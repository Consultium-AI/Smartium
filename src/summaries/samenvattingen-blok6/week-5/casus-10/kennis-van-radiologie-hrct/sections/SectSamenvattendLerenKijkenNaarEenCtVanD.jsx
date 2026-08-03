import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend leren kijken naar een CT van de thorax`}</Inline></SubHeading>
      <PBody text={`Als je een CT-thorax beoordeelt, begin je met de juiste windowsetting. Daarna herken je de normale anatomie en bepaal je of er afwijkingen zijn. Vervolgens beschrijf je die afwijkingen systematisch: eerst het **patroon**, daarna de **verdeling**.`} />
      <p className="leading-relaxed"><Inline>{`Dat betekent in de praktijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Kies de juiste windowsetting.`}</Inline></li>
        <li><Inline>{`Herken de normale anatomische structuren.`}</Inline></li>
        <li><Inline>{`Bepaal of er sprake is van verhoogde densiteit, verlaagde densiteit, noduli of een reticulair patroon.`}</Inline></li>
        <li><Inline>{`Beschrijf waar de afwijkingen zitten: apicaal, mid, basaal, diffuus, centraal of perifeer.`}</Inline></li>
        <li><Inline>{`Denk bij specifieke vragen, zoals longembolie, aan het juiste contrastprotocol.`}</Inline></li>
      </ul>
    </div>
  )
}
