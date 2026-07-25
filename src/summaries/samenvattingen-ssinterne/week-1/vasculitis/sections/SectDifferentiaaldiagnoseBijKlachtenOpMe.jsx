import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose bij klachten op meerdere orgaansystemen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw met klachten van hoesten, kortademigheid, bloed ophoesten, neusklachten en gewrichtsklachten denk je vooral aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een systeemziekte,`}</Inline></li>
        <li><Inline>{`een infectie,`}</Inline></li>
        <li><Inline>{`een maligniteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Infectie blijft belangrijk, zeker tuberculose. Tuberculose kan hoesten, thoracale pijn, dyspnoe en hemoptoë geven. Onderzoek naar tuberculose kan bestaan uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`X-thorax;`}</Inline></li>
        <li><Inline>{`Mantoux;`}</Inline></li>
        <li><Inline>{`Quantiferon-test.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als Mantoux en Quantiferon negatief zijn, wordt tuberculose onwaarschijnlijk.`}</Inline></p>
    </div>
  )
}
