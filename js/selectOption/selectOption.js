import Menu from "../menu.js"
import { sel } from "../common.js"

export default {
  init() {
    this.infoTemplate()
    this.optionTitleTemplate()
    this.optionSizeTemplate()
    this.optionCupTemplate()


  },

  load() {

  },

  event() {

  },

  infoTemplate() {
    let info = `
    <section>
      <img src = "/css/img/americano.jpg"></img>
      <div class = "menuInfo">
          <h2 class = "h2 ">아메리카노</h2>
          <p class = "engTitle">Americano</p>
          <p class = "info">진한 에스프레소와 뜨거운 물을 섞어 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피</p>
          <p class = "price">4,100원</p>
      </div>
      <div class = "tempBtn">
        <ol>
          <li class = "hot">HOT</li>
          <li class = "ice">ICE</li>
        </ol>
      </div>
    </section>
    `
    sel.el('.main').insertAdjacentHTML('afterbegin', info)
  },


  
  optionTitleTemplate() {
    for(const key in Menu.optionArray) {
      let sizeAndCup = `
      <div class = "${Menu.optionArray[key].className} template">
        <h2>${Menu.optionArray[key].title}</h2>
        <ol></ol>
      </div>
    `
      sel.el('.tempBtn').insertAdjacentHTML('afterend', sizeAndCup)
    }
  },

  optionSizeTemplate() {
    for(const key in Menu.sizeArray) {
      let sizeDom = `
      <li class = "${Menu.sizeArray[key].className}">
        <img>${Menu.sizeArray[key].img}</img>
        <p>${Menu.sizeArray[key].title}</p>
        <p>${Menu.sizeArray[key].volume}</p>
      </li>
      `
      sel.el('.size > ol').insertAdjacentHTML('beforeend', sizeDom)
    }
  },

  optionCupTemplate() {
    for(const key in Menu.cupArray) {
      let cupDom = `
      <li class = "${Menu.cupArray[key].className}">
      <p>${Menu.cupArray[key].title}</p>
    </li>
      `
      sel.el('.cup > ol').insertAdjacentHTML('beforeend', cupDom)
    }
  },

  personalOptionTemplate() {
    let personalOption = `
      <div class = "person">

      </div>
    `
  }
}