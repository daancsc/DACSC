export function page(app) {
  let $ = app.module.$.bind(app)
  app.init()
  app.title = `關於電研 | ${app.shortname}`
}
