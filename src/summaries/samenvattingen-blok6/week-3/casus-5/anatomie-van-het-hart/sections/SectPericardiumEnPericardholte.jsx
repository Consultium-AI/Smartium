import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pericardium en pericardholte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart ligt in het pericardium, het hartzakje. Dit bestaat uit een stevige buitenlaag en een gladde binnenlaag. Het pericardium is vastgehecht bij de grote vaten en is deels vergroeid met omliggende structuren, waaronder het centrum tendineum van het diafragma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aan de binnenzijde is het pericardium bekleed met een sereus vlies. Het pariëtale blad gaat over in het viscerale blad, dat ook epicard wordt genoemd. Tussen het hart en het pericardium ligt de pericardholte. Deze bevat een kleine hoeveelheid vloeistof, waardoor het hart soepel kan bewegen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ventrale van het pericard ligt de thymus. Tussen pericardium en pleura lopen links en rechts de n. phrenici naar het diafragma. De n. phrenicus verzorgt de motorische innervatie van het diafragma en ook de sensibele innervatie van het diafragma, pericardium en pleura.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Belangrijke structuren rond het pericard`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Relatie tot het hart"], ["pericardium", "hartzakje rondom het hart"], ["pericardholte", "met vloeistof gevulde ruimte voor bewegingsvrijheid"], ["epicard", "visceraal blad van het sereuze pericard"], ["thymus", "ligt ventraal van het pericard"], ["n. phrenicus", "loopt langs het pericard naar het diafragma"]]} />
    </div>
  )
}
