let _ = document
let app = {
  "title": "大安高工電腦研究社 | DACSC",
  "name": "大安高工電腦研究社",
  "shortname": "大安電研",
  "en_name": "DACSC",
  "year": new Date().getFullYear(),
  "menu": [
    {"text": "課程", "link": "/indexDev.html#class"},
    {"text": "相簿", "link": "/indexDev.html#photos"},
    {"text": "關於電研", "link": "/indexDev.html#about"}
  ]
}
let items = ["Algorithm", "Assembly", "C++", "Python", "Javascript", "<b>DACSC</b>"]//, "Your Grandma"]
items.forEach(i=>{
  _.getElementById('typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>.</p>`
})
app.menu.forEach(i=>{
  _.getElementById('menu').innerHTML += `<p class="title nonphone menu"><a href="${i.link}">${i.text}</a></p>`
})
_.title = app.title
_.getElementsByClassName('nonphone')[0].innerHTML = app.name
_.getElementsByClassName('phone')[0].innerHTML = app.shortname
_.getElementById('footer').innerHTML = `© ${app.year} <b>${app.en_name}</b>.`
let typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
  backSpeed: 15
})
