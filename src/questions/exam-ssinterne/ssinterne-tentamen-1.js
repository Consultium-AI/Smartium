import { ssinterneTentamen1PartA } from './ssinterne-tentamen-1-partA'
import { ssinterneTentamen1PartB } from './ssinterne-tentamen-1-partB'

export const ssinterneTentamen1 = {
  id: 'ssinterne-tentamen-1',
  blok: 'ssinterne',
  tentamenNr: 1,
  title: 'Oefententamen 1',
  subtitle: 'Interne Geneeskunde — dwarsdoorsnede week 1 t/m 7',
  totalPoints: 100,
  cesuur: 0.6,
  casussen: [...ssinterneTentamen1PartA, ...ssinterneTentamen1PartB],
}
