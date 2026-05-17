import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Leerdoelen`}</Inline>
      </h3>
      <p>
        <Inline>{`Na het bestuderen van deze stof kun je:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`uitleggen hoe **bariatrische chirurgie, leefstijl en medicatie** kunnen bijdragen aan de behandeling en remissie van diabetes type 2;`}</Inline>
        </li>
        <li>
          <Inline>{`analyseren **welke factoren bepalen of remissie bereikt en behouden wordt**.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
