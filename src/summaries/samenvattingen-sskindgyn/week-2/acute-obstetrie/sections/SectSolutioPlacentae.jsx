import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Solutio placentae`}</Inline></SubHeading>
      <PBody text={`Bij **solutio placentae** laat de placenta los van de baarmoederwand. Daardoor ontstaat een bloedklont tussen placenta en uterus. De vrouw heeft vaak plots hevige buikpijn, soms met vaginaal bloedverlies. De hoeveelheid zichtbaar bloedverlies zegt niet altijd iets over de ernst van het inwendige bloedverlies.`} />
      <PBody text={`Voor de moeder is dit gevaarlijk door acuut circulatoir volumeverlies en mogelijk **DIC**. Voor de foetus is het gevaar dat de uitwisseling van zuurstof en voedingsstoffen plots vermindert. Daarom wil je de foetus snel geboren laten worden, maar **pas nadat de moeder gestabiliseerd is**.`} />
      <SubHeading><Inline>{`Tabel 3. Kern van het beleid bij solutio placentae`}</Inline></SubHeading>
      <DataTable rows={[["Prioriteit", "Handeling"], ["1", "Hulp roepen en moeder eerst stabiliseren"], ["2", "ABC: 15 liter O2, twee infusen, bloedonderzoek, volumeherstel"], ["3", "Foetale beoordeling met CTG of echo"], ["4", "Beslissen over snelle partus of sectio"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een levende foetus wordt vaak een snelle partus of sectio nagestreefd, maar alleen na snelle hemodynamische stabilisatie van de moeder. Mogelijke problemen zijn fluxus door DIC, fluxus door atonie en cardiovasculaire collaps. Atonie kan worden behandeld met uterotonica zoals syntocinon, nalador of misoprostol.`}</Inline></p>
    </div>
  )
}
