const myPromise = new Promise(function(resolve, reject) {
  console.log('doing something super cool')
  const codeIsFine = true
  if (codeIsFine) {
    resolve('fine')
  } else {
    reject('error')
  }
})

myPromise
  .then(function whenOk(response) {
    console.log(response)
    return response
  })
  .catch(function notOk(err) {
    console.error(err)
  })