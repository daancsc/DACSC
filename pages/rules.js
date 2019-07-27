export function page(app) {
  let $ = app.module.$.bind(app)
  app.init()
  app.title = `社團憲章 | ${app.shortname}`
  app.renderBase = `
    <div class="container">
      <p class="page-title">社團憲章</p>
      <hr>
      <br>
      <div id="rules"></div>
    </div>
  `
  fetch('rules.md')
    .then(res => {
      return res.text()
    })
    .then(data => {
      let converter = new showdown.Converter()
      let html = converter.makeHtml(data)
      $('#rules').innerHTML = html
    })
}
