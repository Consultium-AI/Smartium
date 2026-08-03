import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voeding van de vaatwand: vasa vasorum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De cellen van de vaatwand moeten zelf ook van zuurstof en voedingsstoffen worden voorzien. Dat gebeurt op twee manieren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Oppervlakkige delen van de vaatwand** krijgen voedingsstoffen rechtstreeks uit het bloed in het lumen via diffusie.`}</Inline></li>
        <li><Inline>{`**Diepere delen**, vooral in de adventitia, worden gevoed via de **vasa vasorum**: kleine bloedvaatjes in de vaatwand zelf.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De vasa vasorum zijn dus vooral belangrijk bij grotere vaten, waar diffusie vanuit het lumen niet meer voldoende is.`}</Inline></p>
    </div>
  )
}
