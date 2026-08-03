import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Integratie van natrium, kalium en zuur-base`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De homeostase van water, natrium, kalium en zuur-base is essentieel voor het goed functioneren van het lichaam. Deze processen staan niet los van elkaar, maar beïnvloeden elkaar voortdurend. Vooral de nieren, de hormonen ADH en aldosteron, en de ademhaling spelen hierin een grote rol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk uitgangspunt is dat veranderingen in de zuur-basebalans gevolgen kunnen hebben voor de kaliumbalans. Bij acidose kan kalium bijvoorbeeld uit de cellen naar het bloed verschuiven, waardoor hyperkaliëmie ontstaat. Omgekeerd kan ook een verstoring van de kaliumbalans samenhangen met veranderingen in de zuur-basehuishouding.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De drie casussen in deze stof laten juist die samenhang zien. Het gaat steeds om patiënten bij wie meerdere verstoringen tegelijk optreden. Daardoor leer je niet alleen losse afwijkingen herkennen, maar vooral ook hoe je verbanden legt tussen waterhuishouding, elektrolyten en zuur-base.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke regelkringen in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Regelkring", "Belangrijkste rol", "Effect bij verstoring"], ["ADH", "Houdt water vast", "Verandert serumosmolaliteit en natriumconcentratie"], ["RAAS/aldosteron", "Bevordert natriumretentie en kaliumuitscheiding", "Beïnvloedt volume, kalium en zuur-base"], ["Nieren", "Uitscheiding en terugresorptie van water, zouten en zuren", "Centrale plaats voor veel elektrolytstoornissen"], ["Ademhaling", "Regelt CO2 en dus de zuur-basebalans", "Kan acidose of alkalose beïnvloeden"]]} />
    </div>
  )
}
