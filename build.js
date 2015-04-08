({
  baseUrl: ".",
  name: "bower_components/almond/almond",
  out: "bin/compressjs.min.js",
  include: ['compressjs'],
  wrap: {
    start: "(function (root, factory) { root.compressjs = factory(); }(this, function () { ",
    end: " return require('compressjs'); }));"
  }
})
