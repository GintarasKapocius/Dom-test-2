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
    //task 4 this.htmlElement.innerHTML = 'Toys Grid Component'
    this.render()
  }

  render = () => {
    const { loading, toys } = this.state
    if (loading) {
      this.htmlElement.innerHTML = 'Siunciama'
    } else {
      this.htmlElement.innerHTML = 'Parsiusta'
    }
  }
}
