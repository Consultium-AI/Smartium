import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verloop van de patiënt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De patiënt werd geëvalueerd voor levertransplantatie, maar kwam uiteindelijk niet op de wachtlijst omdat de leverfunctie en algemene conditie langzaam verbeterden. Een jaar later was hij weer volledig aan het werk. De labMELD-score daalde naar 13. De ascites werd onder controle gehouden met eplerenon 50 mg per dag. Daarnaast gebruikte hij calciumcarbonaat/vitamine D en carvedilol 6,25 mg per dag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij controle was er nog steeds cirrose met tekenen van portale hypertensie. Het bilirubine was gedaald, de nierfunctie genormaliseerd, het albumine weer normaal en de INR nog licht verlaagd. Hij bleef onder controle en kreeg tweemaal per jaar echografische screening van de lever voor hepatocellulair carcinoom.`}</Inline></p>
    </div>
  )
}
