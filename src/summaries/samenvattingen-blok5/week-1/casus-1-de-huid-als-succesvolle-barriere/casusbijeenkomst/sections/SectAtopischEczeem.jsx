import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="h-full p-5 bg-purple-50/90 dark:bg-purple-500/10 rounded-xl border border-purple-200 dark:border-purple-500/30 space-y-2">
      <h4 className="font-bold text-purple-900 dark:text-purple-100">
        <Inline>{`Atopisch eczeem`}</Inline>
      </h4>
      <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed m-0">
        <Inline>{`Dit wordt ook genoemd als mogelijke differentiaaldiagnose in de verdiepende opdracht. De kern van de casus blijft echter de relatie tussen barrièrebeschadiging en inflammatie.`}</Inline>
      </p>
    </div>
  )
}
