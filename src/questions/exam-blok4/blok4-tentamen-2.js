import { blok4Tentamen2PartA } from './blok4-tentamen-2-partA'
import { blok4Tentamen2PartB } from './blok4-tentamen-2-partB'
import { blok4Tentamen2PartC } from './blok4-tentamen-2-partC'
import { blok4Tentamen2PartD } from './blok4-tentamen-2-partD'

export const blok4Tentamen2 = {
  id: 'blok4-tentamen-2',
  blok: 4,
  tentamenNr: 2,
  title: 'Oefententamen 2',
  subtitle: 'Afweer en aanpak van infecties',
  totalPoints: 135,
  cesuur: 0.55,
  casussen: [
    ...blok4Tentamen2PartA,
    ...blok4Tentamen2PartB,
    ...blok4Tentamen2PartC,
    ...blok4Tentamen2PartD,
  ],
}
