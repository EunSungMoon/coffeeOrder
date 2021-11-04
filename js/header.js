// import coffee from "./coffee.js";
import { sel } from "./common.js";
import Main from './main.js'
import menu from "./menu.js";

// header
export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.createHeader();
    this.createNav();
  },

  event() {
    this.clickTest()
  },

  createHeader() {
    let titleDom = `
    <div class = "headWrap">
      <h1>Order</h1>
    </div>
      `
    sel.el('.header').insertAdjacentHTML('afterbegin', titleDom)
  },

  createNav() {
    let navDom = `
      <nav>
        <ol>
          <li class = "menuTab" data-tab = "coffee"><a href = "#">COFFEE</a></li>
          <li class = "margin25 menuTab" data-tab = "nocoffee"><a href="#">noCOFFEE</a></li>
          <li class = "menuTab" data-tab = "tea"><a href = "#">TEA</a></li>
          <li class = "menuTab" data-tab = "ade"><a href = "#">ADE</a></li>
        </ol>
      <nav>
    `
    sel.el('.headWrap').insertAdjacentHTML('afterend', navDom)
  },

  clickTest() {
    let tabs = sel.elAll('.menuTab')
    for (const tab of tabs) {
      tab.addEventListener('click', this.clickNavEvent)
    }
  },

  clickNavEvent(e) {
    let target = e.currentTarget.dataset.tab
    switch (target) {
      case 'coffee': 
      console.log('coffee');

        break;
      case 'nocoffee': 
      console.log('nocoffee');
      Main.display('.coffeeWrap','none');
      Main.menuTemplate('.nocoffeeWrap', menu.nocoffeeArray);
        break;
      case 'tea': console.log('tea');
        break;
      case 'ade': console.log('ade');
        break;
    }
  },
}

//main-> section 문제가... 클릭할때마다 계속 생겨..
/* <div class = "logo"></div> */