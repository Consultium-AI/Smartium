import { blok5Tentamen4PartA } from './blok5-tentamen-4-partA'
import { blok5Tentamen4PartB } from './blok5-tentamen-4-partB'
import { blok5Tentamen4PartC } from './blok5-tentamen-4-partC'

export const blok5Tentamen4 = {
  id: 'blok5-tentamen-4',
  blok: 5,
  tentamenNr: 4,
  title: 'Oefententamen 4',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 139,
  cesuur: 0.6,
  casussen: [
    ...blok5Tentamen4PartA,
    ...blok5Tentamen4PartB,
    ...blok5Tentamen4PartC,
  ],
}
