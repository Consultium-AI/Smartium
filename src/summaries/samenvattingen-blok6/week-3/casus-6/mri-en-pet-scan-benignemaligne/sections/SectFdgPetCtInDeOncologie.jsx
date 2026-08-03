import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`FDG PET/CT in de oncologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de oncologie heeft FDG PET/CT een aantal vaste indicaties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**stadiëring**: zijn er metastasen en waar zitten die?`}</Inline></li>
        <li><Inline>{`**responsevaluatie**: is er progressie, respons of stabiele ziekte?`}</Inline></li>
        <li><Inline>{`**verdenking op recidief**: is een nieuwe afwijking verdacht voor terugkeer van de tumor?`}</Inline></li>
        <li><Inline>{`**radiotherapieplanning**: het FDG-positieve gebied helpt bij het intekenen van het bestralingsveld.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bij longtumoren, KNO-tumoren en lymfomen speelt dit een belangrijke rol.`}</Inline></p>
    </div>
  )
}
