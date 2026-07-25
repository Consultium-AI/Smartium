import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voet`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de voet zijn vooral deze gewrichten van belang:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**MTP** = metatarsofalangeale gewrichten`}</Inline></li>
        <li><Inline>{`**IP** = interfalangeale gewrichten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijke voorkeurslokalisaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**MTP-1**: artrose en jicht`}</Inline></li>
        <li><Inline>{`**MTP-5**: RA`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Waarom is de verdeling van gewrichtsafwijkingen zo belangrijk?
**Mini-antwoord:** Omdat bepaalde aandoeningen typisch bepaalde gewrichten aantasten, en dat helpt bij de diagnose.`} />
    </div>
  )
}
