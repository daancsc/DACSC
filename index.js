let _ = document
let app = {
  "title": "大安高工電腦研究社 | DACSC",
  "name": "大安高工電腦研究社",
  "shortname": "大安電研",
  "en_name": "DACSC",
  "year": new Date().getFullYear(),
  "menu": [
    {"text": "相簿", "link": "123"},
    {"text": "關於電研", "link": "about"}
  ]
}
let items = ["Algorithm", "C++", "Python", "Javascript", "DACSC"]//, "Grandma"]
items.forEach(i=>{
  _.getElementById('typed-strings').innerHTML += `<p>We Love <br class="phone"><b class="color">${i}</b>.</p>`
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

app.menu.forEach(i=>{
  _.getElementById('menu').innerHTML += `<p class="title nonphone menu"><a href="${i.link}">${i.text}</a></p>`
})
