import { blok10Tentamen4PartA } from './blok10-tentamen-4-partA'
import { blok10Tentamen4PartB } from './blok10-tentamen-4-partB'

export const blok10Tentamen4 = {
  id: 'blok10-tentamen-4',
  blok: 10,
  tentamenNr: 4,
  title: 'Oefententamen 4',
  subtitle: 'EUS/ERCP, erfelijk maagkanker, cirrose & colorectaal carcinoom',
  totalPoints: 50,
  cesuur: 0.6,
  casussen: [...blok10Tentamen4PartA, ...blok10Tentamen4PartB],
}
