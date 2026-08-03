import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Patiënteducatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënteducatie is belangrijk omdat het helpt om de patiënt te leren wat astma is, welke klachten erbij horen en hoe de patiënt zelf klachten kan herkennen en aanpakken. Educatie vermindert het aantal exacerbaties en opnames en verbetert de kwaliteit van leven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De patiënt moet begrijpen dat astma in het algemeen goed behandelbaar is, dat het een ontstekingsziekte is met een variabel beloop en dat de aandoening vaak levenslang aanwezig blijft. De levensverwachting is bij optimale behandeling en goede controle normaal, maar is korter bij roken of COPD. Klachten kunnen worden uitgelokt door allergische prikkels, vooral huisstofmijt en huisdieren, en door niet-allergische prikkels zoals virale infecties, rook, fijnstof, inspanning en stress.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een astma-actieplan kan helpen. Daarin staan vaak een groene, gele, oranje en rode fase met bijbehorende acties voor de patiënt.`}</Inline></p>
    </div>
  )
}
