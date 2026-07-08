import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Volledige kruisproef bij neonaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De volledige kruisproef wordt altijd gebruikt bij een ontvanger met bekende irregulaire antistoffen, maar ook bij neonaten tot 3 maanden en na intra-uteriene transfusie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarbij wordt het serum van de moeder samengebracht met erytrocyten van de donor in een indirecte antiglobulinetest. Het voordeel bij neonaten is dat deze kruisproef antistoffen tegen private antigenen kan aantonen. Dat is belangrijk, omdat zulke antistoffen niet altijd in de standaard screening zitten.`}</Inline></p>
    </div>
  )
}
