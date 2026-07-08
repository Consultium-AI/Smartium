import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het kraambed is een periode van herstel, maar ook van verhoogde alertheid. Normale veranderingen zijn onder andere lochia, involutie van de uterus, stuwing bij het op gang komen van borstvoeding en tijdelijke emotionele labiliteit zoals babyblues. Tegelijk moet je bedacht zijn op infecties, vooral van borsten, buik en benen, op problemen met lactatie zoals spruw, en op trombose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij infectie zijn hoge koorts, buikpijn, riekende lochia en een ziek ogende patiënte belangrijke alarmsignalen. Endometritis puerperalis is dan een belangrijke diagnose en vraagt snelle behandeling met antibiotica, vocht en zo nodig intensieve zorg. Bij lactatieproblemen kunnen pijnlijke tepels en spruw passen, waarbij moeder en kind tegelijk behandeld worden. Bij een gezwollen, pijnlijk been in het kraambed moet je altijd aan diepe veneuze trombose denken en snel aanvullend onderzoek en behandeling inzetten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Kortom: in het kraambed zijn normale fysiologische veranderingen en pathologie nauw met elkaar verweven. Juist daarom is een systematische beoordeling van klachten, lichamelijk onderzoek en tijdige behandeling zo belangrijk.`}</Inline></p>
    </div>
  )
}
