import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie is in de nefrologie een snelle, veilige en toegankelijke eerste beeldvormende techniek. Vooral bij acute nierschade is het onderzoek belangrijk om postrenale obstructie uit te sluiten. De belangrijkste indicaties zijn verdenking op obstructie, beoordeling van niergrootte en -structuur, opsporen van cysten of tumoren en evaluatie van de blaas. De echo wordt ook vroeg ingezet bij onbegrepen hematurie of proteinurie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De techniek heeft wel beperkingen: de beeldkwaliteit hangt af van apparatuur en ervaring, en ernstige obesitas of huidwonden kunnen het onderzoek bemoeilijken. Echografie is niet geschikt om glomerulaire schade aan te tonen. Als de echo geen afwijkingen laat zien, moet je verder denken aan pre-renale of renale oorzaken en zo nodig aanvullend onderzoek doen, zoals urineonderzoek, bloedonderzoek of CT-urogram.`}</Inline></p>
    </div>
  )
}
