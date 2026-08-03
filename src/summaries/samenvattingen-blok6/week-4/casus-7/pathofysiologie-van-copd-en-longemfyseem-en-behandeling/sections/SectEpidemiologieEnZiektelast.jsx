import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie en ziektelast`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD komt wereldwijd veel voor en geeft een hoge morbiditeit, mortaliteit en zorglast. Wereldwijd is COPD doodsoorzaak nummer vier. De verwachting is dat de prevalentie de komende decennia verder zal toenemen, vooral bij vrouwen en in landen met een lager inkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook in Nederland is de ziektelast groot. COPD staat hier op de tweede plaats in de ranglijst van ziektelast. Daarbij wordt vaak de DALY gebruikt: *Disability Adjusted Life Years*. Dit is een samengestelde maat voor gezondheidsverlies, opgebouwd uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verloren levensjaren door vroegtijdige sterfte;`}</Inline></li>
        <li><Inline>{`jaren geleefd met ziekte, gewogen naar de ernst daarvan.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`COPD komt vaker voor bij mannen, bij mensen boven de 40 jaar en bij rokers. Toch kunnen ook niet-rokers COPD ontwikkelen; dat is een belangrijk punt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke epidemiologische kenmerken van COPD`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Inhoud"], ["Wereldwijde impact", "Veel voorkomend, hoge morbiditeit en mortaliteit"], ["Wereldwijde sterfte", "Doodsoorzaak nummer 4"], ["Nederland", "Hoge ziektelast, tweede plaats"], ["Vaker bij", "Mannen, >40 jaar, rokers"], ["Ook mogelijk bij", "Niet-rokers"]]} />
    </div>
  )
}
