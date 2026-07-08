import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose: hormonale en anatomische oorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyclusstoornissen kun je grofweg indelen in hormonale/regulatoire oorzaken en organische oorzaken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Globale indeling van oorzaken van cyclusstoornissen`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Voorbeelden"], ["Regulatie/hormonaal", "WHO1, WHO2, WHO3, hyperprolactinemie"], ["Organisch", "Uterus myomatosus, endometrium- of cervixpathologie, anatomische afwijkingen door fusiedefecten van de Müller-structuren, iatrogeen"]]} />
      <p className="leading-relaxed"><Inline>{`Onder de anatomische afwijkingen vallen bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Mayer-Rokitansky-Küster-syndroom;`}</Inline></li>
        <li><Inline>{`hymen imperforatus;`}</Inline></li>
        <li><Inline>{`dwars vaginaseptum;`}</Inline></li>
        <li><Inline>{`partieel of compleet androgeen ongevoeligheidssyndroom.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij aanlegstoornissen in de anatomie is er vaak sprake van primaire amenorroe. Bij een hymen imperforatus of dwars vaginaseptum is er sprake van een afvloedbelemmering, waardoor ook primaire amenorroe ontstaat, vaak met cyclische hevige buikpijn. Bij MRK-syndroom is er door afwezigheid van uterus en een deel van de vagina altijd primaire amenorroe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Myomen of endometriumpathologie geven meestal hevig menstrueel bloedverlies of onregelmatig overvloedig bloedverlies, maar geen amenorroe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een patiënte die eerder wel heeft gemenstrueerd, zijn aangeboren anatomische afwijkingen minder waarschijnlijk. Daarom ligt de nadruk in deze stof vooral op cyclusstoornissen door een regulatieprobleem, dus een endocriene oorzaak.`}</Inline></p>
      <SubHeading><Inline>{`WHO-indeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De WHO-indeling helpt om hormonale cyclusstoornissen te ordenen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`WHO1: centrale oorzaak;`}</Inline></li>
        <li><Inline>{`WHO2: normo-oestrogene of soms verhoogde oestrogeensituatie;`}</Inline></li>
        <li><Inline>{`WHO3: oorzaak op niveau van het eindorgaan, in dit geval de ovaria.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hyperprolactinemie kan ook een oorzaak zijn van cyclusstoornissen, zelfs zonder galactorroe.`}</Inline></p>
    </div>
  )
}
