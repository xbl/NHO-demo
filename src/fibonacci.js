
module.exports = function calc(index) {
  if (!index || index <= 0)
    throw new Error('bad param')
  if (index === 1 || index === 2) {
    return 1
  }
  return calc(index - 2) + calc(index - 1)
}
