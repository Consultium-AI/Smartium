import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Remming van het RAAS met medicatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`RAAS-remming is een belangrijk onderdeel van de behandeling van hypertensie en hartfalen. Verschillende geneesmiddelen grijpen op verschillende plekken in de keten aan.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Geneesmiddelen en hun aangrijpingspunt in het RAAS`}</Inline></SubHeading>
      <DataTable rows={[["Geneesmiddelgroep", "Aangrijpingspunt", "Effect"], ["Renineremmers", "Remmen renine", "Minder vorming van angiotensine I en II"], ["ACE-remmers", "Remmen ACE", "Minder omzetting van angiotensine I naar angiotensine II"], ["ARB’s", "Blokkeren de angiotensine II-receptor", "Angiotensine II kan niet werken op AT1"], ["MRA’s", "Blokkeren de mineralocorticoïdreceptor", "Minder effect van aldosteron"]]} />
      <SubHeading><Inline>{`ACE-remmers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ACE-remmers remmen direct de omzetting van angiotensine I naar angiotensine II. Daardoor daalt de bloeddruk. Een bekende bijwerking is kriebelhoest. Als dat optreedt, kan een AT2-remmer worden gebruikt als alternatief.`}</Inline></p>
      <SubHeading><Inline>{`ARB’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ARB’s verlagen de bloeddruk door de angiotensine II-receptor te blokkeren. Ze remmen dus niet de aanmaak van angiotensine II, maar voorkomen dat angiotensine II zijn werking kan uitoefenen.`}</Inline></p>
      <SubHeading><Inline>{`Renineremmers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Renineremming leidt tot minder activatie van het RAAS. Een belangrijk gevolg is een verlaagde aldosteronproductie.`}</Inline></p>
      <SubHeading><Inline>{`MRA’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mineralocorticoïdreceptor-antagonisten blokkeren de receptor voor aldosteron. Daardoor wordt het natriumretinerende effect van aldosteron tegengegaan.`}</Inline></p>
    </div>
  )
}
