import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mengproef: tekort of remmer?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een geïsoleerd verlengde aPTT is het belangrijk om te weten of er sprake is van een stollingsfactortekort of van een remmer, bijvoorbeeld medicatie of antistoffen.`}</Inline></p>
      <PBody text={`Daarvoor gebruik je de **mengproef**. Hierbij meng je plasma van de patiënt 1:1 met normaal plasma en herhaal je de aPTT.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Normaliseert de aPTT?** Dan past dit bij een **stollingsfactordeficiëntie**.`}</Inline></li>
        <li><Inline>{`**Blijft de aPTT verlengd?** Dan past dit bij een **remmer** of medicatie met remmende werking.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er sprake is van een remmer, kan het gaan om heparine, een direct trombineremmer, een specifieke factorremmer zoals tegen factor VIII of V, of een niet-specifieke remmer zoals lupus anticoagulans.`}</Inline></p>
    </div>
  )
}
