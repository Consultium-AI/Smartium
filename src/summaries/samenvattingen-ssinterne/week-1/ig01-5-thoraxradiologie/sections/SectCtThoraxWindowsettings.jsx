import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CT-thorax: windowsettings`}</Inline></SubHeading>
      <PBody text={`Een CT-thorax gebruikt, net als een thoraxfoto, röntgenstralen. Het beeld bestaat uit verschillende grijswaarden, uitgedrukt in **Hounsfield Units (HU)**. Er zijn echter te veel grijstinten om alles tegelijk goed te kunnen beoordelen. Daarom gebruik je **windowsettings**: je kiest welk deel van de grijswaarden je zichtbaar maakt.`} />
      <p className="leading-relaxed"><Inline>{`Er zijn drie belangrijke instellingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Wekedelenswindow**`}</Inline></li>
        <li><Inline>{`**Longwindow**`}</Inline></li>
        <li><Inline>{`**Botwindow**`}</Inline></li>
      </ul>
      <PBody text={`Bij een **wekedelenswindow** zie je de verschillende weke delen goed van elkaar onderscheiden, zoals bloedvaten, spieren en vet. De longen worden dan bijna volledig zwart en het bot bijna volledig wit.`} />
      <PBody text={`Bij een **longwindow** kun je details in het longparenchym goed zien. De weke delen en botten zijn dan minder goed te beoordelen.`} />
      <PBody text={`Bij een **botwindow** worden botstructuren optimaal zichtbaar. De weke delen en longen verliezen dan detail.`} />
      <SubHeading><Inline>{`Tabel 3. Verschil tussen de belangrijkste CT-windowsettings`}</Inline></SubHeading>
      <DataTable rows={[["Windowsetting", "Goed zichtbaar", "Minder goed zichtbaar"], ["Wekedelenswindow", "Vaten, spieren, vet, organen", "Longen en bot"], ["Longwindow", "Longparenchym", "Weke delen en bot"], ["Botwindow", "Botstructuren", "Weke delen en longen"]]} />
    </div>
  )
}
