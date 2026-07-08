import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontstaan van afwijkingen: HPV en dysplasie`}</Inline></SubHeading>
      <PBody text={`Afwijkingen in de cervix ontstaan door stoornissen in de celdeling. Dat heet **dysplasie**. Dysplasie betekent dus niet meteen kanker. Vaak worden deze afwijkingen veroorzaakt door een ontsteking of infectie, meestal met het **humaan papillomavirus (HPV)**.`} />
      <p className="leading-relaxed"><Inline>{`HPV wordt via seksueel contact verspreid. Het komt heel vaak voor: bij 80-90% van de seksueel actieve vrouwen is HPV ooit aanwezig. Meestal geeft het geen klachten en verdwijnt het vanzelf. Sommige vrouwen blijven drager.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende typen HPV:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**low risk HPV**: veroorzaakt vooral wratten;`}</Inline></li>
        <li><Inline>{`**high risk HPV**: komt vaker voor bij afwijkende uitstrijkjes en kan leiden tot cervixcarcinoom.`}</Inline></li>
      </ul>
      <PBody text={`Een persisterende infectie met **high risk HPV** is de belangrijkste veroorzaker van premaligne afwijkingen van de cervix. Het virus heeft dubbelstrengs DNA en codeert voor eiwitten die de cel kunnen destabiliseren en de replicatie kunnen stimuleren. Als het virus niet wordt geklaard, kunnen **hooggradige CIN-laesies** en uiteindelijk **cervixcarcinoom** ontstaan.`} />
      <PBody text={`Het proces van een HPV-infectie tot kanker verloopt langzaam en kan **10 tot 15 jaar** duren.`} />
      <PBody text={`**Aandachtsvraag:** Hoe groot is de kans dat iemand met high risk HPV uiteindelijk baarmoederhalskanker krijgt?
**Mini-antwoord:** Minder dan 1%.`} />
      <SubHeading><Inline>{`Tabel 4. Eigenschappen en risicofactoren van HPV`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Inhoud"], ["Lifetime kans op besmetting", "80-85%"], ["Prevalentie 20-24 jaar", "10%"], ["Prevalentie >30 jaar", "3,5%"], ["Spontane klaring", "ongeveer 80% binnen 2 jaar"], ["Persisterende infectie", "ongeveer 20%"], ["Risicofactoren", "meerdere seksuele partners, afweerstoornis, andere virusinfectie, roken"], ["Belangrijkste high risk typen", "HPV 16 en 18"]]} />
      <PBody text={`HPV 16 en 18 veroorzaken wereldwijd ongeveer **70% van de baarmoederhalskankers**.`} />
    </div>
  )
}
