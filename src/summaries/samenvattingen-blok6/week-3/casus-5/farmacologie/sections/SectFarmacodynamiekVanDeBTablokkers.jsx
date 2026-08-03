import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Farmacodynamiek van de bètablokkers`}</Inline></SubHeading>
      <PBody text={`Farmacodynamiek gaat over **wat het geneesmiddel met het lichaam doet**. Voor bètablokkers betekent dit: welke receptoren worden geblokkeerd en wat is daarvan het effect.`} />
      <SubHeading><Inline>{`Selectiviteit van de drie middelen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Selectiviteit van de bètablokkers"], ["**Metoprolol**", "Selectieve bètablokker"], ["**Atenolol**", "Selectieve bètablokker"], ["**Propranolol**", "Aselectieve bètablokker"]]} />
      <PBody text={`De selectiviteit van deze middelen heeft vooral betrekking op de **bèta2-receptor**. Een selectieve bètablokker heeft dus relatief meer affiniteit voor de bèta1-receptor dan voor de bèta2-receptor.`} />
      <PBody text={`Belangrijk is ook dat de **selectiviteit kleiner wordt bij hoge concentraties**. Met andere woorden: hoe meer van het middel aanwezig is, hoe groter de kans dat ook andere receptoren worden beïnvloed.`} />
      <SubHeading><Inline>{`Klinische betekenis van selectiviteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De selectiviteit van een bètablokker is klinisch relevant, omdat een middel dat vooral bèta1 blokkeert meestal minder effect heeft op bèta2-gemedieerde processen. Dat maakt een selectieve bètablokker in veel situaties aantrekkelijker dan een aselectieve.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Blijft selectiviteit altijd even sterk?
**Mini-antwoord:** Nee, bij hogere concentraties wordt de selectiviteit kleiner.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
