import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Plaats van echografie in het diagnostisch traject`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie staat vaak vroeg in het diagnostisch traject van nierziekten. Dat geldt vooral bij acute nierschade, maar ook bij onbegrepen hematurie of proteinurie. De reden is simpel: je wilt snel weten of er een structureel probleem is, vooral een obstructie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de echo afwijkingen laat zien, kan dat direct richting geven aan de verdere aanpak. Zie je bijvoorbeeld hydronefrose, dan denk je aan een postrenale oorzaak. Zie je een overvolle blaas, dan kan er sprake zijn van een lagere obstructie. Zie je een afwijkende nierstructuur, dan kan dat aanleiding zijn voor verdere diagnostiek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de echo geen afwijkingen toont, betekent dat niet dat er niets aan de hand is. Dan verschuift de aandacht naar pre-renale of renale oorzaken van het nierfunctieverlies. Pre-renaal betekent dat het probleem vóór de nier zit, bijvoorbeeld door verminderde doorbloeding. Renale oorzaken zitten in de nier zelf.`}</Inline></p>
    </div>
  )
}
