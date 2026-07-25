import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Deze e-module bouwt voort op de basiskennis antibiotica en voegt vier belangrijke middelen toe: **piperacilline-tazobactam, cefazoline, cefuroxim en ceftazidim**. Je moet vooral het spectrum, de generatie-indeling van cefalosporines en de klinische toepassing goed kennen. Daarnaast laat de stof zien hoe antibiotica worden gekozen bij **MRSA-profylaxe**, **community acquired pneumonia** en **hospital acquired pneumonia**.`} />
      <PBody text={`Het tweede grote thema is **antimicrobiële resistentie**. Dat is een groeiend wereldwijd probleem met grote gevolgen voor behandeling, zorgkosten en sterfte. De belangrijkste aanpak is verstandig antibioticagebruik: alleen bij bacteriële infecties, zo smal mogelijk, en niet langer dan nodig. Antibioticateams en goede richtlijnen spelen daarbij een belangrijke rol.`} />
    </div>
  )
}
