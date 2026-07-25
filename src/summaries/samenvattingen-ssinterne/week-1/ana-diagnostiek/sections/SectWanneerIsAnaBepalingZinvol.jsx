import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer is ANA-bepaling zinvol?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ANA-bepaling is vooral zinvol bij verdenking op ANA-geassocieerde systeemziekten. De belangrijkste voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`systemische lupus erythematosus (SLE)`}</Inline></li>
        <li><Inline>{`Sjögren syndroom`}</Inline></li>
        <li><Inline>{`systemische sclerose`}</Inline></li>
        <li><Inline>{`mixed connective tissue disease (MCTD)`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij andere systeemziekten is ANA-bepaling niet zinvol. Denk bijvoorbeeld aan sarcoïdose, reumatoïde artritis, morbus Graves en granulomatosis met polyangiitis. Deze ziekten zijn wel systeemziekten, maar niet typisch ANA-geassocieerd.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. ANA-bepaling: wel of niet zinvol`}</Inline></SubHeading>
      <DataTable rows={[["Wel zinvol bij verdenking op", "Niet zinvol bij verdenking op"], ["SLE", "Sarcoïdose"], ["Sjögren syndroom", "Reumatoïde artritis"], ["Systemische sclerose", "Morbus Graves"], ["MCTD", "Granulomatosis met polyangiitis"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is dit belangrijk?
**Mini-antwoord:** Omdat een ANA-test alleen echt helpt als de klinische verdenking al voldoende gericht is.`} />
      <p className="leading-relaxed"><Inline>{`Een lage a priori kans op een ANA-geassocieerde systeemziekte maakt de test weinig bruikbaar. Bij zeer aspecifieke klachten moet je dus terughoudend zijn met aanvragen. Een positieve ANA bij iemand zonder passend klinisch beeld heeft vaak weinig betekenis en kan juist leiden tot onnodig vervolgonderzoek.`}</Inline></p>
    </div>
  )
}
