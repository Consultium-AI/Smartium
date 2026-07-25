import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wie krijgt een uitnodiging?`}</Inline></SubHeading>
      <PBody text={`Mensen tussen **55 en 75 jaar** krijgen een uitnodiging voor het bevolkingsonderzoek. Dat is de leeftijdsgroep waarin darmkanker het vaakst voorkomt. In Nederland gaat het om ruim **2,2 miljoen mensen per jaar**. Omdat de coloscopiecapaciteit beperkt is, is de invoering van het bevolkingsonderzoek over **5 jaar** verspreid.`} />
    </div>
  )
}
