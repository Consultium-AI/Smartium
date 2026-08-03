import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verzuimbegeleiding bij Karel`}</Inline></SubHeading>
      <PBody text={`De bedrijfsarts kijkt bij Karel niet alleen naar de medische klachten, maar ook naar de bredere context. Daarbij worden de **4 A’s** en **3 P’s** gebruikt.`} />
      <SubHeading><Inline>{`De 4 A’s`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Arbeidsinhoud**: de fysieke, energetische en mentale belasting van het werk.`}</Inline></li>
        <li><Inline>{`**Arbeidsomstandigheden**: chemische, biologische en fysische factoren.`}</Inline></li>
        <li><Inline>{`**Arbeidsvoorwaarden**: werktijden, vrije dagen, beloning, ploegendiensten en doorgroeimogelijkheden.`}</Inline></li>
        <li><Inline>{`**Arbeidsverhoudingen**: collega’s, leidinggevenden, organisatiestructuur en organisatiecultuur.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`De 3 P’s`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Persoonlijkheid**: bijvoorbeeld plichtsgetrouwheid, perfectionisme, mentale draagkracht en coping.`}</Inline></li>
        <li><Inline>{`**Persoonlijke werkwijze**: voorbereiding, structuur, houding, werkduur, pauzes en krachtgebruik.`}</Inline></li>
        <li><Inline>{`**Privé-omstandigheden**: spanningen, ontspanning, sport en hobby’s, medicijngebruik en zwangerschap.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij Karel spelen meerdere factoren mee: hij piekert veel, slaapt slecht, maakt zich zorgen over zijn moeder, mist zijn tennismaatjes, is onzeker over zijn toekomst en ervaart druk van collega’s en werkgever. Ook zijn rol als mantelzorger en de beperkte actieradius door vermoeidheid zijn belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. 4 A’s en 3 P’s bij Karel`}</Inline></SubHeading>
      <DataTable rows={[["Domein", "Relevante factoren"], ["Arbeidsinhoud", "Fysieke, energetische en mentale belasting van verpleegkundig werk"], ["Arbeidsverhoudingen", "Relatie met werkgever en collega’s"], ["Persoonlijkheid", "Piekeren, angst, onzekerheid"], ["Privé-omstandigheden", "Mantelzorg, minder sociale en sportieve activiteiten"]]} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom kijkt de bedrijfsarts zo breed?**
Omdat verzuim bijna altijd meerdere oorzaken heeft: klachten, werkbelasting, privébelasting en persoonlijke factoren beïnvloeden elkaar.`} />
    </div>
  )
}
