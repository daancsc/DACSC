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
  modules: {
    '_': i => _(i),
    '$': i => $(i),
    'startTyping': () => {
      let typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 15
      })
    }
  },
  footer: 'DAAN Computer Study Club since 1999',
  year: new Date().getFullYear(),
  init: () => {
    app.menu.close()
    app.renderBase = ''
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

let underDEV = () => {
  app.init()
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('#typed-strings').innerHTML = `<p>We are under<br><span class="color">Development</span>!</p>`
  app.modules.startTyping()
}

_.addEventListener('DOMContentLoaded', () => {
  pangu.autoSpacingPage();
})

console.log('%c DACSC\n 大安電研\n 21st\n ', 'font-family: "Ubuntu Mono", monospace;font-size: 5em; color: red;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
