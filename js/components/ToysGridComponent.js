class ToysGridComponent {
  constructor() {
    this.init()
  }
  init = () => {
    this.htmlElement = document.createElement('div')
    this.htmlElement.innerHTML = 'Toys Grid Component'
  }
}
