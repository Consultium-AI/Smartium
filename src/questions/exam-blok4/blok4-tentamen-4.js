import { blok4Tentamen4PartA } from './blok4-tentamen-4-partA'
import { blok4Tentamen4PartB } from './blok4-tentamen-4-partB'
import { blok4Tentamen4PartC } from './blok4-tentamen-4-partC'
import { blok4Tentamen4PartD } from './blok4-tentamen-4-partD'

export const blok4Tentamen4 = {
  id: 'blok4-tentamen-4',
  blok: 4,
  tentamenNr: 4,
  title: 'Oefententamen 4',
  subtitle: 'Afweer en aanpak van infecties',
  totalPoints: 136,
  cesuur: 0.55,
  casussen: [
    ...blok4Tentamen4PartA,
    ...blok4Tentamen4PartB,
    ...blok4Tentamen4PartC,
    ...blok4Tentamen4PartD,
  ],
}
