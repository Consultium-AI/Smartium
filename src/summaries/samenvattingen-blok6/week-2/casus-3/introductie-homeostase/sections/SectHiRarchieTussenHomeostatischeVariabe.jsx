import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hiërarchie tussen homeostatische variabelen`}</Inline></SubHeading>
      <PBody text={`Tussen homeostatische variabelen bestaat een **hiërarchie**. Dat betekent dat het in stand houden van de ene variabele soms belangrijker is dan het in stand houden van een andere.`} />
      <p className="leading-relaxed"><Inline>{`Een belangrijk voorbeeld is de relatie tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bloed pH**`}</Inline></li>
        <li><Inline>{`**PaCO2**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beide worden beïnvloed door de ademhalingsspieren. Als metabole stoornissen de bloed pH verstoren, zal het lichaam de ademhaling aanpassen om de pH weer te herstellen. Daardoor kan de PaCO2 wel buiten de normale waarde komen te liggen.`}</Inline></p>
      <PBody text={`Dat betekent dat **bloed pH hoger in de hiërarchie staat dan PaCO2**. Het lichaam geeft dus voorrang aan het herstellen van de pH, ook als de PaCO2 daardoor minder goed binnen de normale grenzen blijft.`} />
    </div>
  )
}
