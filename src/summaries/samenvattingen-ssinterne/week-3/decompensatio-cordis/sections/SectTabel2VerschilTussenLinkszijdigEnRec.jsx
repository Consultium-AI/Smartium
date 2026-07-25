import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Verschil tussen linkszijdig en rechtszijdig hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Linkszijdig hartfalen", "Rechtszijdig hartfalen"], ["hoesten, vooral ’s nachts", "gewichtstoename"], ["verminderde urineproductie", "nycturie"], ["kortademigheid", "misselijkheid of verminderde eetlust"]]} />
      <p className="leading-relaxed"><Inline>{`Bij linkszijdig hartfalen staan vooral klachten van stuwing in de longen op de voorgrond. Bij rechtszijdig hartfalen zie je vaker klachten die passen bij stuwing in de rest van het lichaam, zoals vocht vasthouden en buikklachten.`}</Inline></p>
    </div>
  )
}
