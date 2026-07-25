import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gezondheidsrisico’s op het werk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Werk heeft niet alleen een economische betekenis, maar ook invloed op gezondheid, identiteit en welzijn. Werk kan gezondheid bevorderen, maar ook schade geven. Denk aan blootstelling aan asbest, lawaai, micro-organismen, fysieke overbelasting of chronische stress.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De relatie tussen werk en gezondheid loopt twee kanten op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`werk beïnvloedt de gezondheid;`}</Inline></li>
        <li><Inline>{`gezondheid beïnvloedt het functioneren op het werk.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom is duurzame inzetbaarheid belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`De 4 A’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Werkfactoren worden vaak ingedeeld in de 4 A’s:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`arbeidsinhoud;`}</Inline></li>
        <li><Inline>{`arbeidsomstandigheden;`}</Inline></li>
        <li><Inline>{`arbeidsvoorwaarden;`}</Inline></li>
        <li><Inline>{`arbeidsverhoudingen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de arbeidsinhoud gaat het bijvoorbeeld om fysieke, energetische en mentale belasting. Bij arbeidsomstandigheden gaat het om chemische, biologische en fysische factoren. Persoonlijke factoren spelen ook mee, zoals persoonlijkheid, persoonlijke werkwijze en privé-omstandigheden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Voorbeelden van belastende factoren`}</Inline></SubHeading>
      <DataTable rows={[["Categorie", "Voorbeelden"], ["Arbeidsinhoud", "stress, lang staan, zware lasten, repeterende handelingen, gevaarlijke situaties"], ["Arbeidsomstandigheden", "lawaai, fijnstof, micro-organismen, straling, hitte, koude, trillingen"], ["Persoonlijke factoren", "perfectionisme, coping, werkhouding, pauzes, privéstress, zwangerschap, ziekte"]]} />
    </div>
  )
}
