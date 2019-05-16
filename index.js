let _ = document
let $ = i=>_.getElementById(i)
let app = {
  "title": "大安高工電腦研究社 | DACSC",
  "name": "大安高工電腦研究社",
  "shortname": "大安電研",
  "en_name": "DACSC",
  "footer": "DAAN Computer Study Club since 1999",
  "year": new Date().getFullYear(),
  "menu": [
    {"text": "課程", "link": "/indexDev.html#class"},
    {"text": "相簿", "link": "/indexDev.html#photos"},
    {"text": "關於電研", "link": "/indexDev.html#about"}
  ]
}
let menushow = false
let menuhtml = ""
let items = ["Algorithm", "Assembly", "C++", "Python", "JavaScript", "<b>DACSC</b>"]//, "Your Grandma"]
items.forEach(i=>{
  $('typed-strings').innerHTML += `<p>We Love <br class="phone"><span class="color">${i}</span>!</p>`
})
app.menu.forEach(i=>{
  $('menu').innerHTML += `<p class="title nonphone menu"><a href="${i.link}">${i.text}</a></p>`
})

_.title = app.title
_.getElementsByClassName('nonphone')[0].innerHTML = app.name
_.getElementsByClassName('phone')[0].innerHTML = app.shortname
$('footer').innerHTML = `© ${app.year} <b>${app.footer}</b>.`
let typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
  backSpeed: 15
})

app.menu.forEach(i=>{
  menuhtml += `<p><a href="${i.link}">${i.text}</a></p>`
})

let showmenu = ()=>{
  if (!menushow) {
    $('phonemenu').innerHTML = menuhtml
  } else {
    $('phonemenu').innerHTML = ""
  }
  menushow = !menushow
}

let closemenu = ()=>{
  $('phonemenu').innerHTML = ""
  menushow = false
}
