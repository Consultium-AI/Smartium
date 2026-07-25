import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Glucocorticoïden in de geneeskunde`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Glucocorticoïden worden veel gebruikt als behandeling. Ze kunnen lokaal of systemisch worden gegeven bij onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huideczeem en psoriasis;`}</Inline></li>
        <li><Inline>{`astma en COPD;`}</Inline></li>
        <li><Inline>{`bijnierinsufficiëntie;`}</Inline></li>
        <li><Inline>{`chronische rhinitis;`}</Inline></li>
        <li><Inline>{`na orgaantransplantatie;`}</Inline></li>
        <li><Inline>{`systemische lupus erythematodes en vasculitis;`}</Inline></li>
        <li><Inline>{`maligne lymfoom en acute leukemie;`}</Inline></li>
        <li><Inline>{`hersenoedeem;`}</Inline></li>
        <li><Inline>{`allergische reacties en anafylaxie;`}</Inline></li>
        <li><Inline>{`jicht;`}</Inline></li>
        <li><Inline>{`reumatoïde artritis;`}</Inline></li>
        <li><Inline>{`inflammatoire darmziekten;`}</Inline></li>
        <li><Inline>{`nefrotisch syndroom;`}</Inline></li>
        <li><Inline>{`multipele sclerose;`}</Inline></li>
        <li><Inline>{`uveitis;`}</Inline></li>
        <li><Inline>{`hypercalciëmie;`}</Inline></li>
        <li><Inline>{`vroeggeboorte.`}</Inline></li>
      </ul>
    </div>
  )
}
