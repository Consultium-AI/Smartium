import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Infecties in het kraambed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het kraambed moet je altijd alert zijn op infecties. Daarbij let je vooral op de drie B’s: borsten, buik en benen.`}</Inline></p>
      <DataTable rows={[["Tabel 1. De 3 B’s in het kraambed"], ["Borsten", "Stuwing, mastitis, pneumonie"], ["Buik", "Endometritis, cystitis, pyelonefritis"], ["Benen", "Trombose, flebitis"]]} />
      <SubHeading><Inline>{`Waarom is een kraamvrouw vatbaar voor infectie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de bevalling zijn er meerdere factoren die infecties makkelijker maken. Er is een wondvlak in de uterus op de plaats van de placenta. Daarnaast kunnen er wonden zijn door ruptuur, episiotomie of sectio caesarea. Bloedstolsels en necrotisch weefsel vormen een goede voedingsbodem voor bacteriën. De natuurlijke afweer is verminderd: de vaginale flora neemt af, de pH stijgt en de cervicale slijmprop is kleiner. Ook kan de weerstand lager zijn, bijvoorbeeld door anemie. Verder kunnen exogene verwekkers binnendringen, bijvoorbeeld via vaginale touchers, katheterisatie of instrumenten.`}</Inline></p>
      <SubHeading><Inline>{`Welke klachten en vragen zijn belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op infectie vraag je gericht naar algemeen ziek zijn, braken, misselijkheid, diarree, buikpijn, maagzuur en icterus. Ook vraag je hoe lang de klachten bestaan en hoe hevig ze zijn. Verder let je op hoesten en sputum, stuwing van de borsten, vaginale afscheiding of riekende lochia, dysurie en pollakisurie, de toestand van perineum of buikwond en pijnlijke rode benen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waar denk je aan bij riekende lochia en buikpijn?
**Mini-antwoord:** Aan een infectie van de uterus, zoals endometritis puerperalis.`} />
      <SubHeading><Inline>{`Lichamelijk onderzoek en aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het algemeen onderzoek beoordeel je of de patiënte ziek oogt en meet je temperatuur, pols en bloeddruk. Daarna onderzoek je onder andere de borsten, longen, hart, buik, nierloges, extremiteiten en eventuele wonden. Ook kijk je naar vloeien, mictie en defecatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bestaat uit laboratoriumonderzoek met Hb, CRP, leukocyten, differentiatie en kweken van cervix, bloed en wond. Ook urineonderzoek is belangrijk. Met echoscopie kun je zoeken naar een hematoom of abces. Soms is een chirurgisch consult nodig, bijvoorbeeld als appendicitis in de differentiaaldiagnose staat.`}</Inline></p>
      <SubHeading><Inline>{`Endometritis puerperalis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De waarschijnlijkheidsdiagnose bij hoge koorts, buikpijn, ziek zijn en riekende lochia is endometritis puerperalis. Dit ontstaat meestal vanaf 2 dagen postpartum. De koorts is vaak hoog en piekend, soms boven 40 °C. De patiënte is klinisch ziek. De infectie kan veroorzaakt worden door aerobe en anaerobe micro-organismen, vooral groep A streptokokken. Daarbij moet je bedacht zijn op sepsis. De infectie kan zich uitbreiden via de tubae, de uteruswand en het retroperitoneum. Een ernstige complicatie is necrotiserende fasciitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als endometritis niet of te laat herkend wordt, kan dit leiden tot hoge morbiditeit en mortaliteit.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling van endometritis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit antibiotica, vochttoediening en pijnstilling. Vaak wordt intraveneus cefuroxim gecombineerd met metronidazol gegeven. Als alternatief kan amoxicilline/clavulaanzuur worden gebruikt. Bij ernstige ziekte of sepsis wordt een aminoglycoside toegevoegd. Soms is opname op de intensive care nodig.`}</Inline></p>
      <SubHeading><Inline>{`Tijdsbeloop van infecties in het kraambed`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 2. Globale tijdsindeling van infecties en complicaties"], ["Dag 1-2", "Sepsis, groep A streptokok"], ["Dag 3-4", "Borststuwing, endometritis"], ["Dag 4-5", "Salpingitis, pelvoperitonitis"], ["Dag 6-7", "Parametritis, trombo-embolie"], ["Week 2", "Trombo-embolie"], ["> Week 2", "Mastitis"]]} />
    </div>
  )
}
