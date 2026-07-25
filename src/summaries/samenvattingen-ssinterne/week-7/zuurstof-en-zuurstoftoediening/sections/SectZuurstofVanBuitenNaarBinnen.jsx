import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuurstof: van buiten naar binnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstof is onmisbaar voor het leven. De lucht die we inademen bestaat voor ongeveer 21% uit zuurstof. In de longen wordt zuurstof opgenomen uit de lucht en afgegeven aan het bloed. Via de circulatie komt die zuurstof bij de weefsels terecht, waar hij wordt gebruikt voor energieproductie. Daarbij ontstaat koolstofdioxide (CO2), en die wordt via het bloed weer terug naar de longen vervoerd om uitgeademd te worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Zuurstof en CO2 bewegen zich van een plaats met een hoge gasdruk naar een plaats met een lage gasdruk. Dat betekent dat zuurstof vanuit de buitenlucht naar het bloed kan diffunderen, terwijl CO2 juist vanuit het lichaam naar buiten kan diffunderen. Omdat CO2 in de omgevingslucht bijna afwezig is, is er een sterke gradiënt voor CO2 van het lichaam naar de buitenwereld.`}</Inline></p>
    </div>
  )
}
