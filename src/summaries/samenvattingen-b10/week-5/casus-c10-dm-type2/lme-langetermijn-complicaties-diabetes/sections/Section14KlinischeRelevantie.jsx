import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Klinische relevantie`}</Inline></h3>
      <p><Inline>{`De kern van deze stof is dat diabetes niet alleen draait om verhoogde glucosewaarden, maar om het voorkomen van schade aan ogen, nieren, zenuwen en bloedvaten. Daarom zijn vroege opsporing, regelmatige controle en het aanpakken van meerdere risicofactoren essentieel. Juist door tijdig te monitoren kan je complicaties eerder signaleren en de kans op ernstige schade verkleinen.`}</Inline></p>
    </div>
  )
}
