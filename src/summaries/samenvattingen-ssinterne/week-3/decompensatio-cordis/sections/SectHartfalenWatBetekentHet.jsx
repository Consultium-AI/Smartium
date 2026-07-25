import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hartfalen: wat betekent het?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een veelvoorkomend en belangrijk probleem binnen de cardiologie. Het aantal patiënten neemt toe door vergrijzing en doordat mensen vaker overleven na een myocardinfarct. Daardoor ontstaat er later ook vaker hartfalen. Hartfalen komt niet alleen in Nederland veel voor, maar wereldwijd nog veel meer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In Nederland leven ongeveer 200.000 mensen met hartfalen. Elk jaar overlijden rond de 7000 mensen aan hartfalen. De prognose is ernstig, al is de overleving in de loop van de tijd wel verbeterd. De ernst van hartfalen wordt onder andere uitgedrukt in de NYHA-klasse.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wereldwijd leven meer dan 20 miljoen mensen met hartfalen. Van alle mensen die nu in leven zijn, zal ongeveer 1 op de 5 ooit hartfalen ontwikkelen. Dat maakt duidelijk dat hartfalen veel morbiditeit en mortaliteit geeft en ook grote kosten met zich meebrengt.`}</Inline></p>
    </div>
  )
}
