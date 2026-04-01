export default function Sect08EigenschappenVanTopicaalGeneesmiddel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Eigenschappen van topicaal geneesmiddel</h2>
      <p>Voor een goede opname via de huid zijn bepaalde eigenschappen wenselijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>{'een lage moleculaire massa, bij voorkeur < 500 Dalton;'}</li>
        <li>een gunstige balans tussen hydrofiele en lipofiele eigenschappen;</li>
        <li>een geschikte vehicle of drager.</li>
      </ul>
      <p>
        Stoffen met een moleculaire massa boven 500 Dalton hebben meestal een alternatieve toedieningsvorm nodig, zoals
        injecties.
      </p>
      <p>Twee voorbeelden uit de stof:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Ciclosporine: is met 1202 Dalton te groot voor goede topicaal gebruik. Het is daardoor ongeschikt voor topische
          therapie en wordt vooral oraal gebruikt, bijvoorbeeld bij psoriasis. Mogelijk kan het lokaal nog enig effect
          hebben bij aandoeningen zoals lichen, maar de opname blijft zeer beperkt.
        </li>
        <li>
          Methotrexaat: wordt wel enigszins via de huid opgenomen, maar niet voldoende voor therapeutische werking.
          Daarom wordt het in de praktijk vrijwel uitsluitend systemisch gebruikt, bijvoorbeeld bij psoriasis.
        </li>
      </ul>
      <p>
        Een belangrijk idee hierbij is de 500 Dalton rule: voor goede opname via de huid zijn kleine moleculen veel
        geschikter.
      </p>
    </div>
  )
}
