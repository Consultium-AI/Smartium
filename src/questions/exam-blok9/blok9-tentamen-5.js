import { blok9Tentamen5PartA } from './blok9-tentamen-5-partA'
import { blok9Tentamen5PartB } from './blok9-tentamen-5-partB'
import { blok9Tentamen5PartC } from './blok9-tentamen-5-partC'

export const blok9Tentamen5 = {
  id: 'blok9-tentamen-5',
  blok: 9,
  tentamenNr: 5,
  title: 'Oefententamen 5',
  subtitle: 'Oefententamen Homeostase Ba2',
  totalPoints: 138,
  cesuur: 0.55,
  casussen: [...blok9Tentamen5PartA, ...blok9Tentamen5PartB, ...blok9Tentamen5PartC],
}
