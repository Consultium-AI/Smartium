import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een ziek kind met sufheid en braken moet je altijd eerst ABC beoordelen en direct glucose meten. Hypoglycemie is gevaarlijk voor de hersenen en moet snel worden gecorrigeerd. De aanwezigheid of afwezigheid van ketonen, de levergrootte en de relatie met vasten of voeding helpen om de oorzaak te vinden. Ketonen ontbreken vooral bij vetzuuroxidatiestoornissen, ketogenesedefecten en hyperinsulinisme. Bij hepatomegalie denk je eerder aan een glycogeenstapelingsziekte. De hielprikscreening is bedoeld om ernstige, behandelbare aandoeningen vroeg op te sporen. Erfelijkheid is daarbij belangrijk, omdat het gevolgen kan hebben voor het hele gezin en herhaling in een familie kan voorkomen worden.`}</Inline></p>
    </div>
  )
}
