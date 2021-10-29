
module.exports = function examples () {
  indentation()
  singleQuotes()
  unusedVar()
}
function indentation (name) {
    console.log('hi', name)
}

function singleQuotes () {
  console.log("hello there")
}

function unusedVar () {
  var result = something()
}

function spacing() {
  if('condition'=== null) { console.log('spacing') }
}