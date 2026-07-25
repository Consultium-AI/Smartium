import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lithium is een belangrijk middel bij manische depressie, maar vraagt om controle van schildklier, nieren en hart. Lithium kan zelf chronische tubulo-interstitiële nefritis veroorzaken, met uiteindelijk irreversibele nierschade. Bij een verminderde nierfunctie moet je ook extra letten op interacties. Hydrochloorthiazide kan de lithiumspiegel sterk verhogen doordat lithium minder wordt uitgescheiden. Bij een urineweginfectie is nitrofurantoïne eerste keus, maar niet bij een creatinineklaring onder 30 mL/min. Dan is fosfomycine een geschikt alternatief. Bij jicht zijn NSAID’s vaak eerste keus, maar bij nierfunctiestoornissen zijn die niet geschikt en kom je uit bij prednison of colchicine.`}</Inline></p>
    </div>
  )
}
