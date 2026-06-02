import { Inline, TipBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De kern van de bijeenkomst is daarom steeds dezelfde klinische vraag:`}</Inline>
      </p>
      <TipBox>
        <p className="m-0 font-semibold">
          <Inline>{`wat zie je op de huid, wat past daarbij in de anamnese en het lichamelijk onderzoek, en welke diagnose volgt daar logisch uit?`}</Inline>
        </p>
      </TipBox>
    </div>
  )
}
