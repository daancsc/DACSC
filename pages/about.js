export function page (app) {
  app.init()
  app.title = `關於電研 | ${app.shortname}`
  app.renderBase = `
    <div class="container">
      <p class="page-title">關於我們</p>
      <hr>
      <p class="textblock">
        我們有程式語言、製作遊戲、硬體等
        最豐富多元精彩有趣的課程
        還能認識到從北到南志同道合的朋友
        最溫馨的電資大家族
        我們將在這裡一起學習、一起瘋狂、一起成長
        讓你在高中生活中留下最難忘的美好回憶
      </p>
      <br>
      <p class="page-title">社團宗旨</p>
      <hr>
      <p class="textblock">
        聚集所有對資訊有興趣的人
        共同研究一起成長
        給學弟妹一個家的感覺
        除了技術上的提升也可學習人際關係的打理
        <br>
        <br>
        這裡，是由一群喜愛資訊的人組成的家
        我們歡迎所有對資訊有興趣的人
        加入這個超過 500 人的大家庭
        在這裡，你將遇到許多與你一樣的人
        加入我們，開創你的視野
      </p>
    </div>
    <style>
      .container {
        padding-right: 10vw;
        padding-left: 10vw;
      }
      .textblock {
        font-size: 16pt;
      }
    </style>
  `
}
