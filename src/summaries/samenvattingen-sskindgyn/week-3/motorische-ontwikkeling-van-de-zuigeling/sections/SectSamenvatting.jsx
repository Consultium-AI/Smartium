import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Motorische ontwikkeling beoordeel je door te kijken naar zowel **kwantiteit** als **kwaliteit** van bewegen. Kwantiteit gaat over **wanneer** een mijlpaal wordt bereikt; kwaliteit gaat over **hoe** een kind beweegt. Goede motoriek herken je aan **complexiteit, variatie, symmetrie en vloeiendheid**.`} />
      <p className="leading-relaxed"><Inline>{`In het eerste levensjaar ontwikkelt een kind zich van meer gebogen, beperkte bewegingen naar steeds meer controle, balans en zelfstandige voortbeweging. Daarbij zijn de mijlpalen van zitten, staan, kruipen, langslopen, los staan en los lopen belangrijk. Een goede motorische observatie vraagt om rustig, gestructureerd en breed kijken naar het kind in verschillende houdingen.`}</Inline></p>
    </div>
  )
}
