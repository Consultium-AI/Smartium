import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Infecties en genetische afwijkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale infectie verklaart ongeveer 5% van de FGR-gevallen. De belangrijkste infecties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CMV;`}</Inline></li>
        <li><Inline>{`toxoplasmose;`}</Inline></li>
        <li><Inline>{`syfilis;`}</Inline></li>
        <li><Inline>{`malaria.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Serologisch onderzoek op malaria en syfilis is alleen nodig in risicogroepen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CMV is de belangrijkste infectie om aan te denken. Bij primaire CMV-infectie in de zwangerschap is ongeveer 10% van de kinderen symptomatisch bij geboorte. Daarbij kunnen onder andere microcefalie, petechiën, icterus en hepato-splenomegalie voorkomen. Bij ongeveer de helft is ook sprake van verminderde groei.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij vroege groeirestrictie is ook de kans op chromosomale afwijkingen verhoogd. Die kans is het grootst als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`FGR al voor de 23e week wordt gevonden;`}</Inline></li>
        <li><Inline>{`er structurele afwijkingen zijn;`}</Inline></li>
        <li><Inline>{`de Doppler van de arteria uterina normaal is in combinatie met afwijkingen.`}</Inline></li>
      </ul>
    </div>
  )
}
