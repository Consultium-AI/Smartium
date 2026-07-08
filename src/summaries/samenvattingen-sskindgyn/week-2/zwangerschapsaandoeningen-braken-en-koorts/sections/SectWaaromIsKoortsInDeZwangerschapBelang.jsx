import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is koorts in de zwangerschap belangrijk?`}</Inline></SubHeading>
      <PBody text={`Koorts kan gevolgen hebben voor moeder en kind. Sommige infecties verlopen bij de moeder mild, maar kunnen via **verticale transmissie** ernstige gevolgen hebben voor de foetus. Een opstijgende infectie kan leiden tot **chorioamnionitis**, met als gevolg **vroeggeboorte** en soms **intra-uteriene vruchtdood**. Ernstige maternale infectie, zoals pyelitis, kan leiden tot **sepsis** en preterme weeënactiviteit.`} />
      <PBody text={`Daarnaast kan koorts een **tachycardie** bij moeder en foetus veroorzaken. Een subfebriele temperatuur kan zelfs het eerste teken zijn van een **diepveneuze trombose**. Tijdens de zwangerschap is het trombo-embolisch risico sowieso verhoogd door veranderingen in de stolling: fibrinogeen en stollingsfactoren stijgen, terwijl antitrombine III daalt.`} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom moet koorts in de zwangerschap altijd goed worden uitgezocht?**
Omdat het zowel een infectie als een andere ernstige aandoening kan zijn en gevolgen kan hebben voor moeder, placenta en foetus.`} />
    </div>
  )
}
