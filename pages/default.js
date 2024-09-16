export function page (app) {
  let $ = app.modules.$.bind(app)
  app.init()
  app.title = `大安高工電腦研究社 | DACSC`
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
      <br>
      <span id="typed"></span>
      <p class="news"></p>
      <div id="contact"></div>
    </div>
    <style>
      .news {
        font-size: 1.5em;
      }
    </style>
  `
  items.forEach(i => {
    $('#typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>!</p>`
  })
  contact.forEach(i => {
    $('#contact').innerHTML += `<a target="_blank" rel="noopener noreferrer" href="${i.link}"><i class="${i.icon}" aria-hidden="true"></i></a>`
  })
  news.forEach(i => {
    let today = new Date()
    let yyyy = today.getFullYear()
    let mm = today.getMonth()+1
    let dd = today.getDate()
    if (!(yyyy>=i.deadline.yyyy&&mm>=i.deadline.mm&&dd>=i.deadline.dd)) {
      $('.news').innerHTML += `
        <a target="_blank" rel="noopener noreferrer" href="${i.link}">
          <span class="color"><b>News</b></span> ${i.title}
        </a><br>
      `
    }
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
    link: 'https://www.instagram.com/dacsc26th/',
    icon: 'fab fa-instagram'
  }, {
    name: 'github',
    link: 'https://github.com/daancsc/DACSC',
    icon: 'fab fa-github'
  }
]

let news = [
  /**{
    title: '<span class="color"></span>社團報名表單',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf_rPjcUYpNyK1PmuGyehTi8eeUgdUCT1UJ6kRzPmOgvBlRWQ/viewform',
    deadline: {
      yyyy: 2019,
      mm: 10,
      dd: 1
    }
  }**/
]
