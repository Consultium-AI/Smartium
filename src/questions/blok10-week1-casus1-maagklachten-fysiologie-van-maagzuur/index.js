import { group01ZuursecretieEnParietalecelQuestions } from './Group01ZuursecretieEnParietalecelQuestions'
import { group02RegulatieEnSignaalstoffenQuestions } from './Group02RegulatieEnSignaalstoffenQuestions'
import { group03PathologieEnFarmacologieQuestions } from './Group03PathologieEnFarmacologieQuestions'

export const blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurQuestionsMap = {
  'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur': [
    ...group01ZuursecretieEnParietalecelQuestions,
    ...group02RegulatieEnSignaalstoffenQuestions,
    ...group03PathologieEnFarmacologieQuestions,
  ],
}
