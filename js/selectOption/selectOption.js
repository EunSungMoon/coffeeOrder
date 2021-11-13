import Menu from "../menu.js"
import { sel } from "../common.js"

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

  personalOptionTemplate() {
    let personalOption = `
      <div class = "person">

      </div>
    `
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
  }
}