import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cardiovasculaire regulatie door het autonome zenuwstelsel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het cardiovasculaire systeem is een goed voorbeeld van hoe het autonome zenuwstelsel werkt. Het sympathische systeem beïnvloedt hart en bloedvaten via noradrenaline op adrenerge receptoren. Het parasympathische systeem beïnvloedt vooral het hart via acetylcholine op muscarine-receptoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het sympathische systeem loopt de route dus van het centrale zenuwstelsel via een preganglionaire vezel met acetylcholine op een nicotine-receptor in het ganglion, en daarna via een postganglionaire vezel met noradrenaline op adrenerge receptoren in het doelorgaan. Bij het parasympathische systeem verloopt de route ook via acetylcholine in het ganglion, maar in het eindorgaan wordt opnieuw acetylcholine gebruikt op muscarine-receptoren.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Kernverschillen tussen sympathisch en parasympathisch systeem`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Sympathisch", "Parasympathisch"], ["Activiteit", "Tijdens actie", "Tijdens rust"], ["Ganglion", "Dicht bij ruggenmerg", "Dicht bij eindorgaan"], ["Transmitter in ganglion", "ACh", "ACh"], ["Receptor in ganglion", "Nicotine", "Nicotine"], ["Transmitter in eindorgaan", "NA", "ACh"], ["Receptor in eindorgaan", "Adrenerg", "Muscarine"]]} />
    </div>
  )
}
