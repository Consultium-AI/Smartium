import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 2: overleg met een collega en raadpleeg eventueel Veilig Thuis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vermoeden is overleg essentieel. Advies vragen bij Veilig Thuis of bij een deskundige collega kan anoniem. Dat betekent dat er geen sprake is van schending van het beroepsgeheim. Tijdens zo’n advies wordt de situatie ingeschat door een medewerker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verantwoordelijkheid voor verdere stappen blijft bij degene die het advies vraagt. Soms leidt een advies tot een consult: dan ondersteunt de medewerker je ook bij het uitvoeren van het advies en bijvoorbeeld bij het bespreken van zorgen met ouders.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Multidisciplinaire samenwerking is noodzakelijk; goede diagnostiek en begeleiding zijn zonder samenwerking niet mogelijk.`}</Inline></p>
    </div>
  )
}
