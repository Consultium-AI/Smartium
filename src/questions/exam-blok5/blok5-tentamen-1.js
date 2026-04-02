import { blok5Tentamen1PartA } from './blok5-tentamen-1-partA'
import { blok5Tentamen1PartB } from './blok5-tentamen-1-partB'
import { blok5Tentamen1PartC } from './blok5-tentamen-1-partC'
import { blok5Tentamen1PartD } from './blok5-tentamen-1-partD'

export const blok5Tentamen1 = {
  id: 'blok5-tentamen-1',
  blok: 5,
  tentamenNr: 1,
  title: 'Oefententamen 1',
  subtitle: 'Bedreigingen van binnenuit en buitenaf',
  totalPoints: 168,
  cesuur: 0.55,
  casussen: [
    ...blok5Tentamen1PartA,
    ...blok5Tentamen1PartB,
    ...blok5Tentamen1PartC,
    ...blok5Tentamen1PartD,
  ],
}
