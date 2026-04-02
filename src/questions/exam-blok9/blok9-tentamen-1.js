import { blok9Tentamen1PartA } from './blok9-tentamen-1-partA'
import { blok9Tentamen1PartB } from './blok9-tentamen-1-partB'
import { blok9Tentamen1PartC } from './blok9-tentamen-1-partC'
import { blok9Tentamen1PartD } from './blok9-tentamen-1-partD'

export const blok9Tentamen1 = {
  id: 'blok9-tentamen-1',
  blok: 9,
  tentamenNr: 1,
  title: 'Oefententamen 1',
  subtitle: 'Bachelor geneeskunde Ba2',
  totalPoints: 141,
  cesuur: 0.55,
  casussen: [
    ...blok9Tentamen1PartA,
    ...blok9Tentamen1PartB,
    ...blok9Tentamen1PartC,
    ...blok9Tentamen1PartD,
  ],
}
