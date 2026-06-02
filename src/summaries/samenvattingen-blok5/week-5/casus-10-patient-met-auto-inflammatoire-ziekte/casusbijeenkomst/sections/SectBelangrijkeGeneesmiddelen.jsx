import { Inline, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <DataTable
        rows={[
          ['Geneesmiddel', 'Werking'],
          ['---', '---'],
          [
            'Hydroxychloroquine',
            'remt TLR7 en TLR9, belangrijk bij type I interferon-activatie',
          ],
          ['Pilocarpine', 'muscarine-agonist, stimuleert speeksel- en traanklieren'],
          [
            'Mycofenolaat mofetil',
            'remt purinesynthese, remt T- en B-celproliferatie',
          ],
          [
            'Azathioprine',
            'remt DNA-synthese, vooral effect op snel delende T- en B-cellen',
          ],
          [
            'Methotrexaat',
            'remt foliumzuurmetabolisme, remt DNA-, RNA- en eiwitsynthese',
          ],
          ['Rituximab', 'anti-CD20, veroorzaakt afbraak van CD20-positieve B-cellen'],
          [
            'Belimumab',
            'remt BAFF, belangrijk voor overleving en activatie van B-cellen',
          ],
          [
            'Cyclofosfamide',
            'alkylerend cytostaticum, beschadigt DNA in snel delende cellen',
          ],
          ['Nifedipine', 'calciumantagonist, vaatverwijdend bij Raynaud'],
          ['Levothyroxine', 'substitutie bij hypothyreoïdie door Hashimoto'],
        ]}
      />
    </div>
  )
}
