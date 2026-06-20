import { blok10Tentamen3PartA } from './blok10-tentamen-3-partA'
import { blok10Tentamen3PartB } from './blok10-tentamen-3-partB'

export const blok10Tentamen3 = {
  id: 'blok10-tentamen-3',
  blok: 10,
  tentamenNr: 2,
  title: 'Oefententamen 2',
  subtitle: 'Maag-Darm-Lever',
  totalPoints: 52,
  cesuur: 0.6,
  casussen: [...blok10Tentamen3PartA, ...blok10Tentamen3PartB],
}
