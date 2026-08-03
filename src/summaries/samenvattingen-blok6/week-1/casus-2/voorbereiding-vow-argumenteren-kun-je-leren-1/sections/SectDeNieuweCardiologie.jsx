import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De nieuwe cardiologie`}</Inline></SubHeading>
      <PBody text={`Mackenzies werk werd zeer invloedrijk en vormde de basis voor de **nieuwe cardiologie**. Deze nieuwe cardiologie past goed bij de **laboratory medicine**. De nadruk verschoof van diagnose naar **prognose** en van anatomische laesies naar functionele capaciteit.`} />
      <PBody text={`Artsen gingen fysiologische testen gebruiken, zoals onderzoek naar bufferzouten, de werking van stoffen als atropine en adrenaline, urineonderzoek en grafische methoden zoals het **ECG**. Tegenstanders bleven vasthouden aan hartruis als teken van klepafwijking. Uit dezelfde waarneming trokken beide groepen dus verschillende conclusies, afhankelijk van hun denkkader.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
