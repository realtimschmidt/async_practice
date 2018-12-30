doThis(andThenThis)

function andThenThis() {
  console.log('and then this')
}

function doThis(callback) {
  console.log('this first')

  callback()
}