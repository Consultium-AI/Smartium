import { blok4Tentamen3PartA } from './blok4-tentamen-3-partA'
import { blok4Tentamen3PartB } from './blok4-tentamen-3-partB'
import { blok4Tentamen3PartC } from './blok4-tentamen-3-partC'
import { blok4Tentamen3PartD } from './blok4-tentamen-3-partD'

export const blok4Tentamen3 = {
  id: 'blok4-tentamen-3',
  blok: 4,
  tentamenNr: 3,
  title: 'Oefententamen 3',
  subtitle: 'Afweer en aanpak van infecties',
  totalPoints: 111,
  cesuur: 0.55,
  casussen: [
    ...blok4Tentamen3PartA,
    ...blok4Tentamen3PartB,
    ...blok4Tentamen3PartC,
    ...blok4Tentamen3PartD,
  ],
}
