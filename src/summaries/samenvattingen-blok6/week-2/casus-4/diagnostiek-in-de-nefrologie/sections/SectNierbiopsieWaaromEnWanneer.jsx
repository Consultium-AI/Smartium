import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nierbiopsie: waarom en wanneer?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Soms levert alle aanvullende diagnostiek nog steeds geen duidelijke diagnose op. Dan kan een nierbiopsie nodig zijn. Dat geldt bijvoorbeeld bij een patiënt met een nefrotisch syndroom waarvan de oorzaak niet duidelijk is, of bij een oncologische patiënt bij wie tubulusschade wordt vermoed door hypotensie of door inflammatie door immunotherapie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een nierbiopsie kan ook nodig zijn om de prognose of de respons op behandeling beter in te schatten. Denk aan een patiënt met een ernstige nierfunctiestoornis bij ANCA-vasculitis, waarbij dialyse nodig is. Het biopt kan dan helpen bij de beslissing of immuunsuppressie nog zinvol is. Als er nog veel inflammatie is en weinig chronische schade, kan doorgaan logisch zijn. Als er juist veel chronische schade en weinig tot geen inflammatie is, kan stoppen overwogen worden.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is een nierbiopsie niet zomaar een standaardonderzoek?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een nierbiopsie is een invasieve ingreep. De belangrijkste complicatie is bloeding. Dat is logisch, omdat de nier sterk doorbloed is en uit veel kleine bloedvaten bestaat, waaronder de glomeruli. Elke punctie in de nier geeft dus een risico op bloeding, meestal beperkt, maar soms klinisch relevant.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De biopsie wordt meestal door een radioloog verricht, maar soms door een nefroloog. Daarbij wordt gebruikgemaakt van echografie, en soms van CT, om de punctie veilig uit te voeren.`}</Inline></p>
    </div>
  )
}
