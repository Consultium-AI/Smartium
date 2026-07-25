import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Basiskennis antibiotica: uitbreiding van de lijst`}</Inline></SubHeading>
      <PBody text={`In deze stof wordt de basiskennis over antibiotica verder uitgebreid. De 21 antibiotica uit de exemplarishe geneesmiddelenlijst worden als bekend verondersteld, en daar komen vier belangrijke middelen bij. Samen moet je dus de kennis van **25 antibiotica** kunnen toepassen.`} />
      <PBody text={`Bij elk antibioticum gaat het steeds om dezelfde kernvragen: **waarvoor gebruik je het, hoe geef je het, wat zijn de belangrijkste bijwerkingen, welk spectrum heeft het en wat is er bijzonder aan?** Dat maakt het leren overzichtelijker. Het helpt om de middelen niet los te stampen, maar steeds te koppelen aan bacteriegroepen en klinische situaties.`} />
      <SubHeading><Inline>{`Tabel 1. De vier extra antibiotica die je moet kennen`}</Inline></SubHeading>
      <DataTable rows={[["Antibioticum", "Belangrijk punt"], ["Piperacilline-tazobactam", "Zeer breed spectrum"], ["Cefazoline", "1e generatie cefalosporine"], ["Cefuroxim", "2e generatie cefalosporine"], ["Ceftazidim", "3e generatie cefalosporine, met werking tegen Pseudomonas"]]} />
    </div>
  )
}
