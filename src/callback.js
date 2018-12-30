// output:
// START
// this first
// and then this
// END

const andThenThis = () => console.log('and then this')

const doThis = (callback) => {
  console.log('this first')
  
  callback()
}

console.log('START')

doThis(andThenThis)

console.log('END')