import { blok4Tentamen5PartA } from './blok4-tentamen-5-partA'
import { blok4Tentamen5PartB } from './blok4-tentamen-5-partB'
import { blok4Tentamen5PartC } from './blok4-tentamen-5-partC'
import { blok4Tentamen5PartD } from './blok4-tentamen-5-partD'

export const blok4Tentamen5 = {
  id: 'blok4-tentamen-5',
  blok: 4,
  tentamenNr: 5,
  title: 'Oefententamen 5',
  subtitle: 'Afweer en aanpak van infecties',
  totalPoints: 131,
  cesuur: 0.55,
  casussen: [
    ...blok4Tentamen5PartA,
    ...blok4Tentamen5PartB,
    ...blok4Tentamen5PartC,
    ...blok4Tentamen5PartD,
  ],
}
