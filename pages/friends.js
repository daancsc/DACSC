export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.title = `電資友社 | ${app.shortname}`
  app.renderBase = `
    <div class="container">
      <p class="page-title">電資友社</p>
      <hr>
      <br>
      <div id="friends"></div>
      <div class="section"></div>
      <p class="no-important">* 如須更新資料請來信告知</p>
    </div>
    <style>
      .col {
        height: 210px;
      }
    </style>
  `
  let j = 0
  let cardHTML = ''
  friends.list.forEach(i => {
    let fb = ''
    let ig = ''
    let web = ''
    if (i.fb !== '') {
      fb = `<a target="_blank" rel="noopener noreferrer" href="https://fb.com/${i.fb}"><i class="fab fa-facebook" aria-hidden="true"></i></a>`
    }
    if (i.ig !== '') {
      ig = `<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/${i.ig}"><i class="fab fa-instagram" aria-hidden="true"></i></a>`
    }
    if (i.web !== '') {
      web = `<a target="_blank" rel="noopener noreferrer" href="${i.web}"><i class="fas fa-globe-asia" aria-hidden="true"></i></a>`
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
    if ((j + 1) % 4 === 0) {
      $('#friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    if (j === friends.list.length - 1) {
      $('#friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    j++
  })
}

let friends = {
  list: [
    {
      name: '建國中學電子計算機研習社',
      shortname: 'CKEISC',
      fb: '',
      ig: 'ckeisc40th',
      web: 'https://ckeisc.org/'
    },
    { name: '北一女中資訊研習社',
      shortname: 'FGISC',
      fb: 'fgisc',
      ig: 'fgisc33rd',
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
      ig: 'infor32nd',
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
}
