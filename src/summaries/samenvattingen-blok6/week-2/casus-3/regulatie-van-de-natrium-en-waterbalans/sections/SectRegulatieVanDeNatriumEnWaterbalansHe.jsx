import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Regulatie van de natrium- en waterbalans: het grote plaatje`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De natrium- en waterbalans zijn nauw met elkaar verbonden, maar het zijn niet precies hetzelfde systeem. Natrium bepaalt vooral het extracellulaire volume: als het lichaam natrium vasthoudt, wordt ook water vastgehouden en neemt het volume toe. Water bepaalt vooral de osmolaliteit, dus de concentratie van opgeloste deeltjes in het lichaam. De nieren spelen hierin een centrale rol. Zij regelen hoeveel natrium en water worden uitgescheiden of teruggeresorbeerd, zodat de samenstelling van het lichaam zo constant mogelijk blijft.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk uitgangspunt is dat de osmolaliteit in de verschillende lichaamscompartimenten vrijwel gelijk is, ook al verschilt de samenstelling van die compartimenten sterk. Het lichaam bewaakt dus niet alleen hoeveel vocht er is, maar ook hoe geconcentreerd dat vocht is.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom zijn natrium en water zo belangrijk samen?
**Mini-antwoord:** omdat natrium vooral het volume bepaalt en water vooral de osmolaliteit; samen houden ze de homeostase in stand.`} />
    </div>
  )
}
