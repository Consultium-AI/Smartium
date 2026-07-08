import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Classificatie van uitstrijkjes`}</Inline></SubHeading>
      <PBody text={`Bij de beoordeling van een uitstrijkje zijn twee classificaties belangrijk: de oude **Pap-classificatie** en de **KOPAC-B-classificatie**. De KOPAC-B-classificatie geeft een nauwkeurigere afspiegeling van mogelijke afwijkingen in het uitstrijkje.`} />
      <SubHeading><Inline>{`De Pap-classificatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Pap-classificatie loopt van Pap 0 tot en met Pap 5:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Pap 0**: niet beoordeelbaar, bijvoorbeeld door te weinig endocervicale cellen, ontsteking of bloedbijmenging.`}</Inline></li>
        <li><Inline>{`**Pap 1**: normaal celbeeld.`}</Inline></li>
        <li><Inline>{`**Pap 2**: kleine celafwijkingen.`}</Inline></li>
        <li><Inline>{`**Pap 3A1**: geringe celafwijkingen.`}</Inline></li>
        <li><Inline>{`**Pap 3A2**: matige celafwijkingen.`}</Inline></li>
        <li><Inline>{`**Pap 3B**: ernstige celafwijkingen.`}</Inline></li>
        <li><Inline>{`**Pap 4**: carcinoma in situ.`}</Inline></li>
        <li><Inline>{`**Pap 5**: kankercellen.`}</Inline></li>
      </ul>
      <PBody text={`**Carcinoma in situ** betekent dat er ernstige afwijkende cellen zijn, maar dat deze het omliggende weefsel nog niet zijn binnengedrongen.`} />
      <SubHeading><Inline>{`De KOPAC-B-classificatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`KOPAC-B staat voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**K** = compositie`}</Inline></li>
        <li><Inline>{`**O** = ontsteking`}</Inline></li>
        <li><Inline>{`**P** = plaveiselepitheel`}</Inline></li>
        <li><Inline>{`**A** = andere afwijkingen`}</Inline></li>
        <li><Inline>{`**C** = cilinderepitheel`}</Inline></li>
        <li><Inline>{`**B** = beoordeelbaarheid`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze classificatie beschrijft dus niet alleen of er afwijkende cellen zijn, maar ook welk type cellen aanwezig zijn en of het preparaat goed te beoordelen is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Betekenis van KOPAC-B`}</Inline></SubHeading>
      <DataTable rows={[["Letter", "Betekenis"], ["K", "Samenstelling van het uitstrijkje"], ["O", "Ontstekingsverschijnselen"], ["P", "Afwijkingen van plaveiselepitheel"], ["A", "Andere afwijkingen, zoals endometriumafwijkingen"], ["C", "Afwijkingen van cilinderepitheel"], ["B", "Beoordeelbaarheid"]]} />
      <PBody text={`Een voorbeeld: als een patholoog matige dysplasie van plaveiselcellen ziet, kan dit als **P5** worden gerapporteerd binnen de KOPAC-classificatie. Onderaan de uitslag staat dan ook vaak de overeenkomst met de Pap-classificatie, bijvoorbeeld **Pap 3A2**.`} />
      <SubHeading><Inline>{`Cytologie en histologie`}</Inline></SubHeading>
      <PBody text={`Een uitstrijkje geeft een **cytologische** uitslag. Dat betekent dat losse cellen worden beoordeeld met de Pap- en/of KOPAC-B-classificatie. Als er een **biopt** wordt genomen, volgt een **histologische** uitslag. Dan wordt gekeken naar weefselstructuur en naar de aanwezigheid van **CIN**.`} />
      <PBody text={`**CIN** betekent **cervicale intra-epitheliale neoplasie** en is een premaligne afwijking.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CIN 1** = geringe dysplasie`}</Inline></li>
        <li><Inline>{`**CIN 2** = matige dysplasie`}</Inline></li>
        <li><Inline>{`**CIN 3** = ernstige dysplasie`}</Inline></li>
        <li><Inline>{`**CIS** = carcinoma in situ`}</Inline></li>
        <li><Inline>{`**CxCa** = cervixcarcinoom`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Van cytologie naar histologie`}</Inline></SubHeading>
      <DataTable rows={[["Cytologie", "Mogelijke histologie"], ["Pap 1-2", "meestal geen of beperkte afwijkingen"], ["Pap 3", "vaak CIN 1-3"], ["Pap 4", "CIS"], ["Pap 5", "cervixcarcinoom"]]} />
    </div>
  )
}
