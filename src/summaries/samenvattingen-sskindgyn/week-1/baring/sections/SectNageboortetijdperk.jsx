import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nageboortetijdperk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de geboorte van het kind volgt het nageboortetijdperk. In deze fase wordt de placenta geboren. Ook hier is goede begeleiding belangrijk, omdat oxytocine helpt om de placenta vlot te laten komen en het bloedverlies te beperken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Je bepaalt eerst de hoogte van de fundus en voelt of de placenta los ligt. Daarna laat je de placenta geboren worden. Vervolgens inspecteer je het baringskanaal op rupturen en hecht je zo nodig een ruptuur of episiotomie.`}</Inline></p>
      <SubHeading><Inline>{`Handgreep van Küstner`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om te beoordelen of de placenta los ligt van de uteruswand, gebruik je de handgreep van Küstner. Daarbij houd je de navelstreng op spanning met de rechterhand. Met de linkerhand geef je druk op de grens tussen corpus uteri en het onderste uterussegment.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de navelstreng naar binnen wordt getrokken, heet dit Küstner negatief. Dan ligt de placenta nog niet los in het onderste uterussegment. Als er niets gebeurt of de navelstreng juist iets naar buiten komt, heet dit Küstner positief. Dan kan de placenta worden geboren, vaak met persen terwijl de buik van de vrouw ondersteund wordt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Handgreep van Küstner`}</Inline></SubHeading>
      <DataTable rows={[["Uitkomst", "Betekenis"], ["Küstner negatief", "Navelstreng wordt naar binnen getrokken; placenta ligt nog niet los"], ["Küstner positief", "Geen inwaartse trek of juist iets naar buiten; placenta kan geboren worden"]]} />
    </div>
  )
}
