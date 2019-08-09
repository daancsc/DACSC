export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
      <div id="contact"></div>
    </div>
  `
  let items = ['Algorithm', 'Assembly', 'C++', 'Python', 'JavaScript', '<b>DACSC</b>']//, "Your Grandma"]
  items.forEach(i => {
    $('#typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>!</p>`
  })
  app.contact.forEach(i => {
    $('#contact').innerHTML += `<a href="${i.link}"><i class="${i.icon}" aria-hidden="true"></i></a>`
  })
  app.modules.startTyping()
}
