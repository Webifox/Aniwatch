import Selecter from './SelecterPlugin.js'
import './burger.js'

// Открытие карты фильтров
const filterBtn = document.querySelector('.search__btn')
const filteCard = document.querySelector('.search__filter')

if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    filteCard.classList.toggle('open')
    filterBtn.classList.toggle('_active')
  })
}
// Функционал селектора выбора
const SelectGenre = new Selecter('#selectGenre', {
  placeholder: 'Select genres',
  data: [
    { id: '1', value: 'Action' },
    { id: '2', value: 'Adventure' },
    { id: '3', value: 'Animation' },
    { id: '4', value: 'Bishounen' },
    { id: '5', value: 'Comedy' },
    { id: '6', value: 'Demons' },
    { id: '7', value: 'Drama' },
    { id: '8', value: 'Ecchi' },
    { id: '9', value: 'Fantasy' },
    { id: '10', value: 'Game' },
    { id: '11', value: 'Harem' },
    { id: '12', value: 'Hentai' },
    { id: '13', value: 'Historical' },
    { id: '14', value: 'Horror' },
    { id: '15', value: 'Josei' },
    { id: '16', value: 'Kids' },
    { id: '17', value: 'Romantic' },
    { id: '18', value: 'Magic' },
    { id: '19', value: 'Martial Arts' },
    { id: '20', value: 'Mecha' },
    { id: '21', value: 'Military' },
    { id: '22', value: 'Music' },
    { id: '23', value: 'Psychological' },
    { id: '24', value: 'Mystery' },
    { id: '25', value: 'Samurai' },
    { id: '26', value: 'School' },
    { id: '27', value: 'Sci-Fi' },
    { id: '28', value: 'Seinen' },
    { id: '29', value: 'Shoujo' },
    { id: '30', value: 'Shoujo-ai' },
    { id: '31', value: 'Shounen' },
    { id: '32', value: 'Shounen-ai' },
    { id: '33', value: 'Sports' },
    { id: '34', value: 'Vampire' },
    { id: '35', value: 'Yaoi' },
    { id: '36', value: 'Yuri' },
  ],
})

const SelectType = new Selecter('#selectType', {
  placeholder: 'Select type',
  data: [
    { id: '1', value: 'TV Serial' },
    { id: '2', value: 'Film' },
    { id: '3', value: 'OVA' },
    { id: '4', value: 'Special' },
  ],
})

const SelectStatus = new Selecter('#selectStatus', {
  placeholder: 'Select status',
  data: [
    { id: '1', value: 'Ongoingedit' },
    { id: '2', value: 'Came out' },
    { id: '3', value: 'Announcement' },
  ],
})

const SelectLimit = new Selecter('#selectLimit', {
  placeholder: 'Select age limit',
  data: [
    { id: '1', value: 'G' },
    { id: '2', value: 'PG' },
    { id: '3', value: 'PG-13' },
    { id: '4', value: 'R' },
    { id: '5', value: 'NC-17' },
  ],
})

// Show bg

const showBtn = document.getElementById('show-background')

showBtn.addEventListener('click', () => {
  document.body.classList.toggle('_hide')
})