import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Behandeling en monitoring`}</Inline></h3>
      <p><Inline>{`DM2 kan, in tegenstelling tot DM1, worden behandeld met een combinatie van **leefstijlmaatregelen** en medicatie, en in sommige situaties kan verbetering of zelfs genezing/remissie optreden. Gewichtsverlies en leefstijlaanpassingen zijn daarbij heel belangrijk. Ook bariatrische chirurgie kan de glucosehuishouding verbeteren, zelfs nog vóórdat er sprake is van groot gewichtsverlies.`}</Inline></p>
      <p><Inline>{`De behandeling is altijd afhankelijk van de persoon: leeftijd, ziekteduur, kwetsbaarheid en de mate van glykemische controle spelen mee.`}</Inline></p>
      <p><Inline>{`Tabel 6. Streefwaarden tijdens behandeling`}</Inline></p>
      <DataTable rows={[["Meting", "Streefwaarde"], ["Veneuze nuchtere plasmaglucose", "4,5–8 mmol/L"], ["Veneuze plasmaglucose 2 uur na de maaltijd", "<9 mmol/L"]]} />
      <p><Inline>{`Tabel 7. HbA1c-streefwaarden bij behandeling`}</Inline></p>
      <DataTable rows={[["HbA1c (mmol/mol)", "Patiëntkarakteristiek"], ["<53", "<70 jaar, of ≥70 jaar met alleen leefstijladvies of metformine"], ["54–58", "≥70 jaar met ziekteduur <10 jaar"], ["54–64", "≥70 jaar met ziekteduur ≥10 jaar"], ["<69", "Kwetsbare ouderen met korte levensverwachting (arbitrair <5 jaar)"]]} />
      <p><Inline>{`De HbA1c-doelen zijn dus niet voor iedereen hetzelfde. Bij jongere patiënten wordt meestal een strengere streefwaarde aangehouden, terwijl bij oudere of kwetsbare patiënten een minder strakke doelstelling passend kan zijn.`}</Inline></p>
      <p><Inline>{`Als leefstijlmaatregelen onvoldoende effect hebben, kan medicatie worden toegevoegd. Medicatie kan de **insulinegevoeligheid verbeteren** of de **insulineafgifte verhogen**. Als dat nog onvoldoende is, kan ook **insuline** nodig zijn.`}</Inline></p>
    </div>
  )
}
