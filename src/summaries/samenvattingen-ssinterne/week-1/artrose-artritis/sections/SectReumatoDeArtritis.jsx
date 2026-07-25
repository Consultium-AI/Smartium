import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reumatoïde artritis`}</Inline></SubHeading>
      <PBody text={`Bij **RA** is er sprake van **ontsteking van het synovium**. Het eerste klinische teken is vaak **gewrichtszwelling**.`} />
      <p className="leading-relaxed"><Inline>{`In een later stadium kunnen ook kraakbeen en bot beschadigd raken. Door betere medicamenteuze behandeling, zoals biologicals, worden die latere afwijkingen tegenwoordig minder vaak gezien.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De radiologische kenmerken van RA zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**peri-articulaire osteopenie**`}</Inline></li>
        <li><Inline>{`**kraakbeendestructie**`}</Inline></li>
        <li><Inline>{`**erosies**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Peri-articulaire osteopenie`}</Inline></SubHeading>
      <PBody text={`Osteopenie betekent dat het bot minder dicht is. Op een röntgenfoto lijkt het bot dan **lucenter** of “donkerder”. Andere tekenen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verdunning van de cortex`}</Inline></li>
        <li><Inline>{`grovere trabeculatie`}</Inline></li>
      </ul>
      <PBody text={`Als dit rond een gewricht zit, noem je het **peri-articulaire osteopenie**. Dit past bij RA.`} />
      <SubHeading><Inline>{`Erosies`}</Inline></SubHeading>
      <PBody text={`Een erosie is een **focaal defect van cortex en onderliggend bot**. Het lijkt alsof er een hap uit het bot is genomen. Erosies passen ook bij RA.`} />
    </div>
  )
}
