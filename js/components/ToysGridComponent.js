class ToysGridComponent {
  constructor() {
    this.state = { loading: false, toys: [] }
    this.init()
  }

  fetchToys = () =>
    setInterval(() => API.fetchToys(this.saveToysData, alert), 1000)

  saveToysData = (toys) => {
    this.state.toys = toys
    this.state.loading = false
    this.render()
  }

  init = () => {
    this.state.loading = true
    this.fetchToys()
    this.htmlElement = document.createElement('div')

    // task 7
    this.htmlElement.className = 'row g-3'
    //task 4 this.htmlElement.innerHTML = 'Toys Grid Component'
    this.render()
  }
  //task 5 render method
  //   render = () => {
  //     const { loading, toys } = this.state
  //     if (loading) {
  //       this.htmlElement.innerHTML = `<div class="text-center"><img src="./assets/loading.gif"/></div>`
  //     } else {
  //       this.htmlElement.innerHTML = 'Parsiusta'
  //     }
  //   }

  // task 7
  cardWrapper = (element) => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3'
    col.appendChild(element)
    return col
  }

  // task 7
  render = () => {
    const { loading, toys } = this.state
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="./assets/loading.gif"/></div>`
    } else if (toys.length > 0) {
      this.htmlElement.innerHTML = ''
      const toyComponents = toys
        .map((t) => new ToyCardComponent(t))
        .map((t) => t.htmlElement)
        .map(this.cardWrapper)
      this.htmlElement.append(...toyComponents)
    } else {
      this.htmlElement.innerHTML = `<h2 class="text-center>No Toys elements</h2>`
    }
  }
}
