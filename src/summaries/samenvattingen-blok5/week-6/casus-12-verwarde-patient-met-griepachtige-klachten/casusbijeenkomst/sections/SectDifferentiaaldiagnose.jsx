import { Inline, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij klachten binnenshuis denk je in deze casus vooral aan:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Mogelijke oorzaak', 'Passende kenmerken'],
          ['---', '---'],
          [
            'Koolmonoxidevergiftiging',
            'hoofdpijn, vermoeidheid, griepachtige klachten, verwardheid, meerdere huisgenoten met klachten, bron van verbranding in huis',
          ],
          [
            'Vocht en schimmel',
            'hoesten, niezen, snotteren, verergering van astma, zichtbare schimmel of vochtproblemen',
          ],
          [
            'Inhalatietrauma',
            'tekenen van rookinhalatie of brandwond aan gezicht/ademweg, heesheid, stridor, benauwdheid',
          ],
          [
            'Andere oorzaken',
            'klachten kunnen ook psychisch of algemeen lichamelijk zijn, maar de woning moet eerst goed worden nagegaan',
          ],
        ]}
      />
    </div>
  )
}
