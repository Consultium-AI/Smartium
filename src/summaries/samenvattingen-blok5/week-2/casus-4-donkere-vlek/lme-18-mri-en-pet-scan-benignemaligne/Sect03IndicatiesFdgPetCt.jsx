export default function Sect03IndicatiesFdgPetCt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indicaties van FDG PET/CT</h2>
      <p>
        FDG PET/CT wordt vooral gebruikt wanneer je wilt weten of ergens een hoog metabolisme aanwezig is. Dat past bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tumor</li>
        <li>infectie</li>
        <li>inflammatie</li>
      </ul>
      <p>In de oncologie zijn de belangrijkste indicaties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stadiëring: zijn er metastasen en zo ja, waar?</li>
        <li>responsevaluatie: is er progressie, respons of stabiele ziekte?</li>
        <li>verdenking op recidief</li>
        <li>
          radiotherapieplanning: het bestralen gebied kan worden ingetekend op basis van FDG-positieve afwijkingen, zodat
          de meest intensieve afwijkingen de hoogste dosis krijgen
        </li>
      </ul>
    </div>
  )
}
