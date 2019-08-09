export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.title = `大安高工電腦研究社 | DACSC`
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
      <div id="contact"></div>
    </div>
  `
  items.forEach(i => {
    $('#typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>!</p>`
  })
  contact.forEach(i => {
    $('#contact').innerHTML += `<a href="${i.link}"><i class="${i.icon}" aria-hidden="true"></i></a>`
  })
  app.modules.startTyping()
}

let items = ['Algorithm', 'Assembly', 'C++', 'Python', 'JavaScript', '<b>DACSC</b>']//, "Your Grandma"]
let contact = [
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
]
