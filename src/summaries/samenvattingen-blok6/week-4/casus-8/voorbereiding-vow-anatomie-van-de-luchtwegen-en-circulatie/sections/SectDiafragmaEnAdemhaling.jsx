import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diafragma en ademhaling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aan de onderzijde wordt de thorax afgesloten door het diafragma. Dit vormt de scheiding tussen borstholte en buikholte en speelt een grote rol bij de ademhaling. Twee derde van de luchtverplaatsing bij inademing komt voor rekening van het diafragma. Dat wordt ook wel buikademhaling genoemd. Het overige derde deel komt voor rekening van de thorax, waarbij de intercostale spieren een rol spelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het diafragma heeft de vorm van een koepel. Het bestaat uit een centraal pezig deel, het centrum tendineum, en spierdelen aan de randen, de pars muscularis. Daarnaast heeft het diafragma drie belangrijke doorgangen: de hiatus aorticus, de hiatus oesophageus en het foramen venae cavae. Het diafragma ontspringt van de achterzijde van de processus xiphoideus, de binnenzijde van de onderste zes ribben, de wervellichamen L1 en L2, en de ligamenta arcuata mediale en laterale.`}</Inline></p>
    </div>
  )
}
