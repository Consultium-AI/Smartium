import { Inline, TipBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Belangrijke denkstap</h4>
      <TipBox>
        <p className="m-0">
          <Inline>{`De vraag is niet alleen: “Welke huidafwijking zie ik?”, maar vooral: “Welke blootstelling beschadigt de huidbarrière?”`}</Inline>
        </p>
      </TipBox>
    </div>
  )
}
