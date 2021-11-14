import Menu from "../menu.js"
import { sel } from "../common.js"
import Main from "../main.js"

export default {
  init() {
    this.load()
    this.event()
  },

  load() {
    this.infoTemplate()
    this.optionTitleTemplate()
    this.optionSizeTemplate()
    this.optionCupTemplate()
  },

  event() {

    this.clickTempEvt();
    this.addClass()

    this.clickCupEvt()
  },

  infoTemplate() {
      let info = `
    <section data-code = "coffee">
      <img src = "/css/img/americano.jpg"></img>
      <div class = "menuInfo">
          <h2 class = "h2 ">아메리카노</h2>
          <p class = "engTitle">americano</p>
          <p class = "info">kdfjlsf</p>
          <p class = "price">4,100원</p>
      </div>
      <div class = "tempBtn">
        <ol>
          <li class = "tempOption hot red"><a>HOT</a></li>
          <li class = "tempOption ice"><a>ICE</a></li>
        </ol>
      </div>
      <div class = "option"></div>
    </section>
    `

      sel.el('.main').insertAdjacentHTML('afterbegin', info)
  },

  optionTitleTemplate() {
    Menu.optionArray.forEach(function (arr) {
      let sizeAndCup = `
      <div class = "${arr.className} template">
        <h2>${arr.title}</h2>
        <ol></ol>
      </div>
    `
      sel.el('.option').insertAdjacentHTML('beforeend', sizeAndCup)
    })
  },

  optionSizeTemplate() {
    for (const key in Menu.sizeArray) {
      let sizeDom = `
      <li class = "sizeOption ${Menu.sizeArray[key].className}">
        <img>${Menu.sizeArray[key].img}</img>
        <p>${Menu.sizeArray[key].title}</p>
        <p>${Menu.sizeArray[key].volume}</p>
      </li>
      `
      sel.el('.size > ol').insertAdjacentHTML('beforeend', sizeDom)
    }
  },

  optionCupTemplate() {
    for (const key in Menu.cupArray) {
      let cupDom = `
      <li class = "cupOption ${Menu.cupArray[key].className}">
      <p>${Menu.cupArray[key].title}</p>
    </li>
      `
      sel.el('.cup > ol').insertAdjacentHTML('beforeend', cupDom)
    }
  },

  clickTempEvt() {
    let selectors = sel.elAll('.tempOption')
    for (const selector of selectors) {
      selector.addEventListener('click', function () {
        switch (this) {
          case sel.el('.ice'):
            sel.el('.ice').classList.add('blue')
            sel.el('.hot').classList.remove('red')
            break;
          case sel.el('.hot'):
            sel.el('.hot').classList.add('red')
            sel.el('.ice').classList.remove('blue')
            break;
        }
      })
    }
  },

  reset() {
    let selectors = sel.elAll('.sizeOption')
    for (const selector of selectors) {
      selector.classList.remove('greenBorder')
    }
  },

  addClass() {
    let selectors = sel.elAll('.sizeOption')
    for (const selector of selectors) {
      selector.addEventListener('click', function (e) {
        this.classList.add('greenBorder')
      })
    }
  },

  clickCupEvt() {
    let selectors = sel.elAll('.cupOption')
    for (const selector of selectors) {
      selector.addEventListener('click', function () {
        console.log(this);
        this.classList.add('greenBtn')
      })
    }
  },

  personalOptionTemplate() {
    let personalOption = `
      <div class = "person">
        
      </div>
    `
  },
}

//form action 방식을 이용해보자!!