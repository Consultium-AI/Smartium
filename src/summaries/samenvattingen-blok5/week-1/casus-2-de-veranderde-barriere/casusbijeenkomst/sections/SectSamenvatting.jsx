import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`De rode draad van deze casus is het herkennen van huidafwijkingen en het logisch koppelen van beeld, anamnese en aanvullend onderzoek. Psoriasis vraagt om beoordeling van huid, nagels en gewrichten, met aandacht voor biologicals en artritis psoriatica. Eczeem draait om een beschadigde huidbarrière en goede smeeradviezen. Purpura kunnen wijzen op vasculitis of een stollingsprobleem. IgA-vasculitis geeft palpabele purpura, vaak op de onderbenen, met mogelijke nier- en gewrichtsbetrokkenheid. Hemofilie A geeft bloedingsproblemen met een verlengde APTT en factor VIII-deficiëntie.`}</Inline>
        </p>
      </div>
    </div>
  )
}
