import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bevestiging van de diagnose en de betekenis van de uitslagen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zuigeling met koorts en braken kan de urinestick al veel duidelijk maken. Een positieve stick met leukocyten en nitriet past sterk bij een urineweginfectie. Als daarnaast het CRP verhoogd is en er sprake is van leukocytose, ondersteunt dat een infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wanneer de koorts hoog is en het CRP duidelijk verhoogd, denk je aan een hogere urineweginfectie, oftewel pyelonefritis.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Voorbeelden van laboratoriumbevindingen bij een hogere UWI`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Betekenis"], ["Leukocyten en nitriet positief in urine", "Past bij urineweginfectie"], ["Verhoogd CRP", "Past bij infectie"], ["Leukocytose", "Past bij infectie"], ["Hoge koorts", "Past bij hogere UWI / pyelonefritis"]]} />
    </div>
  )
}
