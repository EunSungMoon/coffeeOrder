import Menu from "../menu.js"
import { sel } from "../common.js"

export default {
  init() {
    this.load()
    this.event()
  },

  load() {
    this.loadData()
    this.optionTitleTemplate()
    this.optionSizeTemplate()
    this.optionCupTemplate()
    this.arrow()
    this.personalOptionTemplate()
    this.getUrl()
  },

  event() {
    this.clickTempEvt();
    this.addClass('.sizeOption', '.tall', '.grande', '.venti', 'greenBorder')
    this.addClass('.cupOption', '.hall', '.individual', '.disposable', 'greenBtn')
    this.arrowEvt()

  },

  infoTemplate(code, src, title, engTitle, price) {
    let info = `
    <section data-code = "${code}">
      <img src = "${src}"></img>
      <div class = "menuInfo">
          <h2 class = "h2 ">${title}</h2>
          <p class = "engTitle">${engTitle}</p>
          <p class = "info">kdfjlsf</p>
          <p class = "price">${price}</p>
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
      <div class = "template ${arr.className}">
        <div class = "${arr.className}Title">
          <h2>${arr.title}</h2>
        </div>
        <div class = "optionList">
          <ol></ol>
        </div>
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
      sel.el('.optionList > ol').insertAdjacentHTML('beforeend', sizeDom)
    }
  },

  optionCupTemplate() {
    for (const key in Menu.cupArray) {
      let cupDom = `
      <li class = "cupOption ${Menu.cupArray[key].className}">
      <p>${Menu.cupArray[key].title}</p>
    </li>
      `
      sel.el('.cup > .optionList >ol').insertAdjacentHTML('beforeend', cupDom)
    }
  },

  clickTempEvt() {
    let selectors = sel.elAll('.tempOption')
    for (const selector of selectors) {
      selector.addEventListener('click', function () {
        switch (this) {
          case sel.el('.ice'):
            this.classList.add('blue')
            sel.el('.hot').classList.remove('red')
            break;
          case sel.el('.hot'):
            this.classList.add('red')
            sel.el('.ice').classList.remove('blue')
            break;
        }
      })
    }
  },

  addClass(selAll, sel1, sel2, sel3, className) {
    let selectors = sel.elAll(selAll)
    for (const selector of selectors) {
      selector.addEventListener('click', function (e) {
        switch (this) {
          case sel.el(sel1):
            this.classList.add(className);
            sel.el(sel2).classList.remove(className)
            sel.el(sel2).classList.remove(className)
            break;
          case sel.el(sel2):
            this.classList.add(className);
            sel.el(sel1).classList.remove(className)
            sel.el(sel3).classList.remove(className)
            break;
          case sel.el(sel3):
            this.classList.add(className);
            sel.el(sel1).classList.remove(className)
            sel.el(sel2).classList.remove(className)
            break;
        }
      })
    }
  },

  arrow() {
    let arrowImg = `
      <button class = "rightArrow arrow"></button>
    `
    sel.el('.personalTitle').insertAdjacentHTML('beforeend', arrowImg)
  },

  arrowEvt() {
    let $arrow = sel.el('.arrow')
    $arrow.addEventListener('click', function (e) {
      switch (this) {
        case sel.el('.rightArrow'):
          this.classList.add('downArrow')
          this.classList.remove('rightArrow')
          sel.el('.personal>.optionList').classList.add('open')
          break;
        case sel.el('.downArrow'):
          this.classList.add('rightArrow')
          this.classList.remove('downArrow')
          sel.el('.personal>.optionList').classList.add('open')
          break;

      }
    })
  },

  personalOptionTemplate() {
    let personalOption = `
      <li>
        <span>
          <p>에스프레소 샷</p>
        </span>
      </li>
    `
    sel.el('.personal > .optionList >ol').insertAdjacentHTML('beforeend', personalOption)
  },

  getUrl() {
    let btn = location.href.substr(
      location.href.lastIndexOf('=') + 1
    )
    console.log('btnCode', btn);
  },

  loadData() {
    let code = localStorage.getItem('data-code');
    let src = localStorage.getItem('img')
    let title = localStorage.getItem('title')
    let engTitle = localStorage.getItem('engTitle')
    let price = localStorage.getItem('price')
    this.infoTemplate(code, src, title, engTitle, price);
  }
}

//form action 방식을 이용해보자!!