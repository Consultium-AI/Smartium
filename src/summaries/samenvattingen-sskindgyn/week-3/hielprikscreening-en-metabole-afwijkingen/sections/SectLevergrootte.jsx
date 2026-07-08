import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Levergrootte`}</Inline></SubHeading>
      <PBody text={`Bij kinderen met onbegrepen hypoglycemie is het belangrijk om te letten op **hepatomegalie**. Een vergrote lever past bijvoorbeeld bij een **glycogeenstapelingsziekte** en in mindere mate bij een **gluconeogenese-defect**.`} />
      <PBody text={`Bij levergebonden glycogeenstapelingsziekten is de vastentolerantie vaak beperkt. Vooral type **1A, 1B en 3** geven duidelijke problemen. Ook type **0, 4, 6 en 9** kunnen dit geven, maar meestal minder ernstig. Naast hypoglycemie kan spierzwakte een belangrijk symptoom zijn.`} />
    </div>
  )
}
