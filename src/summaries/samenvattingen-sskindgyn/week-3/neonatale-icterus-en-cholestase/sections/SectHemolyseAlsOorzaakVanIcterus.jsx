import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemolyse als oorzaak van icterus`}</Inline></SubHeading>
      <PBody text={`Bij een pasgeborene met icterus en anemie moet je altijd aan **hemolyse** denken. In de casus was het hemoglobine duidelijk verlaagd en de reticulocyten waren sterk verhoogd. Dat betekent dat het beenmerg extra hard probeert rode bloedcellen aan te maken.`} />
      <PBody text={`Reticulocyten zijn jonge rode bloedcellen. Een hoge reticulocytenwaarde wijst dus op **verhoogde aanmaak**, vaak als reactie op afbraak van rode bloedcellen.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke onderzoeken bij verdenking op hemolyse zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**reticulocyten**`}</Inline></li>
        <li><Inline>{`**bilirubine**`}</Inline></li>
        <li><Inline>{`**bloedgroep van moeder en kind**`}</Inline></li>
        <li><Inline>{`**directe Coombsreactie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Trombocyten en leverfuncties zijn in deze fase niet altijd direct essentieel als je vooral hemolyse wilt aantonen.`}</Inline></p>
    </div>
  )
}
