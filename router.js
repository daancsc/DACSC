let root = null
let useHash = true
let router = new Navigo(root, useHash)

router.on(() => {
  import('./pages/default.js').then((module) => {
    module.page(app)
  })
}).resolve()

router.on({
  '/about': () => {
    import('./pages/about.js').then((module) => {
      module.page(app)
    })
  },
  '/class': () => {
    import('./pages/class.js').then((module) => {
      module.page(app)
    })
  },
  '/friends': () => {
    import('./pages/friends.js').then((module) => {
      module.page(app)
    })
  },
  '/photos': () => {
    import('./pages/photos.js').then((module) => {
      module.page(app)
    })
    // underDEV()
  },
  '/rules': () => {
    import('./pages/rules.js').then((module) => {
      module.page(app)
    })
  },
  '/404': () => {
    import('./pages/E404.js').then((module) => {
      module.page(app)
    })
  }
}).resolve()

router.notFound(() => {
  router.navigate('/404')
})
