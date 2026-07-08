import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Urine-incontinentie en prolaps zijn veelvoorkomende klachten bij vrouwen. Bij urineverlies is het belangrijk om de vorm van incontinentie goed te herkennen. Stress urine-incontinentie past bij urineverlies bij drukverhoging en kan samenhangen met hypermobiliteit van de urethra of intrinsieke sfincterdeficiëntie. De diagnostiek bestaat uit gerichte anamnese, gynaecologisch onderzoek, een mictiedagboek en urineonderzoek. Bekkenfysiotherapie is een behandeling die zowel bij stress- als urge-incontinentie kan worden ingezet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een prolaps is het uitzakken van organen in het kleine bekken door de hiatus genitalis. Dit is hinderlijk, maar niet schadelijk. Klachten kunnen bestaan uit een zwaar gevoel, mictieproblemen, obstipatie en problemen bij het vrijen. Risicofactoren zijn onder andere bevallingen, familieanamnese, overgewicht, roken en zwaar werk. De beoordeling gebeurt met gynaecologisch onderzoek, vaak met een éénbladig speculum en in Valsalva, en de ernst wordt vastgelegd met het POP-Q-systeem. Behandeling kan conservatief met fysiotherapie en een pessarium, of chirurgisch met lichaamseigen materiaal of mesh.`}</Inline></p>
    </div>
  )
}
