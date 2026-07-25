import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Dyslipidemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dyslipidemie is een belangrijke risicofactor voor atherosclerotisch vaatlijden, vooral voor coronair lijden. Het lipidenprofiel kan beïnvloed worden door obesitas, diabetes mellitus, hypothyreoïdie, nefrotisch syndroom, alcohol, steroïden en antipsychotica. Er bestaan ook erfelijke vormen, waarvan familiaire hypercholesterolemie de bekendste is.`}</Inline></p>
      <SubHeading><Inline>{`Cholesterol en triglyceriden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cholesterol is belangrijk voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`celmembraansynthese;`}</Inline></li>
        <li><Inline>{`regulatie van de celhomeostase;`}</Inline></li>
        <li><Inline>{`vorming van galzouten, vitamine D en steroïdhormonen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Triglyceriden zijn vooral een energiebron en worden opgeslagen als vet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Cholesterol en triglyceriden worden vervoerd in lipoproteïnen, omdat ze niet goed oplosbaar zijn in water. De belangrijkste lipoproteïnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chylomicronen;`}</Inline></li>
        <li><Inline>{`VLDL;`}</Inline></li>
        <li><Inline>{`IDL;`}</Inline></li>
        <li><Inline>{`LDL;`}</Inline></li>
        <li><Inline>{`HDL.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Chylomicronen zijn het grootst en HDL is het kleinst.`}</Inline></p>
      <SubHeading><Inline>{`Lipoproteïnen en atherosclerose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`LDL is het belangrijkste deeltje dat betrokken is bij atherosclerose. Het kan gemakkelijk in de vaatwand doordringen en daar cholesterol afzetten. HDL werkt juist beschermend, omdat het cholesterol uit de vaatwand kan terughalen: reverse cholesterol transport.`}</Inline></p>
      <SubHeading><Inline>{`Leefstijl en medicatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Leefstijl blijft altijd de eerste stap:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voldoende beweging;`}</Inline></li>
        <li><Inline>{`niet te veel calorieën;`}</Inline></li>
        <li><Inline>{`niet te veel verzadigde vetten;`}</Inline></li>
        <li><Inline>{`niet roken;`}</Inline></li>
        <li><Inline>{`matig alcohol;`}</Inline></li>
        <li><Inline>{`minder stress.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De eerste keus medicamenteuze behandeling om LDL te verlagen is een statine, bijvoorbeeld atorvastatine. Statines zijn de meest potente cholesterolverlagers en hebben ook bewezen effect op cardiovasculaire risicoreductie.`}</Inline></p>
    </div>
  )
}
