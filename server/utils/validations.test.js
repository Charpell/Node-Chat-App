const expect = require('expect');

// import isRealString

// isRealString
  // should reject non-string values
  // should reject string with only spaces
  // should allow string with non-space characters

const { isRealString } = require('./validations');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  })

  it('should reject string with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false)
  })

  it('should allow strings with non-space characters', () => {
    var res = isRealString('  Andrew   ');
    expect(res).toBe(true)
  })
})