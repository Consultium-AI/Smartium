import { blok5Tentamen2PartA } from './blok5-tentamen-2-partA'
import { blok5Tentamen2PartB } from './blok5-tentamen-2-partB'
import { blok5Tentamen2PartC } from './blok5-tentamen-2-partC'
import { blok5Tentamen2PartD } from './blok5-tentamen-2-partD'

export const blok5Tentamen2 = {
  id: 'blok5-tentamen-2',
  blok: 5,
  tentamenNr: 2,
  title: 'Oefententamen 2',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 100,
  cesuur: 0.55,
  casussen: [
    ...blok5Tentamen2PartA,
    ...blok5Tentamen2PartB,
    ...blok5Tentamen2PartC,
    ...blok5Tentamen2PartD,
  ],
}
