import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Screening op darmkanker is zinvol omdat darmkanker vaak voorkomt, veel sterfte geeft en een belangrijk voorstadium heeft: de poliep. Door poliepen op te sporen en te verwijderen kun je darmkanker voorkomen. De belangrijkste screeningsmethode in Nederland is de **FIT**, omdat die goed wordt geaccepteerd door de bevolking. Bij een positieve FIT volgt een **coloscopie**. Mensen van **55 tot 75 jaar** worden uitgenodigd, en bij een negatieve test volgt na **2 jaar** opnieuw een FIT. Poliepen worden na verwijdering beoordeeld door de patholoog, waarna het type en het vervolgbeleid, zoals surveillancecoloscopie, worden bepaald.`} />
    </div>
  )
}
