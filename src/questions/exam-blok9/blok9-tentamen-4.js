import { blok9Tentamen4PartA } from './blok9-tentamen-4-partA'
import { blok9Tentamen4PartB } from './blok9-tentamen-4-partB'
import { blok9Tentamen4PartC } from './blok9-tentamen-4-partC'

export const blok9Tentamen4 = {
  id: 'blok9-tentamen-4',
  blok: 9,
  tentamenNr: 4,
  title: 'Oefententamen 4',
  subtitle: 'Ba2 Geneeskunde',
  totalPoints: 113,
  cesuur: 0.55,
  casussen: [
    ...blok9Tentamen4PartA,
    ...blok9Tentamen4PartB,
    ...blok9Tentamen4PartC,
  ],
}
