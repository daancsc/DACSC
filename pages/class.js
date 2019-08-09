export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.title = `課程資訊 | ${app.shortname}`
  app.renderBase = `
    <div class="container">
      <p class="page-title">課程資訊</p>
      <hr>
      <br>
      <div id="classinfo"></div>
      <div class="section"></div>
    </div>
    <style>
      .titles {
        font-size: 17pt;
      }
      .discription {
        color: #cebaa5;
        font-size: 12pt;
      }
      .col {
        position: flex;
        height: 260px;
      }
    </style>
  `
  let j = 0
  let cardHTML = ''
  classi.list.forEach(i => {
    cardHTML += `
      <div class="col grid_1_of_4">
        <a href="${i.link}">
        <p class="card_short titles">${i.titles}</p>
        <p class="card_title discription">${i.discription} </p>
        </a>
      </div>
    `
    if ((j + 1) % 4 === 0) {
      $('#classinfo').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    if (j === classi.list.length - 1) {
      $('#classinfo').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    j++
  })
}

let classi = {
  list: [
    {
      titles: '前端網頁設計',
      discription: '我們從最基礎的html/css開始教起，並進入javascript的課程',
      link: ''
    },
    {
      titles: '後端網頁設計',
      discription: '由於這方面選擇過多，我們會介紹各種程式語言、伺服器軟體、資料庫的比較，並請同學們找出自己的興趣去研究',
      link: ''
    },
    {
      titles: '演算法與資料結構',
      discription: '我們會從基礎的C/C++開始教起，之後會深入研究演算法與資料結構，我們期許大家藉由這堂課擴展邏輯與思考能力，並會培養些許人參加相關競賽',
      link: ''
    },
    {
      titles: '遊戲製作',
      discription: '我們會用C#搭配unity3D讓大家製作屬於自己的遊戲，這堂課中你可以完成以前的夢想，學習到開發大型專案的精神',
      link: ''
    },
    {
      titles: '網路管理',
      discription: '我們會培養網路管理人員，負責維護社團伺服器，也許剛進來時連Unix都沒聽過，但經過一年的訓練你將會擁有基本的實力',
      link: ''
    },
    {
      titles: '硬體教學',
      discription: '我們會有外校的人員於星期二放學後進行硬體的教學，目標是讓大家有基礎的電腦硬體知識，社內也有主攻硬體的人才，有問題皆可與他們討論',
      link: ''
    }
  ]
}
