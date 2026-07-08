import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mogelijke oorzaken`}</Inline></SubHeading>
      <PBody text={`Denk aan een **virale, bacteriële of parasitaire infectie**, een **urineweginfectie**, een infectie van het **maag-darmkanaal** of de **galblaas**, een **diepveneuze trombose**, een **auto-immuunziekte** en andere oorzaken. In de module worden ook pre-eclampsie, HELLP, hematologische maligniteit en abruptio placentae genoemd als mogelijke differentiaaldiagnosen.`} />
    </div>
  )
}
