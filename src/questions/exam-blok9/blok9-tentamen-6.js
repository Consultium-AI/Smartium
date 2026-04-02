import { blok9Tentamen6PartA } from './blok9-tentamen-6-partA'
import { blok9Tentamen6PartB } from './blok9-tentamen-6-partB'
import { blok9Tentamen6PartC } from './blok9-tentamen-6-partC'

export const blok9Tentamen6 = {
  id: 'blok9-tentamen-6',
  blok: 9,
  tentamenNr: 6,
  title: 'Oefententamen 6',
  subtitle: 'Oefententamen Homeostase Ba2',
  totalPoints: 153,
  cesuur: 0.55,
  casussen: [...blok9Tentamen6PartA, ...blok9Tentamen6PartB, ...blok9Tentamen6PartC],
}
