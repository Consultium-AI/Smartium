import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CT-thorax: basis van beeldvorming`}</Inline></SubHeading>
      <PBody text={`Een CT-thorax maakt, net als een thoraxfoto, gebruik van röntgenstralen. Het verschil is dat een CT veel meer informatie geeft over de verschillende weefsels in de borstkas. Die informatie wordt uitgedrukt in grijswaarden, en die grijswaarden worden weergegeven in **Hounsfield Units (HU)**. Omdat er heel veel verschillende HU-waarden zijn, kun je niet alles tegelijk even goed bekijken. Daarom kies je een bepaalde **windowsetting**: je selecteert als het ware welk deel van de grijswaarden je wilt zien.`} />
      <PBody text={`Dat is belangrijk, omdat je met een andere instelling andere structuren beter zichtbaar maakt. Wil je bot goed beoordelen, dan kies je een **botwindow**. Wil je juist de longen bekijken, dan gebruik je een **longwindow**. En wil je de weke delen goed onderscheiden, dan gebruik je een **wekedelensetting**.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijkste windowsettings op CT-thorax`}</Inline></SubHeading>
      <DataTable rows={[["Windowsetting", "Waarvoor gebruik je het?", "Wat zie je goed?"], ["Wekedelensetting", "Beoordeling van weke delen", "Bloedvaten, spieren, vet"], ["Longsetting", "Beoordeling van de longen", "Longparenchym en details in de longen"], ["Botsetting", "Beoordeling van bot", "Botstructuren en contrastverschillen in bot"]]} />
      <PBody text={`Bij een **wekedelensetting** zie je de verschillende weke delen goed van elkaar onderscheiden. De longen worden dan bijna helemaal zwart en in het bot zie je weinig detail. Bij een **longsetting** zie je juist details in het longweefsel, terwijl de weke delen en het bot minder goed zichtbaar zijn. Bij een **botsetting** kun je de botten gedetailleerd beoordelen, maar in de longen zie je nauwelijks detail.`} />
      <PBody text={`**Aandachtsvraag:** waarom gebruik je niet gewoon één instelling voor alles?
**Kort antwoord:** omdat verschillende structuren verschillende grijswaarden hebben en je met één instelling nooit alles tegelijk optimaal ziet.`} />
    </div>
  )
}
