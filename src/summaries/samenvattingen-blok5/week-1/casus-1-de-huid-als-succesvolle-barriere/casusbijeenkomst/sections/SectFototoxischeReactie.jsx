import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="h-full p-5 bg-amber-50/90 dark:bg-amber-500/10 rounded-xl border border-amber-200 dark:border-amber-500/30 space-y-2">
      <h4 className="font-bold text-amber-900 dark:text-amber-100">
        <Inline>{`Fototoxische reactie`}</Inline>
      </h4>
      <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed m-0">
        <Inline>{`Ook dit staat in de differentiaaldiagnose van de verdiepende opdracht. De casus legt vooral de nadruk op contacteczeem en barrièreproblematiek.`}</Inline>
      </p>
    </div>
  )
}
