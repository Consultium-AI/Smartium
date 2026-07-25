import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lithium en hydrochloorthiazide: een belangrijke interactie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de behandeling van hypertensie kan een diureticum zoals hydrochloorthiazide worden toegevoegd. Dat lijkt op zichzelf logisch, maar bij iemand die lithium gebruikt is dit een belangrijke combinatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hydrochloorthiazide zorgt ervoor dat de terugresorptie van lithium in de nier toeneemt van ongeveer 80% naar 90%. Daardoor wordt minder lithium uitgescheiden in de urine. De klaring halveert en de lithiumspiegel kan daardoor sterk stijgen, in principe zelfs verdubbelen.`}</Inline></p>
      <PBody text={`Omdat lithium een **nauwe therapeutische index** heeft, is dat gevaarlijk. Een kleine stijging van de spiegel kan al leiden tot ernstige bijwerkingen.`} />
      <PBody text={`**Aandacht-vraagje:** wat betekent een nauwe therapeutische index?
**Mini-antwoord:** dat de veilige en de toxische spiegel dicht bij elkaar liggen.`} />
    </div>
  )
}
