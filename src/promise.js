// output:
// doing something super cool 
// 'fine' when true and 'error' when false


const myPromise = new Promise((resolve, reject) => {
  console.log('doing something super cool')
  const codeIsFine = true
  if (codeIsFine) {
    resolve('fine')
  } else {
    reject('error')
  }
})

const whenOk = (res) => {
  console.log(res)
  return res
}

const notOk = (err) => console.error(err)

myPromise
  .then((response) => 
    whenOk(response))
  .catch((error) =>
    notOk(error))