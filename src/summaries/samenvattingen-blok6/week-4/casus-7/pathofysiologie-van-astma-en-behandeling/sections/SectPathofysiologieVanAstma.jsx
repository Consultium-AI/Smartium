import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathofysiologie van astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klachten bij astma ontstaan door vernauwing van de luchtwegen. Die vernauwing wordt veroorzaakt door drie hoofdprocessen: inflammatie, hyperreactiviteit van de gladde spiercellen in de luchtwegwand en mucushypersecretie. Het onderliggende immunologische proces kan verschillen tussen patiënten, maar in de luchtweg zie je wel vergelijkbare veranderingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast inflammatie kan er ook sprake zijn van airway remodeling. Daarmee worden structurele veranderingen in de luchtweg bedoeld die ontstaan als gevolg van de ontsteking. Deze veranderingen zijn gedeeltelijk of zelfs niet meer reversibel.`}</Inline></p>
      <SubHeading><Inline>{`Veranderingen bij airway remodeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste veranderingen zijn:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Veranderingen bij astmatische airway remodeling"], ["Slijmbekercelhyperplasie", "Meer slijmproducerende cellen"], ["Subepitheliale fibrose/collageendispositie", "Verdikking door bindweefselafzetting"], ["Toename aantal bloedvaten", "Meer vascularisatie"], ["Mucuspluggen en Charcot-Leyden kristallen", "Ophoping van slijm en ontstekingsproducten"], ["Gladde spiercelhyperplasie en -trofie", "Toename en vergroting van gladde spiercellen"], ["Vergroting submucosale klieren", "Meer slijmproducerende klieren"]]} />
      <p className="leading-relaxed"><Inline>{`Deze veranderingen dragen bij aan een nauwere luchtweg en aan het chronische karakter van astma.`}</Inline></p>
    </div>
  )
}
