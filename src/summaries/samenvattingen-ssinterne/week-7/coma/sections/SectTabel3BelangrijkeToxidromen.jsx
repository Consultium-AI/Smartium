import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Belangrijke toxidromen`}</Inline></SubHeading>
      <DataTable rows={[["Toxidroom", "Kenmerken", "Kans op coma"], ["Anticholinerg", "droge slijmvliezen, mydriase, verwardheid", "minder typisch"], ["Cholinerg", "speekselvloed, zweten, miosis, bronchussecretie", "minder typisch"], ["Sympathicomimetisch", "agitatie, tachycardie, mydriase, zweten", "minder typisch"], ["Serotonerg", "onrust, autonome ontregeling, neuromusculaire verschijnselen", "ja"], ["Sedatief", "sufheid, ademhalingsdepressie, bewustzijnsdaling", "ja"]]} />
      <PBody text={`Bij een onbegrepen klinisch beeld moet je laagdrempelig een toxscreen verrichten. Let erop dat sommige middelen, zoals **GHB**, na enkele uren niet meer aantoonbaar zijn in de urine. Als je andere alcoholen naast ethanol wilt uitsluiten, kun je de **osmol gap** en eventueel de **anion gap** berekenen.`} />
    </div>
  )
}
