
module.exports = function (param) {
  if (param % 3 === 0) {
    return 'Fizz'
  }

  if (param % 5 === 0) {
    return 'Buzz'
  }
}
