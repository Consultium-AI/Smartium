import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypertensie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypertensie is een belangrijke risicofactor voor hart- en vaatziekten en is sterker geassocieerd met beroerte dan met coronaire hartziekte. Het komt veel voor en wordt meestal in de eerste lijn behandeld, vaak samen met leefstijladviezen en daarna medicatie.`}</Inline></p>
      <SubHeading><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De gangbare bloeddrukverlagers zijn in principe gelijkwaardig in bloeddrukverlagend effect. Er zijn wel voorkeursmiddelen in specifieke situaties.`}</Inline></p>
      <DataTable rows={[["Situatie", "Voorkeursmiddelen"], ["Eerder myocardinfarct", "Bètablokker, ACE-remmer/ARB"], ["Angina pectoris", "Bètablokker, calciumantagonist"], ["Hartfalen", "ACE-remmer/ARB, bètablokker, lis- of thiazidediureticum, kaliumsparend diureticum/mineralocorticoïdantagonist"], ["Atriumfibrilleren", "Bètablokker, non-dihydropyridinecalciumblokker, ACE-remmer/ARB, kaliumsparend diureticum/mineralocorticoïdantagonist"], ["Perifeer arterieel vaatlijden", "ACE-remmer"], ["Diabetes mellitus", "ACE-remmer/ARB"], ["Zwangerschap", "Methyldopa, labetalol, calciumantagonist"], ["Afrikaanse herkomst (sub-Sahara)", "Thiazidediureticum en calciumantagonist"]]} />
      <p className="leading-relaxed"><Inline>{`Veelgebruikte middelen zijn onder andere hydrochloorthiazide, indapamide, valsartan, losartan, amlodipine, nifedipine, enalapril en fosinopril.`}</Inline></p>
      <SubHeading><Inline>{`Bijwerkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een veelvoorkomende bijwerking van amlodipine is enkeloedeem. Een belangrijke, maar zeldzame bijwerking van ACE-remmers is angio-oedeem. Dat komt doordat ACE-remmers ook de afbraak van bradykinine remmen.`}</Inline></p>
    </div>
  )
}
