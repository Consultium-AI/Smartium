import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van hemofilie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op hemofilie vraag je onder andere aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`aPTT;`}</Inline></li>
        <li><Inline>{`factor VIII;`}</Inline></li>
        <li><Inline>{`factor IX;`}</Inline></li>
        <li><Inline>{`Von Willebrand-factor.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De aPTT is vaak verlengd bij een tekort aan factor VIII of IX. De Von Willebrand-factor wordt vaak tegelijk bepaald, omdat een laag factor VIII ook kan passen bij de ziekte van Von Willebrand. VWF is namelijk het drager-eiwit van factor VIII. Bij een tekort aan VWF is de halfwaardetijd van factor VIII verlaagd. Ook bij type 2N Von Willebrand kan factor VIII verlaagd zijn doordat binding aan VWF niet goed lukt.`}</Inline></p>
    </div>
  )
}
