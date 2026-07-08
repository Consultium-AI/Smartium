import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Exantheemziekten en zwangerschap`}</Inline></SubHeading>
      <PBody text={`Bij koorts en huiduitslag moet je ook denken aan een infectieziekte die de moeder via een kind heeft opgelopen. Sommige exantheemziekten kunnen gevolgen hebben voor de zwangerschap. Mogelijke verwekkers zijn onder andere **parvovirus B19**, **varicella zoster**, **HHV-6** en **groep-A-streptokokken**. Ook een allergische reactie kan de oorzaak zijn.`} />
      <SubHeading><Inline>{`Tabel 5. Voorbeelden van exantheemziekten`}</Inline></SubHeading>
      <DataTable rows={[["Ziekte", "Kenmerk"], ["Parvovirus B19", "Appelwangen, daarna exantheem op armen, benen en billen"], ["Varicella zoster", "Rode vlekjes, papels en blaasjes, later korstjes"], ["HHV-6", "Korte hoge koorts, daarna kleine roze/rode vlekjes"], ["Roodvonk", "Klein folliculair exantheem, vaak met keel- of oorontsteking"], ["Allergische reactie", "Niet-infectieuze huiduitslag"]]} />
    </div>
  )
}
