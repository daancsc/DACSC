let _ = document
let $ = i => _.getElementById(i)
let app = {
  title: "大安高工電腦研究社 | DACSC",
  name: "大安高工電腦研究社",
  shortname: "大安電研",
  en_name: "DACSC",
  contact: [
    {name: "facebook", link: "https://www.facebook.com/DaanCSC", icon: "fab fa-facebook"},
    {name: "github", link: "https://github.com/wilicw/dacsc", icon: "fab fa-github"}
  ],
  footer: "DAAN Computer Study Club since 1999",
  year: new Date().getFullYear(),
  init: () => {
    app.menu.close()
    $('page').innerHTML = ""
  },
  menu: {
    item: [
      {text: "課程", link: "/class"},
      {text: "相簿", link: "/photos"},
      {text: "關於電研", link: "/about"}
    ],
    html: "",
    close: () => {
      $('phonemenu').innerHTML = ""
      app.menu.isShow = false
    },
    open: () => {
      if (!app.menu.isShow) {
        $('phonemenu').innerHTML = app.menu.html
      } else {
        $('phonemenu').innerHTML = ""
      }
      app.menu.isShow = !app.menu.isShow
    },
    isShow: false
  }
}
let root = null
let useHash = true
let router = new Navigo(root, useHash)

app.menu.item.forEach(i=>{
  app.menu.html += `<p><a href="#${i.link}">${i.text}</a></p>`
  $('menu').innerHTML += `<p class="title nonphone menu"><a href="#${i.link}">${i.text}</a></p>`
})

_.title = app.title
_.getElementsByClassName('nonphone')[0].innerHTML = app.name
_.getElementsByClassName('phone')[0].innerHTML = app.shortname
$('footer').innerHTML = `© ${app.year} <b>${app.footer}</b>.`

let start_typing = () => {
  let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 15
  })
}

let error404 = () => {
  app.init()
  let baseHTML = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('page').innerHTML = baseHTML
  $('typed-strings').innerHTML = `<p>Are you love <br class="phone"><span class="color">Error 404</span>?</p>`
  $('typed-strings').innerHTML += `<p>We are <br class="phone"><span class="color">under development</span>!</p>`
  start_typing()
}

router.on(() => {
  app.init()
  let baseHTML = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
      <div id="contact"></div>
    </div>
  `
  $('page').innerHTML = baseHTML
  let items = ["Algorithm", "Assembly", "C++", "Python", "JavaScript", "<b>DACSC</b>"]//, "Your Grandma"]
  items.forEach(i=>{
    $('typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>!</p>`
  })
  app.contact.forEach(i=>{
    $('contact').innerHTML += `<a href="${i.link}"><i class="${i.icon}" aria-hidden="true"></i></a>`
  })
  start_typing()
}).resolve()

router.on({
  '/about': () => {
    error404()
  },
  '/class': () => {
    error404()
  },
  '/photos': () => {
    error404()
    //router.navigate('/')
  }
}).resolve()

router.notFound(() => {
  error404()
})

console.log('%c DACSC\n 大安電研\n 21th\n ', 'font-family: "Ubuntu Mono", monospace;font-size: 5em; color: red;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
