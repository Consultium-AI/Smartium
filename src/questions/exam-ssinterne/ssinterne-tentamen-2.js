import { ssinterneTentamen2PartA } from './ssinterne-tentamen-2-partA'
import { ssinterneTentamen2PartB } from './ssinterne-tentamen-2-partB'

export const ssinterneTentamen2 = {
  id: 'ssinterne-tentamen-2',
  blok: 'ssinterne',
  tentamenNr: 2,
  title: 'Oefententamen 2',
  subtitle: 'Interne Geneeskunde — dwarsdoorsnede week 1 t/m 7',
  totalPoints: 100,
  cesuur: 0.6,
  casussen: [...ssinterneTentamen2PartA, ...ssinterneTentamen2PartB],
}
