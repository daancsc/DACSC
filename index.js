let _ = document
let $ = _.querySelector.bind(_)
let app = {
  _title: '大安高工電腦研究社 | DACSC',
  _renderBase: '',
  name: '大安高工電腦研究社',
  shortname: '大安電研',
  en_name: 'DACSC',
  contact: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/DaanCSC',
      icon: 'fab fa-facebook'
    }, {
      name: 'instagram',
      link: 'https://www.instagram.com/daancsc/',
      icon: 'fab fa-instagram'
    }, {
      name: 'github',
      link: 'https://github.com/daancsc/DACSC',
      icon: 'fab fa-github'
    }
  ],
  module: {
    '_': i => _(i),
    '$': i => $(i),
    'startTyping': i => startTyping(i)
  },
  footer: 'DAAN Computer Study Club since 1999',
  year: new Date().getFullYear(),
  init: () => {
    app.menu.close()
    $('#page').innerHTML = ''
  },
  menu: {
    item: [
      {
        id: 0,
        text: '課程',
        link: '/class'
      }, {
        id: 1,
        text: '相簿',
        link: '/photos'
      }, {
        id: 2,
        text: '關於電研',
        link: null,
        sub: [
          {
            text: '簡介',
            link: '/about'
          }, {
            text: '憲章',
            link: '/rules'
          }, {
            text: '友社',
            link: '/friends'
          }
        ]
      }
    ],
    html: '',
    close: () => {
      $('#phonemenu').innerHTML = ''
      $('#icon').innerHTML = `<i class="fas fa-bars bar" aria-hidden="true" onclick="app.menu.open()"></i>`
      app.menu.isShow = false
    },
    open: () => {
      $('#phonemenu').innerHTML = app.menu.html
      $('#icon').innerHTML = `<i class="fas fa-times bar" aria-hidden="true" onclick="app.menu.close()"></i>`
      app.menu.isShow = true
    },
    showsub: id => {
      let html = ''
      let style = `text-align: right;
                   width: 100%;
                  `
      let j = 0
      app.menu.item[id].sub.forEach(i => {
        if (j === 0) {
          html += `<p>
                    <i class="fas fa-angle-left" style="text-align: left;margin-left: 0;width: 50%" aria-hidden="true" onclick="app.menu.open()"></i>
                    <a style="${style}" href="#${i.link}">${i.text}</a>
                  </p>`
          j = 1
        } else {
          html += `<p><a style="${style}" href="#${i.link}">${i.text}</a></p>`
        }
      })
      $('#phonemenu').innerHTML = html
    },
    isShow: false
  },
  friends: {
    list: [
      {
        name: '建國中學電子計算機研習社',
        shortname: 'CKEISC',
        fb: 'ckeisc38th',
        ig: '',
        web: 'https://ckeisc.org/'
      },
      { name: '北一女中資訊研習社',
        shortname: 'FGISC',
        fb: 'fgisc',
        ig: 'fgisc32nd',
        web: ''
      },
      { name: '中山女高資訊研究社',
        shortname: 'ZSISC',
        fb: 'zsisc25',
        ig: 'zsisc26th',
        web: ''
      },
      { name: '建中資訊社',
        shortname: 'INFOR',
        fb: 'ckINFOR',
        ig: 'infor31st',
        web: 'https://infor.org/'
      },
      { name: '景美女中電腦資訊社',
        shortname: 'CMIOC',
        fb: 'CMIOC25',
        ig: 'cmioc25',
        web: ''
      },
      { name: '高雄女中電腦資訊暨網路科技研究社',
        shortname: 'KGHSI2TRC2',
        fb: 'KGHSI2TRC2',
        ig: 'kghs_i2trc2_24th',
        web: 'http://url.kghsi2trc2.tw/Web'
      },
      { name: '丹鳳資訊研究社',
        shortname: 'dfichealer',
        fb: '',
        ig: 'dfichealer',
        web: ''
      },
      { name: '板橋高中資訊社',
        shortname: 'PCIC',
        fb: 'PCSHInforClub',
        ig: 'pcshic',
        web: 'https://sites.google.com/site/pcshic/'
      },
      { name: '附中工業技術研究社',
        shortname: 'hsnu_itrs',
        fb: 'HSNU.ITRS.infinite',
        ig: 'hsnu_itrs',
        web: ''
      },
      { name: '成功高中電子計算機研習社',
        shortname: 'CKCSC',
        fb: '',
        ig: 'ckcsc32nd_diary',
        web: ''
      },
      { name: '成功高中機器人研究社',
        shortname: 'CGRC',
        fb: 'CGRC2nd',
        ig: 'cgrc_4th',
        web: ''
      },
      { name: '大直資訊',
        shortname: 'DZIF',
        fb: 'dzif20th',
        ig: 'dzif20th',
        web: 'https://linktr.ee/dzif20th'
      },
      { name: '松山高中資訊研究社',
        shortname: 'SSINRC',
        fb: '',
        ig: 'ssinrc_29',
        web: 'https://ssinrc.org'
      },
      { name: '興國資訊應用社',
        shortname: 'HKHSHIRC',
        fb: 'HKHSprogrammingDesignClub',
        ig: 'hkhs_hirc',
        web: ''
      },
      { name: '臺南女中資訊研究社',
        shortname: 'TGIRC',
        fb: 'tgirc',
        ig: 'tngs_tgirc',
        web: ''
      },
      { name: '永春高中資訊電腦研究社',
        shortname: 'YCTECH',
        fb: '',
        ig: 'yctech_23nd',
        web: 'https://sites.google.com/view/ycshwebsite'
      },
      { name: '中和資研',
        shortname: 'CHISC',
        fb: 'chisc.club',
        ig: 'chisc.chshs',
        web: 'https://www.chisc.club/'
      },
      { name: '竹女資訊研究社',
        shortname: 'HGISC',
        fb: 'HGISCinHGSH',
        ig: 'hgisc.2',
        web: 'https://hgisc.github.io/homepage/index.html'
      },
      { name: '嘉義女中程式研究社',
        shortname: 'CYGSHPRC',
        fb: 'CYGSH.PRC',
        ig: 'cygsh_prc_5th',
        web: ''
      },
      { name: '內壢高中資研社',
        shortname: 'NLPC',
        fb: '',
        ig: 'nlpc_1st_hacker',
        web: ''
      },
      { name: '實驗中學資訊研究社',
        shortname: 'NEHSICED',
        fb: 'ICEDinNEHS',
        ig: 'nehs_iced',
        web: 'https://join.iced.tw/'
      },
      { name: '臺中二中電腦研習社',
        shortname: 'TCSSHCSC',
        fb: 'csc241',
        ig: 'tcssh_csc',
        web: 'https://csc241.tcssh.tc.edu.tw/'
      },
      { name: '北商大資訊研究社',
        shortname: 'NTUBIRC',
        fb: '',
        ig: 'ntub_irc',
        web: ''
      }
    ]
  },
  get title () {
    return this._title
  },
  set title (val) {
    _.title = val
    this._title = val
  },
  get renderBase () {
    return this._renderBase
  },
  set renderBase (val) {
    $('#page').innerHTML = val
  }
}
let root = null
let useHash = true
let router = new Navigo(root, useHash)

