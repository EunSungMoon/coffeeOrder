import { sel } from "./common.js";

//footer

export default {
  init() {
    this.template()
  },

  template() {
    let footerTem = `
      <div></div>
    `

    sel.el('.footer').insertAdjacentHTML('afterbegin', footerTem)
  }
}