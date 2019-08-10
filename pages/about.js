export function page (app) {
  app.init()
  app.title = `關於電研 | ${app.shortname}`
  app.renderBase = `
    <div class="container">
      <div class="left">
        <img src="images/about.jpg"></img>
      </div>
      <div class="right">
        <p class="page-title">社團宗旨</p>
        <hr>
        <p class="textblock">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          聚集所有對資訊有興趣的人，
          共同研究一起成長，
          給學弟妹一個家的感覺，
          除了技術上的提升也可學習人際關係的打理。
        </p>
        <br>
        <p class="page-title">關於我們</p>
        <hr>
        <p class="textblock">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          這裡，是由一群喜愛資訊的人組成的家，
          我們歡迎所有對資訊有興趣的人，
          加入這個超過 500 人的大家庭，
          在這裡，你將遇到許多與你一樣的人，
          加入我們，開創你的視野。
          <br><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          我們有程式語言、製作遊戲、硬體等，
          最豐富多元精彩有趣的課程，
          還能認識到從北到南志同道合的朋友，
          最溫馨的電資大家族，
          我們將在這裡一起學習、一起瘋狂、一起成長，
          讓你在高中生活中留下最難忘的美好回憶。
        </p>
      </div>
    </div>
    <style>
      .container {
        display: grid;
        grid-gap: 2em;
        margin-top: 5em;
        margin-left: 5em;
        margin-right: 5em;
        grid-template-columns: 50% 50%;
        justify-items: center;
        align-items: center;
      }
      .container .left {
        grid-column: 1 / 2;
      }
      .container .right {
        grid-column: 2 / 2;
      }
      .container img {
        vertical-align: middle;
        align-self: center;
        place-self: center;
        width: 95%;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .25);
      }
      .textblock {
        font-size: 16pt;
      }
      @media only screen and (max-width: 850px) {
        .container {
          margin-top: 1em;
          margin-left: 1.5em;
          margin-right: 1.5em;
          grid-template-columns: 100%;
          grid-template-row: 50% 50%;
        }
        .container .left {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .container .right {
          grid-column: 1 / 2;
          grid-row: 2 / 2;
        }
        .container img {
          width: 100%;
        }
      }
    </style>
  `
}
