import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Natriumbalans: waar wordt natrium teruggeresorbeerd?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Natrium wordt in bijna alle segmenten van de tubulus actief gereabsorbeerd. Alleen in het dunne deel van de lis van Henle gebeurt dat niet actief; daar is nog wel passief en paracellulair transport mogelijk. Voor het begrijpen van de werking van diuretica is het belangrijk om te weten welke transporters in welke segmenten zitten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijkste natriumtransporters per nefronsegment`}</Inline></SubHeading>
      <DataTable rows={[["Nefronsegment", "Belangrijkste transporter"], ["Proximale tubulus", "NHE3"], ["Opstijgende deel van de lis van Henle", "NKCC2"], ["Distale tubulus", "NCC"], ["Verzamelbuis", "ENaC"]]} />
      <p className="leading-relaxed"><Inline>{`Deze transporters zijn klinisch relevant, omdat verschillende geneesmiddelen juist op deze plekken aangrijpen. Zo werken lisdiuretica op NKCC2, thiaziden op NCC en middelen die de natriumopname in de verzamelbuis beïnvloeden op ENaC.`}</Inline></p>
    </div>
  )
}
