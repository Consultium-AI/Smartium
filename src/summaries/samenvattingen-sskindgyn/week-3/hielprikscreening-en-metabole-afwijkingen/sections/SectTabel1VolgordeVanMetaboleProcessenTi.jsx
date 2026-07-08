import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Volgorde van metabole processen tijdens vasten`}</Inline></SubHeading>
      <DataTable rows={[["Volgorde", "Proces", "Betekenis"], ["1", "Glycogenolyse", "afbraak van glycogeen uit de lever"], ["2", "Gluconeogenese", "nieuwvorming van glucose uit bouwstenen"], ["3", "Vetzuuroxidatie", "verbranding van vetzuren"], ["4", "Ketogenese", "aanmaak van ketonen"]]} />
      <p className="leading-relaxed"><Inline>{`Eerst gebruikt het lichaam dus de glycogeenvoorraad in de lever. Als het vasten langer duurt, wordt glucose gemaakt uit aminozuren, lactaat en glycerol. Daarna schakelt het lichaam steeds meer over op vetverbranding. Uiteindelijk worden ketonen gevormd. Ketonen kunnen, naast glucose, ook als energiebron voor de hersenen dienen. Vetten zelf kunnen de hersenen niet gebruiken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hoe jonger een kind is, hoe korter de vastentolerantie. Zuigelingen raken dus sneller in de problemen dan oudere kinderen of volwassenen. Dat komt onder andere doordat hun verhouding tussen hoofd en lichaam groter is, waardoor hun glucosebehoefte per kilogram hoger is.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom ontregelen jonge kinderen sneller bij vasten?
**Mini-antwoord:** Omdat hun vastentolerantie korter is en hun glucosebehoefte per kilo hoger is.`} />
    </div>
  )
}
