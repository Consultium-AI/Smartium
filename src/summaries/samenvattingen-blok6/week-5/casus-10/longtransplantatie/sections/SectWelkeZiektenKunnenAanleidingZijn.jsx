import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke ziekten kunnen aanleiding zijn?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longtransplantatie kan worden overwogen bij ernstige eindstadiumziekten zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longemfyseem`}</Inline></li>
        <li><Inline>{`ernstig obstructief longlijden door obliteratieve bronchiolitis`}</Inline></li>
        <li><Inline>{`longfibrose`}</Inline></li>
        <li><Inline>{`pulmonale arteriële hypertensie`}</Inline></li>
        <li><Inline>{`cystische fibrose`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij longfibrose kan het bijvoorbeeld gaan om idiopathische longfibrose, maar ook om fibrose die samenhangt met auto-immuunziekten zoals reuma of anti-synthetasesyndroom.`}</Inline></p>
      <PBody text={`Astma bronchiale is in de regel **geen indicatie** voor longtransplantatie, omdat astma bij goede behandeling meestal een normale prognose heeft.`} />
      <SubHeading><Inline>{`Tabel 1. Voorbeelden van aandoeningen en de plaats van longtransplantatie`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening", "Plaats in de module"], ["Longemfyseem", "Indicatie"], ["Obliteratieve bronchiolitis", "Indicatie"], ["Longfibrose", "Indicatie"], ["Pulmonale arteriële hypertensie", "Indicatie"], ["Cystische fibrose", "Indicatie, maar door CFTR-modulatoren vaak minder vaak nodig"], ["Astma", "Geen indicatie in de regel"]]} />
      <PBody text={`**Aandacht-vraagje:** Wanneer denk je aan longtransplantatie?
**Mini-antwoord:** Pas bij een ernstige, irreversibele longziekte die ondanks maximale behandeling verder achteruitgaat.`} />
    </div>
  )
}
