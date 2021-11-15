class ToyCardComponent {
  static USD_EUR = 1.15;
  constructor(props) {
    this.props = props;
    this.init();
  }

  formatDiscount = (content) => {
    return content
      ? `<span class="text-danger small d-block">${content}</span>`
      : `<span class="text-white user-select-none mt-2 d-block">None</span>`;
  };

  formatPrice = () => {
    const {
      price: { currency, amount },
      discount: { type, amount: value },
    } = this.props;

    let finalPrice;
    let discount = this.formatDiscount();
    switch (type) {
      case "amount":
        finalPrice = amount - value;
        discount = this.formatDiscount(`-${value} ${currency}`);
        break;
      case "toFixed":
        finalPrice = value;
        discount = this.formatDiscount();
        break;
      case "percentage":
        finalPrice = Math.round(100 * amount * (1 - value / 100)) / 100;
        discount = this.formatDiscount(`-${value} %`);
        break;
    }

    return `
    ${discount}
  <div>
  <strong class="text-danger me-4">${finalPrice} ${currency}</strong>
    <span class="text-secondary"><s>${amount} ${currency}</s></span>
    </div>`;
  };

  formatAgeRestriction = () => {
    const { ageRestrictions } = this.props;
    return ageRestrictions
      ? `<div class='mt-2 text-secondary'>Age: ${ageRestrictions.from}+</div>`
      : `<div class="text-white user-select-none mt-2">-</div>`;
  };
  init = () => {
    const { title, imgSrc, onDelete } = this.props;

    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card shadow position-relative h-100";
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}"  class="card-img-top"/ height="200px" style="object-fit: contain"">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <div>
        ${this.formatPrice()}
      </div>
      ${this.formatAgeRestriction()}
    </div>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>`;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", onDelete);
  };
}
