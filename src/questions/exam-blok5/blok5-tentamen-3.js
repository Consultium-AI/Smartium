import { blok5Tentamen3PartA } from './blok5-tentamen-3-partA'
import { blok5Tentamen3PartB } from './blok5-tentamen-3-partB'
import { blok5Tentamen3PartC } from './blok5-tentamen-3-partC'

export const blok5Tentamen3 = {
  id: 'blok5-tentamen-3',
  blok: 5,
  tentamenNr: 3,
  title: 'Oefententamen 3',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 130,
  cesuur: 0.6,
  casussen: [
    ...blok5Tentamen3PartA,
    ...blok5Tentamen3PartB,
    ...blok5Tentamen3PartC,
  ],
}
