import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is COPD?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD staat voor *Chronic Obstructive Pulmonary Disease*. Het is een heterogene longaandoening, dus een ziektebeeld dat niet bij iedereen precies hetzelfde verloopt. Kenmerkend zijn chronische respiratoire klachten zoals benauwdheid, hoest, sputumproductie en longaanvallen/exacerbaties. Deze klachten ontstaan door afwijkingen in de luchtwegen, zoals bronchitis en bronchiolitis, en/of in de alveoli, zoals emfyseem. Het gevolg is een persisterende, vaak progressieve luchtwegobstructie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat betekent “persisterende luchtwegobstructie”?
**Mini-antwoord:** Dat de vernauwing van de luchtwegen blijvend aanwezig is en niet volledig verdwijnt.`} />
    </div>
  )
}
