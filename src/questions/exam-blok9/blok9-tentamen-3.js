import { blok9Tentamen3PartA } from './blok9-tentamen-3-partA'
import { blok9Tentamen3PartB } from './blok9-tentamen-3-partB'
import { blok9Tentamen3PartC } from './blok9-tentamen-3-partC'
import { blok9Tentamen3PartD } from './blok9-tentamen-3-partD'

export const blok9Tentamen3 = {
  id: 'blok9-tentamen-3',
  blok: 9,
  tentamenNr: 3,
  title: 'Oefententamen 3',
  subtitle: 'Ba2 Geneeskunde',
  totalPoints: 133,
  cesuur: 0.55,
  casussen: [
    ...blok9Tentamen3PartA,
    ...blok9Tentamen3PartB,
    ...blok9Tentamen3PartC,
    ...blok9Tentamen3PartD,
  ],
}
