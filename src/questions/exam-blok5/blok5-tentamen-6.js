import { blok5Tentamen6PartA } from './blok5-tentamen-6-partA'
import { blok5Tentamen6PartB } from './blok5-tentamen-6-partB'
import { blok5Tentamen6PartC } from './blok5-tentamen-6-partC'

export const blok5Tentamen6 = {
  id: 'blok5-tentamen-6',
  blok: 5,
  tentamenNr: 6,
  title: 'Oefententamen 6',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 135,
  cesuur: 0.6,
  casussen: [
    ...blok5Tentamen6PartA,
    ...blok5Tentamen6PartB,
    ...blok5Tentamen6PartC,
  ],
}
