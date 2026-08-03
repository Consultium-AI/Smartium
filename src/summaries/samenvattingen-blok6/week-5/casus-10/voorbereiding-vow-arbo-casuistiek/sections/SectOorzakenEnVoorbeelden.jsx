import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken en voorbeelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsziekten kunnen ontstaan door verschillende factoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`straling;`}</Inline></li>
        <li><Inline>{`infectieziekten;`}</Inline></li>
        <li><Inline>{`vluchtige stoffen;`}</Inline></li>
        <li><Inline>{`allergenen;`}</Inline></li>
        <li><Inline>{`lawaai;`}</Inline></li>
        <li><Inline>{`traumatische ervaringen;`}</Inline></li>
        <li><Inline>{`snelle repeterende handelingen;`}</Inline></li>
        <li><Inline>{`statische belasting;`}</Inline></li>
        <li><Inline>{`verplaatsen van zware objecten;`}</Inline></li>
        <li><Inline>{`hoge werkdruk;`}</Inline></li>
        <li><Inline>{`grote verantwoordelijkheid.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vaak is het een combinatie van werkfactoren en persoonlijke factoren. Een kapper met atopie kan bijvoorbeeld kapperseczeem ontwikkelen. Een proefdierwerker kan proefdierallergie krijgen. Ook psychische belasting speelt vaak mee, bijvoorbeeld bij iemand met een perfectionistisch karakter en veel privéproblemen, die op het werk extra onder druk komt te staan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Veelvoorkomende beroepsziekten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`surmenage of aanpassingsstoornis;`}</Inline></li>
        <li><Inline>{`burn-out;`}</Inline></li>
        <li><Inline>{`depressie;`}</Inline></li>
        <li><Inline>{`lawaaislechthorendheid;`}</Inline></li>
        <li><Inline>{`PTSS;`}</Inline></li>
        <li><Inline>{`mesothelioom.`}</Inline></li>
      </ul>
    </div>
  )
}
