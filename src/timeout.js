// output:
// 1
// 3
// 2

console.log('1')

const afterTwoSeconds = () => console.log('2')
setTimeout(afterTwoSeconds, 2000)

console.log('3')