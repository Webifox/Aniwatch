/*
    TODO: Сделать вставку текста placeholder, если массив пустой
    TODO: Почистить код

*/

const getTemplate = (data = [], placeholder) => {
  const text = placeholder ?? 'Select element'

  const items = data.map((item) => {
    return `
            <li class="select__item" data-type="item" data-id="${item.id}"><i class="fa-solid fa-circle-check"></i>${item.value}</li>
        `
  })

  return `
    <div class="select__input" data-type="input"><div class="selected-item__list" data-type='list'><span data-type="value">${text}</span></div><i class="fa-solid fa-caret-down" data-type="arrow"></i></div>
    <div class="select__dropdown">
        <ul class="select__list">
            ${items.join('')}
        </ul>
    </div>
    `
}

export class Selecter {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = null

    this.#render()
    this.#setup()
  }

  #render() {
    const { placeholder, data } = this.options

    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder)
  }

  #setup() {
    this.isHandler = this.isHandler.bind(this)
    this.$el.addEventListener('click', this.isHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
    this.$input = this.$el.querySelector('[data-type="input"]')
    this.$list = this.$el.querySelector('[data-type="list"]')
  }

  isHandler(event) {
    const { type } = event.target.dataset

    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'checkbox') {
      const checkId = event.target.dataset.id
      this.select(checkId)
    } else if (type === 'value') {
      this.toggle()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectedId)
  }

  //Проверка, выбран ли уже это элемент
  isSelected() {
    const genreList = []
    const selected = this.current.value

    document
      .querySelectorAll('[data-type="value"]')
      .forEach((item) => genreList.push(item.innerText))

    return [genreList, genreList.includes(selected)]
  }

  // Создание выбранных элементов
  createItem() {
    const item = document.createElement('span')
    item.classList.add('select-handle')
    item.setAttribute('data-type', 'value')
    item.setAttribute('data-id', `${this.current.id}`)
    item.textContent = this.current.value

    return item
  }

  // Удаление уже выбранных элементов
  removeItem() {
    const currentid = this.current.id
    const removeItems = (currentid) => {
      let isSelectItemRemove = this.$list.querySelectorAll(
        `[data-id="${currentid}"]`
      )
      isSelectItemRemove.forEach((e) => {
        e.remove()
      })
    }

    const removeClasss = (currentid) => {
      let isSelectItemRemoveClass = this.$el.querySelector(
        `[data-id="${currentid}"]`
      )
      isSelectItemRemoveClass.classList.remove('select-handle')
    }

    return [removeItems(currentid), removeClasss(currentid)]
  }

  // Выбор элемента
  select(id) {
    this.selectedId = id
    this.createItem.textContent = this.current.value

    this.$el.querySelector(`[data-id="${id}"]`).classList.add('select-handle')

    this.$value.remove()

    if (this.isSelected()[1] === false) {
      this.$list.appendChild(this.createItem())
    } else {
      this.removeItem()[(1, 0)]
    }
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-caret-down')
    this.$arrow.classList.add('fa-caret-up')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.remove('fa-caret-up')
    this.$arrow.classList.add('fa-caret-down')
  }

  destroy() {
    this.$el.removeEventListener('click', this.isHandler)
  }
}
