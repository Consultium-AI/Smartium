import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zorg op afstand: wat bedoelen we ermee?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zorg op afstand is een overkoepelende term voor digitale zorg waarbij contact, metingen of begeleiding niet altijd fysiek in het ziekenhuis hoeven plaats te vinden. Het gaat dus om thuismeten, thuismonitoring en andere vormen van digitale zorg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De aanleiding voor deze ontwikkeling is duidelijk: de zorg krijgt te maken met meer patiënten en met personeelstekorten. Tegelijkertijd zijn we in het dagelijks leven al gewend geraakt aan digitale oplossingen. Dan ligt het voor de hand om ook medische zorg slimmer en meer op afstand te organiseren.`}</Inline></p>
    </div>
  )
}
