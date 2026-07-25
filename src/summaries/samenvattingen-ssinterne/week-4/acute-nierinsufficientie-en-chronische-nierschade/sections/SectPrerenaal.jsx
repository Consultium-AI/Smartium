import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prerenaal`}</Inline></SubHeading>
      <PBody text={`Bij **prerenaal** is er te weinig doorbloeding van de nier. De nier zelf is in eerste instantie nog niet beschadigd, maar krijgt te weinig perfusie.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hypotensie of hypoperfusie door verminderde vochtinname, verlies van vocht, intern verlies of perifere vasodilatatie;`}</Inline></li>
        <li><Inline>{`verminderd hartminuutvolume, bijvoorbeeld bij hartfalen;`}</Inline></li>
        <li><Inline>{`stoornissen in autoregulatie;`}</Inline></li>
        <li><Inline>{`preglomerulaire vasoconstrictie;`}</Inline></li>
        <li><Inline>{`postglomerulaire vasodilatatie;`}</Inline></li>
        <li><Inline>{`hepatorenaal syndroom.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Kort gezegd: als de nier te weinig bloed krijgt, daalt de GFR.`}</Inline></p>
    </div>
  )
}
