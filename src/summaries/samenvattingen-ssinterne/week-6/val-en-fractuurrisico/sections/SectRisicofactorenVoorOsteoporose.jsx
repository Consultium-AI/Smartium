import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren voor osteoporose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke risicofactoren zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hogere leeftijd;`}</Inline></li>
        <li><Inline>{`lage BMI;`}</Inline></li>
        <li><Inline>{`reumatoïde artritis;`}</Inline></li>
        <li><Inline>{`diabetes;`}</Inline></li>
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`corticosteroïdgebruik;`}</Inline></li>
        <li><Inline>{`eerdere fractuur na het 50e levensjaar;`}</Inline></li>
        <li><Inline>{`overmatig alcoholgebruik;`}</Inline></li>
        <li><Inline>{`positieve familieanamnese voor heupfractuur;`}</Inline></li>
        <li><Inline>{`vitamine D-deficiëntie;`}</Inline></li>
        <li><Inline>{`immobiliteit;`}</Inline></li>
        <li><Inline>{`vroege menopauze of secundaire amenorroe;`}</Inline></li>
        <li><Inline>{`secundaire osteoporose bij aandoeningen zoals inflammatoire ziekten, hypogonadisme, hyper(para)thyreoïdie, coeliakie, diabetes en orgaantransplantatie;`}</Inline></li>
        <li><Inline>{`medicatie zoals glucocorticoïden, heparine, cyclosporine, tacrolimus, protonpompremmers, SSRI’s, methotrexaat, carbamazepine, aromataseremmers, GnRH-agonisten en thiazolidinedionen.`}</Inline></li>
      </ul>
    </div>
  )
}
