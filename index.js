let _ = document
let $ = i => _.getElementById(i)
let app = {
  title: "大安高工電腦研究社 | DACSC",
  name: "大安高工電腦研究社",
  shortname: "大安電研",
  en_name: "DACSC",
  contact: [
    {name: "facebook", link: "https://www.facebook.com/DaanCSC", icon: "fab fa-facebook"},
    {name: "instagram", link: "https://www.instagram.com/daancsc/", icon: "fab fa-instagram"},
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
  },
  friends: {
    list: [
      {name: "建中資訊社", shortname: "INFOR", fb: "ckINFOR", ig: "infor31st", web: "https://infor.org/"},
      {name: "北一女中資訊研習社", shortname: "FGISC", fb: "fgisc", ig: "fgisc32nd", web: ""},
      {name: "中山女高資訊研究社", shortname: "ZSISC", fb: "zsisc25", ig: "zsisc26th", web: ""},
      {name: "景美女中電腦資訊社", shortname: "CMIOC", fb: "CMIOC25", ig: "cmioc25", web: ""},
      {name: "高雄女中電腦資訊暨網路科技研究社", shortname: "KGHSI2TRC2", fb: "KGHSI2TRC2", ig: "kghs_i2trc2_24th", web: "http://url.kghsi2trc2.tw/Web"},
      {name: "丹鳳資訊研究社", shortname: "dfichealer", fb: "", ig: "dfichealer", web: ""},
      {name: "板橋高中資訊社", shortname: "PCIC", fb: "PCSHInforClub", ig: "pcshic", web: "https://sites.google.com/site/pcshic/"},
      {name: "附中工業技術研究社", shortname: "hsnu_itrs", fb: "HSNU.ITRS.infinite", ig: "hsnu_itrs", web: ""},
      {name: "成功高中電子計算機研習社", shortname: "CKCSC", fb: "", ig: "ckcsc32nd_diary", web: ""},
      {name: "成功高中機器人研究社", shortname: "CGRC", fb: "CGRC2nd", ig: "cgrc_4th", web: ""},
      {name: "大直資訊", shortname: "DZIF", fb: "dzif20th", ig: "dzif20th", web: "https://linktr.ee/dzif20th"},
      {name: "松山高中資訊研究社", shortname: "SSINRC", fb: "", ig: "ssinrc_29", web: "https://ssinrc.org"},
      {name: "興國資訊應用社", shortname: "HKHSHIRC", fb: "HKHSprogrammingDesignClub", ig: "hkhs_hirc", web: ""},
      {name: "台南女中資訊研究社", shortname: "TGIRC", fb: "tgirc", ig: "tngs_tgirc", web: ""},
      {name: "永春高中資訊電腦研究社", shortname: "YCTECH", fb: "", ig: "yctech_23nd", web: "https://sites.google.com/view/ycshwebsite"},
      {name: "中和資研", shortname: "CHISC", fb: "chisc.club", ig: "chisc.chshs", web: "https://www.chisc.club/"},
      {name: "竹女資訊研究社", shortname: "HGISC", fb: "HGISCinHGSH", ig: "hgisc.2", web: "https://hgisc.github.io/homepage/index.html"},
      {name: "嘉義女中程式研究社", shortname: "CYGSHPRC", fb: "CYGSH.PRC", ig: "cygsh_prc_5th", web: ""},
      {name: "內壢高中資研社", shortname: "NLPC", fb: "", ig: "nlpc_1st_hacker", web: ""},
      {name: "實驗中學資訊研究社", shortname: "NEHSICED", fb: "ICEDinNEHS", ig: "nehs_iced", web: "https://join.iced.tw/"},
      {name: "台中二中電腦研習社", shortname: "TCSSHCSC", fb: "csc241", ig: "tcssh_csc", web: "https://csc241.tcssh.tc.edu.tw/"},
      {name: "北商大資訊研究社", shortname: "NTUBIRC", fb: "", ig: "ntub_irc", web: ""},
    ]
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
  _.title = `404 Not found | ${app.shortname}`
  let baseHTML = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('page').innerHTML = baseHTML
  $('typed-strings').innerHTML = `<p>Are you love <br class="phone"><span class="color">Error 404</span>?</p>`
  start_typing()
}

let underDEV = () => {
  app.init()
  let baseHTML = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('page').innerHTML = baseHTML
  $('typed-strings').innerHTML = `<p>We are under<br><span class="color">Development</span>!</p>`
  start_typing()
}

let friends = () => {
  app.init()
  _.title = `電資友社 | ${app.shortname}`
  let baseHTML = `
    <div class="container">
      <p class="page-title">電資友社</p>
      <hr>
      <br>
      <div id="friends"></div>
      <div class="section"></div>
      <p class="no-important">* 如須更新資料請來信告知</p>
    </div>
  `
  $('page').innerHTML = baseHTML
  let j = 0
  let cardHTML = ""
  app.friends.list.forEach(i=>{
    let fb = ""
    let ig = ""
    let web = ""
    if (i.fb!="") {
      fb = `<a href="https://fb.com/${i.fb}"><i class="fab fa-facebook" aria-hidden="true"></i></a>`
    }
    if (i.ig!="") {
      ig = `<a href="https://www.instagram.com/${i.ig}"><i class="fab fa-instagram" aria-hidden="true"></i></a>`
    }
    if (i.web!="") {
      web = `<a href="${i.web}"><i class="fas fa-globe-asia" aria-hidden="true"></i></a>`
    }
    cardHTML += `
      <div class="col grid_1_of_4">
        <p class="card_short mono">${i.shortname}</p>
        <p class="card_title">${i.name} </p>
        <span class="card_link">
          ${fb}
          ${ig}
          ${web}
        </span>
      </div>
    `
    if ((j+1)%4==0) {
      $('friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ""
    }
    if (j==app.friends.list.length-1) {
      $('friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ""
    }
    j++
  })
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
    underDEV()
  },
  '/class': () => {
    underDEV()
  },
  '/photos': () => {
    underDEV()
    //router.navigate('/')
  },
  '/friends': () => {
    friends()
    //router.navigate('/')
  },
  '/404': () => {
    error404()
  }
}).resolve()

router.notFound(() => {
  router.navigate('/404')
})

console.log('%c DACSC\n 大安電研\n 21th\n ', 'font-family: "Ubuntu Mono", monospace;font-size: 5em; color: red;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
