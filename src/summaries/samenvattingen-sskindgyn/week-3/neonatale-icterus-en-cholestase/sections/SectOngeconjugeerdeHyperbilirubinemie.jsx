import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ongeconjugeerde hyperbilirubinemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ongeconjugeerde hyperbilirubinemie denk je vooral aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hemolyse**`}</Inline></li>
        <li><Inline>{`rhesus- of AB0-antagonisme`}</Inline></li>
        <li><Inline>{`andere bloedgroepantagonismen`}</Inline></li>
        <li><Inline>{`extravasculair bloed`}</Inline></li>
        <li><Inline>{`polycythemie`}</Inline></li>
        <li><Inline>{`congenitale hemolytische anemie, zoals G6PD-deficiëntie, sferocytose, pyruvaatkinasedeficiëntie, hemoglobinopathie en galactosemie`}</Inline></li>
        <li><Inline>{`**infectie**`}</Inline></li>
        <li><Inline>{`**dehydratatie**`}</Inline></li>
        <li><Inline>{`**toename van de enterohepatische kringloop**`}</Inline></li>
        <li><Inline>{`**borstvoeding**, omdat dit de glucuronidering van bilirubine in de lever kan vertragen`}</Inline></li>
        <li><Inline>{`**hypothyreoïdie**`}</Inline></li>
        <li><Inline>{`**congenitale glucuronideringsstoornissen**, zoals Crigler-Najjar`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is ongeconjugeerd bilirubine gevaarlijk?**
Omdat een te hoge concentratie schadelijk kan zijn voor de hersenen. Daarom moet je bilirubinewaarden bij een neonaat altijd serieus nemen.`} />
    </div>
  )
}
