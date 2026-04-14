import { blok4Tentamen1PartA } from './blok4-tentamen-1-partA'
import { blok4Tentamen1PartB } from './blok4-tentamen-1-partB'
import { blok4Tentamen1PartC } from './blok4-tentamen-1-partC'
import { blok4Tentamen1PartD } from './blok4-tentamen-1-partD'

export const blok4Tentamen1 = {
  id: 'blok4-tentamen-1',
  blok: 4,
  tentamenNr: 1,
  title: 'Oefententamen 1',
  subtitle: 'Afweer en aanpak van infecties',
  totalPoints: 133,
  cesuur: 0.55,
  casussen: [
    ...blok4Tentamen1PartA,
    ...blok4Tentamen1PartB,
    ...blok4Tentamen1PartC,
    ...blok4Tentamen1PartD,
  ],
}
