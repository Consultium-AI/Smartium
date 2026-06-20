import { blok10Tentamen2PartA } from './blok10-tentamen-2-partA'
import { blok10Tentamen2PartB } from './blok10-tentamen-2-partB'

export const blok10Tentamen2 = {
  id: 'blok10-tentamen-2',
  blok: 10,
  tentamenNr: 3,
  title: 'Oefententamen 3',
  subtitle: 'Levermetabolisme, kinder-MDL, pancreas & gastroparese',
  totalPoints: 50,
  cesuur: 0.6,
  casussen: [...blok10Tentamen2PartA, ...blok10Tentamen2PartB],
}
