import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De eerste luchtwegstap: Airway`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de pasgeborene gaspt of apnoe heeft, is de eerste actie het openen van de luchtweg. Dat doe je bij voorkeur door het hoofd in neutrale positie te houden. Het gezicht ligt dan evenwijdig aan de onderlaag. Een rolletje onder de schouders kan helpen om deze houding te bereiken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een tweede manier om de luchtweg te openen is de jaw-thrust. Daarbij plaats je de duimen op de orbita en de wijsvingers achter de kaakhoek. Door de wijsvingers omhoog te bewegen, breng je de onderkaak omhoog en til je de tong uit de keelholte. Zeker bij een slappe pasgeborene kan dit levensreddend zijn.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat doe je als een pasgeborene slapt is en niet ademt?
**Mini-antwoord:** Je start snel met beademingen nadat de luchtweg is geopend.`} />
    </div>
  )
}