app.menu.item.forEach(i => {
  let drop = ''
  let morebutton = ''
  let itemHtml
  if (i.sub !== undefined) {
    i.sub.forEach(j => {
      drop += `<p><a href="#${j.link}">${j.text}</a></p>`
    })
    morebutton = `<i class="fas fa-angle-right" aria-hidden="true" onclick="app.menu.showsub(${i.id})"></i>`
  }
  if (i.link !== null) {
    itemHtml = `<a href="#${i.link}">${i.text}</a>${morebutton}`
  } else {
    itemHtml = `${i.text}${morebutton}`
  }
  app.menu.html += `<p>${itemHtml}</p>`
  if (i.link === null) {
    i.link = ''
  }
  $('#menu').innerHTML += `<div class="title nonphone menu dropdown"><a href="#${i.link}">${i.text}</a>
    <div>${drop}</div>
  </div>`
})

$('#icon').innerHTML = `<i class="fas fa-bars bar" aria-hidden="true" onclick="app.menu.open()"></i>`

$('.nonphone').innerHTML = app.name
$('.phone').innerHTML = app.shortname
$('#footer').innerHTML = `© ${app.year} <b>${app.footer}</b>.`

let startTyping = () => {
  let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 15
  })
}

let underDEV = () => {
  app.init()
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('#typed-strings').innerHTML = `<p>We are under<br><span class="color">Development</span>!</p>`
  startTyping()
}

router.on(() => {
  import('./pages/default.js').then((module) => {
    module.page(app)
  })
}).resolve()

router.on({
  '/about': () => {
    import('./pages/about.js').then((module) => {
      module.page(app)
    })
  },
  '/class': () => {
    underDEV()
  },
  '/friends': () => {
    import('./pages/friends.js').then((module) => {
      module.page(app)
    })
  },
  '/photos': () => {
    underDEV()
    // router.navigate('/')
  },
  '/rules': () => {
    import('./pages/rules.js').then((module) => {
      module.page(app)
    })
  },
  '/404': () => {
    import('./pages/E404.js').then((module) => {
      module.page(app)
    })
  }
}).resolve()

router.notFound(() => {
  router.navigate('/404')
})

console.log('%c DACSC\n 大安電研\n 21st\n ', 'font-family: "Ubuntu Mono", monospace;font-size: 5em; color: red;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
