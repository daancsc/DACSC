export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.title = `404 Not found | ${app.shortname}`
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('#typed-strings').innerHTML = `<p>Do you love <br class="phone"><span class="color">Error 404</span>?</p>`
  app.modules.startTyping()
}
