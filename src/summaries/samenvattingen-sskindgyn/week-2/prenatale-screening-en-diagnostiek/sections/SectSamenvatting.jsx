import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Prenatale screening en diagnostiek draaien om goede counseling, een geïnformeerde keuze en het tijdig opsporen van afwijkingen. De NIPT is een gevoelige screeningstest voor trisomie 21, 18 en 13, maar geen diagnostische test. Bij een afwijkende uitslag is invasieve diagnostiek nodig. De 13-weken echo en 20-weken echo zijn belangrijke structurele screeningsonderzoeken; bij verdenking op afwijkingen volgt geavanceerd ultrageluidsonderzoek in de derde lijn. Bij echo-afwijkingen en nevenbevindingen is de differentiaaldiagnose vaak breed, en genetische counseling speelt dan een centrale rol.`}</Inline></p>
    </div>
  )
}
