import { blok10Tentamen5PartA } from './blok10-tentamen-5-partA'
import { blok10Tentamen5PartB } from './blok10-tentamen-5-partB'
import { blok10Tentamen5PartC } from './blok10-tentamen-5-partC'
import { blok10Tentamen5PartD } from './blok10-tentamen-5-partD'

export const blok10Tentamen5 = {
  id: 'blok10-tentamen-5',
  blok: 10,
  tentamenNr: 5,
  title: 'Oefententamen 5',
  subtitle:
    'Final Boss 2.0: lever/cirrose, obesitas, pancreas, reflux/gastroparese, CRC, GI-bloeding, AMI & maag/slokdarm-oncologie',
  totalPoints: 100,
  cesuur: 0.6,
  casussen: [
    ...blok10Tentamen5PartA,
    ...blok10Tentamen5PartB,
    ...blok10Tentamen5PartC,
    ...blok10Tentamen5PartD,
  ],
}
