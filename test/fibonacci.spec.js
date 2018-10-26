const assert = require('assert')
const fibonacci = require('../src/fibonacci')

describe('fibonacci', () => {
  it('should return 2 when fibonacci the param is 3', () => {
    assert.equal(2, fibonacci(3))
  })

  it('should return 3 when fibonacci the param is 4', () => {
    assert.equal(3, fibonacci(4))
  })

  it('should return 13 when fibonacci the param is 7', () => {
    assert.equal(13, fibonacci(7))
  })

  it('should throw error when fibonacci the param is 0', () => {
    assert.throws(() => fibonacci(0), Error, 'bad param')
  })

  it('should throw error when fibonacci the param is null', () => {
    assert.throws(() => fibonacci(), Error, 'bad param')
  })
})
