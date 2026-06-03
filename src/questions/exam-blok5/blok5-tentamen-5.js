import { blok5Tentamen5PartA } from './blok5-tentamen-5-partA'
import { blok5Tentamen5PartB } from './blok5-tentamen-5-partB'
import { blok5Tentamen5PartC } from './blok5-tentamen-5-partC'

export const blok5Tentamen5 = {
  id: 'blok5-tentamen-5',
  blok: 5,
  tentamenNr: 5,
  title: 'Oefententamen 5',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 139,
  cesuur: 0.6,
  casussen: [
    ...blok5Tentamen5PartA,
    ...blok5Tentamen5PartB,
    ...blok5Tentamen5PartC,
  ],
}
