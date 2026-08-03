import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische aanpak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een beroepsgebonden ILD moet je altijd breed denken. De klachten en het klinisch beeld kunnen namelijk lijken op andere longziekten. Daarom is een systematische aanpak nodig.`}</Inline></p>
      <SubHeading><Inline>{`Wat moet je uitvragen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De anamnese is heel belangrijk. Je vraagt naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huidige en vroegere beroepen`}</Inline></li>
        <li><Inline>{`duur van de blootstelling`}</Inline></li>
        <li><Inline>{`aard van de blootstelling`}</Inline></li>
        <li><Inline>{`mogelijke blootstelling aan stof, rook, dampen, metalen of biologische agentia`}</Inline></li>
        <li><Inline>{`werkzaamheden thuis of als hobby die ook blootstelling kunnen geven`}</Inline></li>
        <li><Inline>{`contact met vogels`}</Inline></li>
        <li><Inline>{`tuinieren en contact met schimmels of chemicaliën`}</Inline></li>
        <li><Inline>{`roken en drugsgebruik`}</Inline></li>
        <li><Inline>{`muziek maken met een blaasinstrument, als dat beroepsmatig gebeurt`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Werk en privé kunnen elkaar overlappen. Iemand kan bijvoorbeeld thuis klussen, met vogels werken of in een stoffige omgeving hobby’s uitvoeren. Dat moet je dus expliciet navragen.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom vraag je ook naar hobby’s en privé-activiteiten?
**Mini-antwoord:** omdat de blootstelling niet alleen op het werk hoeft plaats te vinden.`} />
      <SubHeading><Inline>{`Welke klachten passen erbij?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klachten zijn vaak aspecifiek. Veelvoorkomende symptomen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`aanhoudende hoest`}</Inline></li>
        <li><Inline>{`kortademigheid`}</Inline></li>
        <li><Inline>{`pijn op de borst`}</Inline></li>
        <li><Inline>{`vermoeidheid`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De klachten kunnen langzaam ontstaan, maar soms ook snel verergeren. Bij sommige patiënten hangen de klachten duidelijk samen met een bepaalde taak of werkdag, maar dat herkennen zij zelf niet altijd meteen.`}</Inline></p>
      <SubHeading><Inline>{`Multidisciplinaire benadering`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goede diagnose is samenwerking nodig tussen meerdere specialisten. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longarts`}</Inline></li>
        <li><Inline>{`radioloog`}</Inline></li>
        <li><Inline>{`patholoog`}</Inline></li>
        <li><Inline>{`bedrijfsarts`}</Inline></li>
        <li><Inline>{`specialist arbeidsgeneeskunde of industriële hygiëne`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De diagnose berust op een combinatie van gegevens: een goede medische voorgeschiedenis, een gedetailleerde blootstellingsanamnese, lichamelijk onderzoek en aanvullend onderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke onderzoeken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longfunctieonderzoek`}</Inline></li>
        <li><Inline>{`HRCT van de thorax`}</Inline></li>
        <li><Inline>{`eventueel bloedonderzoek`}</Inline></li>
        <li><Inline>{`zo nodig een longbiopt`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms is ook onderzoek op de werkplek nodig om de blootstelling beter in kaart te brengen. Het is belangrijk om te achterhalen welke stof of welk “agent” de ziekte mogelijk heeft veroorzaakt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijk diagnostisch onderzoek bij verdenking beroepsgebonden ILD`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Doel"], ["Anamnese", "Blootstelling, duur, werk en hobby’s in kaart brengen"], ["Lichamelijk onderzoek", "Tekenen van longziekte opsporen"], ["Longfunctieonderzoek", "Restrictie en functieverlies beoordelen"], ["HRCT-thorax", "Beeldvorming van interstitiële afwijkingen"], ["Bloedonderzoek", "Ondersteunende diagnostiek waar passend"], ["Longbiopt", "Nodig als de diagnose nog niet duidelijk is"], ["Werkplekonderzoek", "Blootstelling en bron beter vaststellen"], ["Multidisciplinair overleg", "Diagnose en differentiaaldiagnose afstemmen"]]} />
      <SubHeading><Inline>{`Diagnostisch denkproces`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een beroepsgebonden ILD wordt eerst gekeken of er een bekende blootstelling is en of er afwijkingen passen bij ILD, bijvoorbeeld op de thoraxfoto of HRCT, eventueel samen met klachten, lichamelijke afwijkingen of een restrictief longfunctieverlies. Daarna worden alternatieve diagnoses uitgesloten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als het beeld typisch is, kan de diagnose in multidisciplinair overleg worden gesteld. Als het beeld atypisch of onduidelijk is, kunnen extra onderzoeken nodig zijn, zoals sputumonderzoek, BAL-onderzoek of antigeenspecifieke testen. Soms is een chirurgisch longbiopt nodig om duidelijkheid te krijgen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Globale diagnostische route`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Wat gebeurt er?"], ["1", "Verdenking op beroepsgebonden ILD"], ["2", "Blootstelling documenteren"], ["3", "Beeldvorming en longfunctie beoordelen"], ["4", "Alternatieve diagnoses uitsluiten"], ["5", "Multidisciplinair overleg"], ["6", "Zo nodig aanvullend onderzoek of biopt"], ["7", "Definitieve diagnose en specifieke oorzaak vaststellen"]]} />
    </div>
  )
}
