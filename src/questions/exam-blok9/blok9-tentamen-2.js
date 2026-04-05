import { blok9Tentamen2PartA } from './blok9-tentamen-2-partA'
import { blok9Tentamen2PartB } from './blok9-tentamen-2-partB'
import { blok9Tentamen2PartC } from './blok9-tentamen-2-partC'
import { blok9Tentamen2PartD } from './blok9-tentamen-2-partD'

export const blok9Tentamen2 = {
  id: 'blok9-tentamen-2',
  blok: 9,
  tentamenNr: 2,
  title: 'Oefententamen 2',
  subtitle: 'Oefententamen Homeostase Ba2',
  totalPoints: 129,
  cesuur: 0.6,
  casussen: [
    ...blok9Tentamen2PartA,
    ...blok9Tentamen2PartB,
    ...blok9Tentamen2PartC,
    ...blok9Tentamen2PartD,
  ],
}
