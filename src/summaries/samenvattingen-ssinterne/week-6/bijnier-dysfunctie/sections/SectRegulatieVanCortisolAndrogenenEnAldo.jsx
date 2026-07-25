import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Regulatie van cortisol, androgenen en aldosteron`}</Inline></SubHeading>
      <PBody text={`Cortisol en bijnierandrogenen worden gereguleerd via de **HPA-as**. Aldosteron valt vooral onder controle van het **RAAS**.`} />
      <SubHeading><Inline>{`De HPA-as`}</Inline></SubHeading>
      <PBody text={`De hypothalamus maakt **CRH** (corticotrophin releasing hormone). Dit komt via het portale systeem bij de hypofysevoorkwab terecht. Daar stimuleert CRH de afgifte van **ACTH** uit corticotrofe cellen. ACTH bereikt via het bloed de bijnierschors en stimuleert daar de productie van cortisol en bijnierandrogenen.`} />
      <PBody text={`Cortisol geeft vervolgens **negatieve feedback** op hypothalamus en hypofyse. Daardoor wordt de afgifte van CRH en ACTH geremd. Zo blijft de hormoonhuishouding binnen nauwe grenzen.`} />
      <SubHeading><Inline>{`RAAS en aldosteron`}</Inline></SubHeading>
      <PBody text={`Aldosteron is belangrijk voor de zouthuishouding en bloeddruk. Het maakt deel uit van het **renine-angiotensine-aldosteronsysteem**. Angiotensine II is hierbij de belangrijkste stimulator. ACTH heeft slechts een minimale invloed op aldosteronproductie.`} />
      <DataTable rows={[["Hormoon", "Belangrijkste regeling"], ["Cortisol", "CRH → ACTH"], ["Bijnierandrogenen", "CRH → ACTH"], ["Aldosteron", "RAAS, vooral angiotensine II"]]} />
    </div>
  )
}
