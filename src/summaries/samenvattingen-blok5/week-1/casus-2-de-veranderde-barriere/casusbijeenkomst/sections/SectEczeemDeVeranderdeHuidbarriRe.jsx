import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`Een tweede belangrijk thema is eczeem. Hier staat de **huidbarrière** centraal. Bij eczeem is die barrière beschadigd, waardoor er meer transepidermaal waterverlies is. De huid wordt droger, gevoeliger en vatbaarder voor ontsteking en infectie.`}</Inline></p>
    </div>
  )
}
