import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stadium van darmkanker en overleving`}</Inline></SubHeading>
      <PBody text={`De **5-jaars overleving** van darmkanker hangt sterk af van het stadium waarin de kanker wordt ontdekt. Hoe vroeger het stadium, hoe beter de overleving. Dat is een belangrijk argument voor screening: als je darmkanker in een vroeg stadium vindt, kan dat de overleving sterk verbeteren.`} />
    </div>
  )
}
