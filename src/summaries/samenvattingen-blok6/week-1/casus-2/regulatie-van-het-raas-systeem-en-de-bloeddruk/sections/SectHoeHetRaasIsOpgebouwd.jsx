import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe het RAAS is opgebouwd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het RAAS bestaat uit een keten van stoffen en enzymen die elkaar activeren. De lever maakt angiotensinogeen. In de nier wordt prorenine omgezet in renine. Renine zet angiotensinogeen om in angiotensine I. Daarna zet ACE, het angiotensine-converting enzyme, angiotensine I om in angiotensine II.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Angiotensine II is de belangrijkste actieve stof van het systeem. Het werkt via de AT1-receptor en zorgt voor meerdere effecten die allemaal bijdragen aan bloeddrukstijging en volumebehoud.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke onderdelen van het RAAS`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Functie"], ["Lever", "Maakt angiotensinogeen"], ["Nier", "Maakt prorenine en renine"], ["Renine", "Zet angiotensinogeen om in angiotensine I"], ["ACE", "Zet angiotensine I om in angiotensine II"], ["Angiotensine II", "Belangrijkste actieve hormoon van het RAAS"], ["AT1-receptor", "Receptor waardoor angiotensine II zijn effecten uitoefent"], ["Aldosteron", "Zorgt voor natriumretentie en kaliumexcretie"]]} />
    </div>
  )
}
