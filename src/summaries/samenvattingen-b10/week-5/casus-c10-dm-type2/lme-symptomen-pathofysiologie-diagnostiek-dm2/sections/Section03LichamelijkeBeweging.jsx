import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Lichamelijke beweging`}</Inline></h3>
      <p><Inline>{`Lichamelijke beweging is belangrijk voor zowel de lichamelijke als de mentale gezondheid. Het gaat niet alleen om sporten, maar om alles wat je lichaam in beweging brengt: thuis, op het werk, in de vrije tijd en natuurlijk tijdens sport. Het idee is dat bewegen op verschillende manieren invloed heeft op je gezondheid en kwaliteit van leven.`}</Inline></p>
      <p><Inline>{`Een belangrijk uitgangspunt is dat bewegen verschillende **intensiteiten** kan hebben. Die intensiteit zegt iets over hoe zwaar de activiteit voor het lichaam is. Daarnaast heeft bewegen ook verschillende **doelen**: je kunt bewegen om je conditie te verbeteren, om spieren sterker te maken, om botten te versterken of om je balans te trainen.`}</Inline></p>
    </div>
  )
}
