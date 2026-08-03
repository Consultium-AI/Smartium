import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Triggers vermijden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel verschillende prikkels kunnen een astma-aanval uitlokken. Naast inhalatieprikkels zijn er ook luchtweginfecties, temperatuurswisselingen, fysieke inspanning, hormonale veranderingen, medicatie en emoties zoals angst of stress. Het verminderen van blootstelling aan deze triggers is een belangrijk onderdeel van de behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij bekende inhalatieallergieën is het bewijs voor vermijden wisselend, maar er is beperkt bewijs dat vermijden van indoor allergenen zoals huisdieren en huisstofmijt zinvol kan zijn. Ook allergische rhinitis speelt vaak mee. De meeste patiënten met astma hebben ook rhinitis, en 10-40% van de patiënten met rhinitis heeft ook astma. Rhinitis is irritatie en inflammatie van het neusslijmvlies en kan samengaan met conjunctivitis. Goede behandeling van rhinitis met een nasale corticosteroïdspray kan ook gunstig zijn voor astmasymptomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij stabiel onvoldoende gecontroleerde allergische klachten zonder recente exacerbaties kan allergeen immunotherapie worden overwogen. Daarbij wordt het immuunsysteem minder gevoelig gemaakt voor een bepaald allergeen door langdurige toediening, meestal 3-5 jaar, via injecties of sublinguaal.`}</Inline></p>
    </div>
  )
}
