import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het acuut benauwde kind`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Luchtweg- en longaandoeningen komen bij kinderen vaak voor. Vooral jonge kinderen krijgen er veel mee te maken, en deze aandoeningen behoren tot de meest voorkomende redenen voor een bezoek aan de spoedeisende hulp of opname op de kinderleeftijd. Hoesten, piepen en benauwdheid hebben een brede differentiaaldiagnose. Wat bij kinderen belangrijk is: dezelfde klachten kunnen in verschillende leeftijden door andere aandoeningen worden veroorzaakt. Ook de manier waarop je het lichamelijk onderzoek doet, hoe je vitale functies beoordeelt en hoe je de behandeling inschat, verschilt van volwassenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Kinderen zijn extra gevoelig voor luchtwegaandoeningen door een aantal kenmerken van hun lichaam. Hun afweer is nog niet volledig ontwikkeld, waardoor infecties makkelijker optreden. Hun luchtwegen zijn kleiner, waardoor al een kleine vernauwing snel tot veel meer luchtwegweerstand leidt. De weerstand van de luchtweg neemt namelijk sterk toe als de straal kleiner wordt. Ook de borstkas is soepeler en kan bij obstructie sneller collaberen. Daarnaast zijn de ademhalingsspieren nog niet volledig ontwikkeld; bij zuigelingen speelt het diafragma de hoofdrol en hulpademhalingsspieren dragen nog weinig bij. Verder hebben jonge kinderen minder longblaasjes, wat de kans op een ventilatie-perfusie mismatch vergroot. Het pulmonale vaatbed bevat relatief veel spierweefsel, waardoor pulmonale vasoconstrictie makkelijker optreedt. In de eerste 1 à 2 maanden van het leven kan bovendien een paradoxale onderdrukking van de ademdrive bestaan, waardoor infecties zich soms presenteren met apneus of hypoventilatie in plaats van duidelijke benauwdheid.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom kan een kleine vernauwing bij een zuigeling zo snel ernstig worden?
*Kort antwoord:* omdat de luchtweg klein is en de luchtwegweerstand daardoor snel sterk toeneemt.`} />
    </div>
  )
}
