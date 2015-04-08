// This is a build configuration for `r.js`: the require.js optimizer.
//
// You can run it like this: `node_modules/.bin/r.js -o build.js`
//
// It will build compressjs by rolling it (and its modules) into one
// big file. The included wrapper adds `compressjs` to the global
// scope of the page. It doesn't make use of any AMD magic.
//
// In order to build it, you'll need to run `bower` to get a copy of
// `almond.js`. That guy will be added to the optimized output, and
// (with the help of the wrapper) will make all of the modules play
// nice and place `compressjs` in the DOM so that you can get to it
// like a plain ol', vanilla javascript script.

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
