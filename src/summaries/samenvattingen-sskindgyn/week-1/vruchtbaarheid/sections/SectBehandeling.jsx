import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de berekende kans op spontane zwangerschap en van de oorzaak van de subfertiliteit.`}</Inline></p>
      <PBody text={`Als de spontane kans op zwangerschap **lager is dan 30%**, komt het paar in aanmerking voor een fertiliteitbevorderende behandeling. Is de kans **30-40% of hoger**, dan wordt meestal nog 6 tot 12 maanden expectatief beleid geadviseerd.`} />
      <SubHeading><Inline>{`Behandelopties`}</Inline></SubHeading>
      <PBody text={`**Tabel 4. Behandelopties bij subfertiliteit**`} />
      <DataTable rows={[["Behandeling", "Indicatie", "Opmerkingen"], ["Ovulatie-inductie", "Ovulatiestoornissen, vooral PCOS", "Behandelduur 6-12 maanden, zwangerschapspercentage 30-40%, meer kans op meerlingzwangerschap"], ["IUI", "Onverklaarde subfertiliteit en verminderde spermakwaliteit bij kans <30%", "Meestal 4-6 cycli, met of zonder milde ovariumstimulatie"], ["IVF", "Dubbelzijdige tubapathologie, geen succes na IUI, leeftijd vrouw ≥38 jaar", "Voorzichtig beleid bij vrouwen >41 jaar, bovengrens 45 jaar"], ["ICSI", "Ernstig verminderde spermakwaliteit, azoöspermie", "Soms met chirurgisch verkregen zaad; zwangerschapskans vergelijkbaar met IVF"], ["Eiceldonatie", "Prematuur ovarieel falen", "Afhankelijk van leeftijd donor"], ["Chirurgie", "Bijvoorbeeld tubachirurgie of chirurgie bij de man", "Afhankelijk van de oorzaak"]]} />
      <PBody text={`Bij Suzanne en Jaap is de spontane kans 29,9%. Daarom past een vruchtbaarheidsbevorderende behandeling. Op basis van de leeftijd van Suzanne wordt gestart met **IUI met milde ovariumhyperstimulatie (MOH)**, meestal voor 4 behandelingen. Na 4 behandelingen is de toegevoegde waarde namelijk minimaal.`} />
      <p className="leading-relaxed"><Inline>{`Als Suzanne 40 jaar zou zijn, zou je eerder direct aan IVF denken, omdat de kans op zwangerschap bij IUI dan laag is.`}</Inline></p>
    </div>
  )
}
