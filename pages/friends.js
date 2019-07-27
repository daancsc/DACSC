export function page(app) {
  let $ = app.module.$.bind(app)
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
  `
  let j = 0
  let cardHTML = ''
  app.friends.list.forEach(i => {
    let fb = ''
    let ig = ''
    let web = ''
    if (i.fb !== '') {
      fb = `<a href="https://fb.com/${i.fb}"><i class="fab fa-facebook" aria-hidden="true"></i></a>`
    }
    if (i.ig !== '') {
      ig = `<a href="https://www.instagram.com/${i.ig}"><i class="fab fa-instagram" aria-hidden="true"></i></a>`
    }
    if (i.web !== '') {
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
    if ((j + 1) % 4 === 0) {
      $('#friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    if (j === app.friends.list.length - 1) {
      $('#friends').innerHTML += `<div class="section">${cardHTML}</div>`
      cardHTML = ''
    }
    j++
  })
}
