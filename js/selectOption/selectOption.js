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
    this.clickTempEvt()
    this.clickSizeEvt()
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
          <li class = "hot red"><a>HOT</a></li>
          <li class = "ice"><a>ICE</a></li>
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
    for (const key in Menu.cupArray) {
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
  },

  clickTempEvt() {
    let selectors = sel.elAll('.tempBtn > ol> li')
    for (const selector of selectors) {
      selector.addEventListener('click', function (e) {
        let target = e.currentTarget.classList
        console.log(target);
        if (target == 'ice') {
          sel.el('.ice').classList.add('blue')
          sel.el('.hot').classList.remove('red')
        } else if (target == 'hot') {
          sel.el('.hot').classList.add('red')
          sel.el('.ice').classList.remove('blue')
        }
      })
    }
  },

  clickSizeEvt() {
    let selectors = sel.elAll('.size > ol > li')
    for (const selector of selectors) {
      selector.addEventListener('click', function (e) {
        let target = e.currentTarget.classList
        if (target == 'tall') {
          sel.el('.tall').classList.add('greenBorder')
          sel.el('.grande').classList.remove('greenBorder')
          sel.el('.venti').classList.remove('greenBorder')
          
        } else if (target == 'grande') {
          sel.el('.grande').classList.add('greenBorder')
          sel.el('.tall').classList.remove('greenBorder')
          sel.el('.venti').classList.remove('greenBorder')
        } else if (target == 'venti') {
          sel.el('.venti').classList.add('greenBorder')
          sel.el('.grande').classList.remove('greenBorder')
          sel.el('.tall').classList.remove('greenBorder')
        }
      })
    }
  },

  clickCupEvt() {
    let selectors = sel.elAll('.cup > ol > li')
    for (const selector of selectors) {
      selector.addEventListener('click', function (e) {
        let target = e.currentTarget.classList
        if (target == 'hall') {
          sel.el('.hall').classList.add('green')
          sel.el('.individual').classList.remove('green')
          sel.el('.disposable').classList.remove('green')
          
        } else if (target == 'individual') {
          sel.el('.individual').classList.add('green')
          sel.el('.disposable').classList.remove('green')
          sel.el('.hall').classList.remove('green')
        } else if (target == 'disposable') {
          sel.el('.disposable').classList.add('green')
          sel.el('.individual').classList.remove('green')
          sel.el('.hall').classList.remove('green')
        }
      })
    }
  }
}