import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemodialyse en hemofiltratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dialyse is een manier om afvalstoffen en vocht uit het bloed te verwijderen wanneer de nieren dat niet meer goed kunnen. Bij hemodialyse wordt het bloed buiten het lichaam door een filter geleid en daarna teruggegeven aan de patiënt.`}</Inline></p>
      <SubHeading><Inline>{`Hoe werkt hemodialyse?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het filter bestaat uit een semi-permeabel membraan. Aan de ene kant stroomt bloed, aan de andere kant dialysaat: een steriele vloeistof met vaste concentraties elektrolyten. Kleine afvalstoffen kunnen door concentratieverschillen van het bloed naar het dialysaat bewegen. Dat heet diffusie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vocht wordt verwijderd door een drukverschil tussen bloed en dialysaat. Door de druk aan de dialysaatkant lager te maken, wordt vocht uit het bloed getrokken: ultrafiltratie. Deeltjes die met dat vocht meekomen, worden via convectie meegenomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door bloed en dialysaat in tegengestelde richting te laten stromen blijft het concentratieverschil groot. Dat heet het tegenstroomprincipe.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is een shunt nodig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor hemodialyse is een hoge bloedflow nodig, meestal rond 300 ml/min. Daarvoor is een speciale toegang tot de bloedbaan nodig: een dialyseshunt. Bij voorkeur wordt een verbinding gemaakt tussen een arterie en een vene van de patiënt zelf. De vene zwelt op en wordt beter aanprikbaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een shunt wordt meestal in de onderarm of bovenarm aangelegd. Het duurt ongeveer 6–8 weken voordat de vene voldoende gerijpt is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de eigen vaten niet geschikt zijn, kan een kunststof dialyseshunt worden gebruikt.`}</Inline></p>
      <SubHeading><Inline>{`Wat als er spoed is?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er geen tijd is om een shunt aan te leggen, wordt dialyse uitgevoerd via een centraal veneuze katheter, bij voorkeur in de vena jugularis. Vaak wordt een dubbel lumen katheter gebruikt voor continue bloedstroom. Als de katheter langer nodig is, kan hij getunneld worden onder de huid.`}</Inline></p>
      <SubHeading><Inline>{`Complicatie van een shunt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijke complicatie is het steal-syndroom. Daarbij gaat zoveel bloed via de shunt dat de hand distaal van de shunt te weinig bloed krijgt. De hand kan dan ischemisch worden, met pijn, bleekheid en zwakke pulsaties. Soms kan dit verholpen worden door de shunt nauwer te maken.`}</Inline></p>
    </div>
  )
}
