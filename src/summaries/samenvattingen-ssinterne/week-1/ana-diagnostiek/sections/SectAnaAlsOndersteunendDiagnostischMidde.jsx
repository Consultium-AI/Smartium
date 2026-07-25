import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ANA als ondersteunend diagnostisch middel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ANA-bepaling is ondersteunend in de diagnose van systeemziekten, maar bevestigt op zichzelf geen diagnose. Een positieve ANA betekent dus niet automatisch dat iemand een systeemziekte heeft. Ook hoort ANA niet standaard aangevraagd te worden bij elke mogelijke klacht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De waarde van de test hangt sterk af van de klinische context. Hoe hoger de verdenking vooraf, hoe groter de kans dat een positieve test ook echt betekenis heeft.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Invloed van de pretestkans op de posttestkans`}</Inline></SubHeading>
      <DataTable rows={[["Klinische situatie", "Pretestkans", "Posttestkans bij positieve ANA"], ["Jonge vrouw met haaruitval en polyartralgieën", "1%", "6%"], ["Jonge vrouw met fotosensitiviteit, malar rash en symmetrische polyartritis", "50%", "87%"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een lage verdenking blijft de kans op ziekte ook na een positieve test laag. Bij een hoge verdenking wordt een positieve ANA juist veel betekenisvoller.`}</Inline></p>
    </div>
  )
}
