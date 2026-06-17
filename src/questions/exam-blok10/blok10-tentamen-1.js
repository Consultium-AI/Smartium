import { blok10Tentamen1PartA } from './blok10-tentamen-1-partA'
import { blok10Tentamen1PartB } from './blok10-tentamen-1-partB'

export const blok10Tentamen1 = {
  id: 'blok10-tentamen-1',
  blok: 10,
  tentamenNr: 1,
  title: 'Oefententamen 1',
  subtitle: 'Maag-Darm-Lever',
  totalPoints: 40,
  cesuur: 0.6,
  casussen: [...blok10Tentamen1PartA, ...blok10Tentamen1PartB],
}
