const assert = require('assert')
const fizzBuzz = require('../src/fizz-buzz')

describe('fizz-buzz', function () {
  it('should return Fizz when the param is 3 multiple', function () {
    assert.equal('Fizz', fizzBuzz(3))
  })

  it('should return Fizz when the param is 39 multiple', function () {
    assert.equal('Fizz', fizzBuzz(39))
  })

  it('should return Buzz when the param is 5 multiple', function () {
    assert.equal('Buzz', fizzBuzz(5))
  })
})
